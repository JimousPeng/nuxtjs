# 中间件
每一个中间件应放置在 middleware/ 目录。
文件名的名称将成为中间件名称 (middleware/auth.js将成为 auth 中间件)。

------

**一个中间件接收 context 作为第一个参数：**

```javascript
export default function (context) {
  context.userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
}
```

 中间件执行流程顺序： 

1. `nuxt.config.js`
2. 匹配布局
3. 匹配页面

中间件可以异步执行,只需要返回一个 `Promise` 或使用第 2 个 `callback` 作为第一个参数：

 middleware/stats.js 

```js
import axios from 'axios'

export default function ({ route }) {
  return axios.post('http://my-stats-api.com', {
    url: route.fullPath
  })
}
```

 然后在你的 `nuxt.config.js` 、 layouts 或者 pages 中使用中间件: 

 nuxt.config.js 

```
module.exports = {
  router: {
    middleware: 'stats'
  }
}
```

 现在，`stats` 中间件将在每个路由改变时被调用 



 您也可以将 middleware 添加到指定的布局或者页面: 

 `pages/index.vue` 或者 `layouts/default.vue` 

```
export default {
  middleware: 'stats'
}
```

