<template>
  <div class="scrolls" ref="my_scroller" @scroll="scroll($event.target)">
    <div class="scroll-box" ref="my_scroller_box" :style="diff?{transform: `translate3d(0, ${diff}px, 0)` }:''">
      <div v-if="topLoadMethod"
           :style="{ height: `${topBlockHeight}px`,top: `-${topBlockHeight}px` }"
           class="action-block">
        <svg class="icon"
             :class="{
                'icon-arrow': state === 'trigger',
                'icon-loading': state === 'loading'
             }"
             aria-hidden="true">
          <use :xlink:href="iconLink"></use>
        </svg>
        {{refreshText}}
      </div>
      <div class="scroll-container">
        <slot></slot>
      </div>

      <div class="load" ref="load" v-if="onInfinite">
        <p v-if="loadingState==0">加载完成</p>
        <p v-else-if="loadingState==3" @click="loadingState =1 ;deInit()">加载失败，点击重试</p>
        <p v-else>
          <svg class="load-icon" viewBox="0 0 64 64">
            <use xlink:href="#icon-loading"></use>
          </svg>
          <span>加载中...</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import _ from 'lodash'

  export default {
    data () {
      return {
        loadingState: 1, // 0: stop, 1: loading, 2: stopping loading ,3:loading error
        diff:0,
        beforeDiff:0,
        topLoadMethod: false,
        topBlockHeight: 50,
        startY:0,
        startScrollTop:0,
        distance:0,
        refreshText:'下拉刷新',
        state:'',
        triggerDistance:70,
        parentnode:false,
      }
    },
    props: {
      onRefresh: Function,
      onInfinite: Function,
      noDataText: {
        type: String,
        default: '没有更多数据'
      },
    },
    computed: {
      iconLink (){
        let state = this.state
        let iconLink = ''
        if (state === 'pull' || state === 'trigger') {
          iconLink = '#icon-arrow-bottom'
        } else if (state === 'loading') {
          iconLink = '#icon-loading'
        } else if (state === 'loaded-done') {
          iconLink = '#icon-finish'
        }
        return iconLink
      }
    },
    created (){

    },
    mounted () {
      this.deInit();
      this.topLoadMethod = !!this.onRefresh
      this.bindEvents()
    },
    activated () {},
    methods: {
      deInit:_.debounce(function () {
        if (!this.onInfinite) return
        if (this.loadingState === 0 || this.loadingState === 2 || this.loadingState === 3) return
        if (this.$refs.my_scroller.clientHeight > this.$refs.load.offsetTop) {
          this.loadingState = 2
          this.onInfinite(this.finishInfinite)
          this.deInit()
        } else {
          if ((this.$refs.my_scroller.scrollTop + this.$refs.my_scroller.clientHeight - this.$refs.load.clientHeight) > (this.$refs.load.offsetTop - 50)) {
            this.loadingState = 2
            this.onInfinite(this.finishInfinite)
          }
        }
      }, 300, { 'maxWait': 1000 }),
      finishInfinite (hideSpinner) {
        let states = 1
        switch (hideSpinner) {
          case 'end':
            states = 0
            break
          case 'error':
            states = 3
            break
          default:
            states = 1
        }
        this.loadingState = states
      },
      reload () {
        this.loadingState = 1
        this.$refs.my_scroller.scrollTop = 0
        this.deInit()
      },
      scroll(event){
        this.deInit();
        this.$store.commit('SAVE_PAGE',{'target': event, 'ref': 'my_scroller'})
      },
      scrollTo(y, duration = 200) {
        this.$refs.my_scroller_box.style.transition = `${duration}ms`;
        this.diff = y;
        setTimeout(() => {
          this.$refs.my_scroller_box.style.transition = '';
        }, duration);
      },
      findParent(node){
        if(node.className.indexOf('no_scroll')>-1){
          this.parentnode = true
        }else{
          this.parentnode = false
          if(node.parentNode.nodeName.toLowerCase()!='body'){
            this.findParent(node.parentNode)
          }
        }

      },
      touchstart(event){
        this.startY = event.touches[0].clientY
        this.beforeDiff = this.diff;
        this.startScrollTop = this.$refs.my_scroller.scrollTop
        this.state = 'pull'
        this.refreshText = '下拉刷新'
        this.topLoadMethod = false
      },
      touchmove(event){
        this.findParent(event.target)
        if(this.parentnode){
          return
        }
        this.currentY = event.touches[0].clientY;
        this.distance = (this.currentY - this.startY) / 2 + this.beforeDiff;
        if(this.startScrollTop < 2 && this.distance > 0) {
          this.topLoadMethod = true
          event.preventDefault();
          event.stopPropagation();
          this.diff = this.distance;
          if(this.distance > this.triggerDistance){
            this.state = 'trigger'
            this.refreshText = '放手刷新'
          }else{
            this.state = 'pull'
            this.refreshText = '下拉刷新'
          }
        }
      },
      touchend() {
        if (this.topLoadMethod) {
          if(this.diff < this.triggerDistance){
            this.scrollTo(0)

          }else{
            this.state = 'loading'
            this.scrollTo(this.topBlockHeight);
            this.onRefresh(() => {
              this.refreshText = '加载完成'
              this.state = 'loaded-done'
              setTimeout(() => {
                this.scrollTo(0)
              },400)

            })
            this.refreshText = '加载中...'
          }

        }

      },
      bindEvents() {
        if(this.topLoadMethod){
          this.$refs.my_scroller_box.addEventListener('touchstart', this.touchstart);
          this.$refs.my_scroller_box.addEventListener('touchmove', this.touchmove);
          this.$refs.my_scroller_box.addEventListener('touchend', this.touchend);
        }

      },
    },
    components: {
    }
  }
</script>
<style  lang="css" scoped>
  .scrolls{
    display: flex;
  }
  .scrolls .scroll-box{
    width: 100%;
  }
  .action-block{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    min-height: .9rem;
    width: 100%;
      }
  .action-block svg{
    display:block;
    margin-right:.2rem;
    width:.3rem;
    height:.3rem;
    fill: #555;
    will-change: transform;
  }
  .action-block svg.icon-arrow{
    transition: .2s;
    transform: rotate(180deg);
  }
  .load{
    text-align: center;
  }
  .load p{
    font-size: .26rem;
    color: #555;
    line-height: .8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: .9rem;
  }
  .load-icon{
    display:block;
    margin-right:.2rem;
    width:.3rem;
    height:.3rem;
    fill: #555;
    will-change: transform;
  }
</style>
