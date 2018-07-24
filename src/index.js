import Scroller from './components/scroll.vue'

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('pullInfiniteScroller', Scroller)
}

const VuePullInfiniteScroller = {
  install: install,
  Scroller
}

if (typeof window !== undefined && window.Vue) {
  window.Vue.use(VuePullInfiniteScroller)
}

export default VuePullInfiniteScroller
