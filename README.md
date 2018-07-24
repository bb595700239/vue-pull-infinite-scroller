# vue-pull-infinite-scroller
## How to use


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


## Webpack project by vue-cli



## API

#### Scroller component attributes:

| Attr. Name | Description | Required | Default Value |
|-----|-----|-----|-----|
| onRefresh | pull to refresh callback | N | - |
| onInfinite | infinite loading callback | N | - |
| noDataText | no data text | N | 没有更多数据 |

