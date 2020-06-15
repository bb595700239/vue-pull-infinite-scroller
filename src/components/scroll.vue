<template>
  <div class="scrolls" ref="my_scroller" @scroll="scroll($event.target)">
    <svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
      <symbol id="icon-finish" viewBox="0 0 1024 1024">
        <path
          d="M980.293 311.85c-25.697-60.751-62.485-115.314-109.345-162.17-46.858-46.865-101.425-83.653-162.173-109.342-62.89-26.606-129.708-40.094-198.587-40.094-68.881 0-135.697 13.488-198.585 40.093-60.753 25.695-115.316 62.482-162.178 109.342-46.86 46.858-83.642 101.421-109.345 162.17-26.599 62.893-40.082 129.706-40.082 198.588 0 68.879 13.483 135.694 40.082 198.588 25.703 60.747 62.485 115.308 109.349 162.171 46.858 46.86 101.421 83.644 162.173 109.347 62.893 26.596 129.703 40.084 198.585 40.084 68.883 0 135.697-13.485 198.588-40.084 60.747-25.703 115.316-62.485 162.173-109.347 46.86-46.863 83.647-101.421 109.345-162.171 26.596-62.893 40.084-129.709 40.084-198.588-0.001-68.88-13.486-135.694-40.085-198.587zM916.764 682.151c-22.221 52.533-54.044 99.723-94.586 140.273-40.545 40.545-87.742 72.369-140.275 94.586-54.338 22.986-112.115 34.639-171.713 34.639-59.601 0-117.379-11.653-171.715-34.639-52.533-22.218-99.723-54.039-140.275-94.589-40.545-40.538-72.364-87.737-94.583-140.27-22.988-54.343-34.639-112.115-34.639-171.713 0-59.601 11.651-117.374 34.634-171.715 22.225-52.537 54.046-99.728 94.589-140.273 40.553-40.547 87.742-72.375 140.275-94.586 54.343-22.986 112.115-34.636 171.715-34.636 59.598 0 117.37 11.651 171.713 34.636 52.533 22.213 99.723 54.039 140.275 94.583 40.545 40.553 72.367 87.739 94.586 140.27 22.986 54.348 34.639 112.121 34.639 171.722 0 59.598-11.654 117.37-34.64 171.713zM749.188 378.978c-9.597 0-18.618 3.733-25.426 10.543l-261.919 260.34-164.428-164.653c-6.791-6.791-15.814-10.527-25.413-10.527-9.597 0-18.612 3.735-25.391 10.527-14.009 14.002-14.009 36.798-0.044 50.769 19.331 19.143 38.675 38.277 57.985 57.453 31.71 31.475 63.614 62.761 95.277 94.283 5.942 5.907 11.862 11.826 17.87 17.658 13.483 13.090 25.054 33.082 46.364 32.429 14.87-0.454 26.158-10.765 35.459-21.331 10.662-12.11 21.049-24.035 32.475-35.485 21.988-22.034 44.097-43.954 66.085-65.984 25.941-25.993 51.846-52.034 77.806-78.002 21.828-21.83 43.68-43.643 65.482-65.501 10.549-10.58 21.030-21.241 31.659-31.744 0.166-0.166 0.347-0.325 0.515-0.494 6.914-6.919 10.841-15.844 11.044-25.132 0.204-9.23-3.348-17.978-10.004-24.634-6.78-6.785-15.802-10.516-25.393-10.516z"></path>
      </symbol>
      <symbol id="icon-loading" viewBox="0 0 64 64">
        <path fill-rule="evenodd"
              d="M60 36h-8c-2.203 0-4-1.797-4-4 0-2.208 1.797-4 4-4h8c2.203 0 4 1.792 4 4 0 2.203-1.797 4-4 4zM48.973 20.686a4 4 0 0 1-5.66 0 3.995 3.995 0 0 1 0-5.655l5.66-5.653a3.99 3.99 0 0 1 5.65 0 4 4 0 0 1 0 5.655l-5.65 5.656zM32 64a4 4 0 0 1-4-4v-8a4 4 0 0 1 4-4c2.203 0 4 1.797 4 4v8c0 2.203-1.797 4-4 4zm0-48a4 4 0 0 1-4-4V4a4 4 0 1 1 8 0v8c0 2.208-1.797 4-4 4zM15.03 54.624a3.995 3.995 0 0 1-5.654 0 3.99 3.99 0 0 1 0-5.65l5.655-5.66a3.995 3.995 0 0 1 5.657 0 4.004 4.004 0 0 1 0 5.66l-5.655 5.65zm0-33.938L9.373 15.03a3.995 3.995 0 0 1 0-5.654 4 4 0 0 1 5.654 0l5.655 5.655a3.995 3.995 0 0 1 0 5.657 3.99 3.99 0 0 1-5.65 0zM16 32a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4 4 4 0 0 1 4-4h8a4 4 0 0 1 4 4zm32.973 11.314l5.65 5.66a3.99 3.99 0 0 1 0 5.65 3.992 3.992 0 0 1-5.65 0l-5.66-5.65a4 4 0 0 1 0-5.66 4 4 0 0 1 5.66 0z"
              fill="">
          <animateTransform attributeName="transform" begin="0s" dur="1.2s" type="rotate" from="0 32 32" to="360 32 32"
                            repeatCount="indefinite"/>
        </path>
      </symbol>
      <symbol id="icon-arrow-bottom" viewBox="0 0 1024 1024">
        <path
          d="M793.036 736.931l-248.058 248.058c-4.425 5.631-10.156 10.054-16.992 12.567-0.502 0.1-0.803 0.202-1.106 0.202-4.022 1.809-8.446 2.411-12.87 2.614-0.602 0-1.307 0.502-1.909 0.502-1.206 0-2.213-0.803-3.419-0.803-2.614-0.202-5.228-0.803-7.844-1.71-3.116-0.803-5.934-2.113-8.746-3.518-1.71-0.906-3.317-2.114-4.928-3.317-1.409-1.106-3.219-1.609-4.525-3.116l-251.575-251.475c-16.287-16.19-16.287-42.531 0-58.522 16.090-16.19 42.433-16.19 58.722 0l180.99 180.887v-403.406c0-23.127 18.803-42.131 41.929-42.131s41.929 18.905 41.929 42.131v402.098l179.783-179.581c15.987-16.191 42.433-16.19 58.621 0 16.090 15.987 16.090 42.331 0 58.522zM512.402 302.354c-23.127 0-41.929-18.803-41.929-41.929 0-23.026 18.703-41.828 41.929-41.828 23.227 0 41.929 18.803 41.929 41.828 0.1 23.227-18.703 41.929-41.929 41.929zM512.402 106.885c-23.127 0-41.929-18.703-41.929-41.929 0-23.026 18.703-41.828 41.929-41.828 23.227 0 41.929 18.803 41.929 41.828 0.1 23.227-18.703 41.929-41.929 41.929z"></path>
      </symbol>
    </svg>
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
        <p v-if="loadingState==0">{{noDataText}}</p>
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
        diff: 0,
        beforeDiff: 0,
        topLoadMethod: false,
        topBlockHeight: 50,
        startY: 0,
        startScrollTop: 0,
        distance: 0,
        refreshText: '下拉刷新',
        state: '',
        triggerDistance: 70,
        parentnode: false,
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
    activated () {
    },
    methods: {
      deInit: _.debounce(function () {
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
      }, 300, {'maxWait': 1000}),
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
      },
      scrollTo(y, duration = 200) {
        this.$refs.my_scroller_box.style.transition = `${duration}ms`;
        this.diff = y;
        let timeout = setTimeout(() => {
          this.$refs.my_scroller_box.style.transition = '';
          window.clearTimeout(timeout)
        }, duration);
      },
      findParent(node){
        if (node.className.indexOf('no_scroll') > -1) {
          this.parentnode = true
        } else {
          this.parentnode = false
          if (node.parentNode.nodeName.toLowerCase() != 'body') {
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
        if (this.parentnode) {
          return
        }
        this.currentY = event.touches[0].clientY;
        this.distance = (this.currentY - this.startY) / 2 + this.beforeDiff;
        if (this.startScrollTop < 2 && this.distance > 0) {
          this.topLoadMethod = true
          event.preventDefault();
          event.stopPropagation();
          this.diff = this.distance;
          if (this.distance > this.triggerDistance) {
            this.state = 'trigger'
            this.refreshText = '放手刷新'
          } else {
            this.state = 'pull'
            this.refreshText = '下拉刷新'
          }
        }
      },
      touchend() {
        if (this.topLoadMethod) {
          if (this.diff < this.triggerDistance) {
            this.scrollTo(0)

          } else {
            this.state = 'loading'
            this.scrollTo(this.topBlockHeight);
            this.onRefresh(() => {
              this.refreshText = '加载完成'
              this.state = 'loaded-done'
              let timeout = setTimeout(() => {
                this.scrollTo(0)
                this.reload();
                window.clearTimeout(timeout)
              }, 400);
            })
            this.refreshText = '加载中...'
          }

        }

      },
      bindEvents() {
        if (this.topLoadMethod) {
          this.$refs.my_scroller_box.addEventListener('touchstart', this.touchstart);
          this.$refs.my_scroller_box.addEventListener('touchmove', this.touchmove);
          this.$refs.my_scroller_box.addEventListener('touchend', this.touchend);
        }
      },
    }
  }
</script>
<style lang="css" scoped>
  .scrolls {
    display: flex;
    font-size: .26rem;
    overflow-y: auto;
  }

  .scrolls .scroll-box {
    width: 100%;
  }

  .action-block {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    min-height: .9rem;
    width: 100%;
  }

  .action-block svg {
    display: block;
    margin-right: .2rem;
    width: .3rem;
    height: .3rem;
    fill: #555;
    will-change: transform;
  }

  .action-block svg.icon-arrow {
    transition: .2s;
    transform: rotate(180deg);
  }

  .load {
    text-align: center;
  }

  .load p {
    font-size: .26rem;
    color: #555;
    line-height: .8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: .9rem;
    margin: 0;
  }

  .load-icon {
    display: block;
    margin-right: .2rem;
    width: .3rem;
    height: .3rem;
    fill: #555;
    will-change: transform;
  }
</style>
