# vue-pull-infinite-scroller ![version](https://img.shields.io/badge/version-%20v1.0.3%20-green.svg) ![vue](https://img.shields.io/badge/vue-%20v2.1%20-green.svg) 

[vue-pull-infinite-scroller](https://github.com/bb595700239/vue-pull-infinite-scroller) is a native scrolling component that performs well in a webview, pull to refresh & infinite loading.

## Demo

[http://joubn.com/vue-pull-infinite-scroller/dist/example/index.html](http://joubn.com/vue-pull-infinite-scroller/dist/example/index.html)


## How to use

```bash
npm i vue-pull-infinite-scroller -S
```

```js
import Vue from 'vue'
import VuePullInfiniteScroller from 'vue-pull-infinite-scroller'
Vue.use(VuePullInfiniteScroller)
```

```html
<pull-infinite-scroller 
  :on-refresh="refresh"
  :on-infinite="infinite">
  <!-- content goes here -->
</pull-infinite-scroller>
```
```js
methods: {
    refresh: function (done) {
        // ajax
        done();
    },
    infinite: function (done) {
    // ajax
        
        // success
            // go on
            done()
            // end
            done('end')
        
        // error
        done('error')
    }
}
```

## 重要

<b>组件一定要设置固定高度</b>

<b>组件内包含另一种块滑动区域（如：amap）可以写在class为`no_scroll`容器里</b>



## API

#### scroller component attributes:

| Attr. Name | Description | Required | Default Value |
|-----|-----|-----|-----|
| onRefresh | pull to refresh callback | N | - |
| onInfinite | infinite loading callback | N | - |


#### scroller vm instance methods:

- `reload()` reload scroller



