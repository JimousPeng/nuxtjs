# 插件目录 plugins 

用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件

 <u>**需要注意的是，在任何 Vue 组件的[生命周期](https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram)内， 只有 `beforeCreate` 和 `created` 这两个方法会在 客户端和服务端被调用。其他生命周期函数仅在客户端被调用。**</u> 

#### 使用第三方模块

 我们可以在应用中使用第三方模块，一个典型的例子是在客户端和服务端使用 [axios](https://github.com/mzabriskie/axios) 做 HTTP 请求。 

```
安装 npm 包： npm install --save axios

在页面内这样使用：
<template>
  <h1>{{ title }}</h1>
</template>

<script>
  import axios from 'axios'

  export default {
    async asyncData({ params }) {
      let { data } = await axios.get(`https://my-api/posts/${params.id}`)
      return { title: data.title }
    }
  }
</script>
```

#### 使用 Vue 插件

 假如我们想使用 [vue-notifications](https://github.com/se-panfilov/vue-notifications) 显示应用的通知信息，我们需要在程序运行前配置好这个插件。 

 首先增加文件 `plugins/vue-notifications.js`： 

```
import Vue from 'vue'
import VueNotifications from 'vue-notifications'

Vue.use(VueNotifications)
```

 然后, 在 `nuxt.config.js` 内配置 `plugins` 如下： 

```
module.exports = {
  plugins: ['~/plugins/vue-notifications']
}
```



#### 只在客户端使用的插件

 不支持 ssr 的系统，插件只在浏览器里使用，这种情况下下，你可以用 `ssr: false` ，使得插件只会在客户端运行。 

```
module.exports = {
  plugins: [{ src: '~/plugins/vue-notifications', ssr: false }]
}
```

**传统命名插件**

 如果假设插件仅在 *客户端* 或 *服务器端* 运行，则 `.client.js` 或 `.server.js`可以作为插件文件的扩展名应用，该文件将自动包含在相应客户端或者服务端上 

```
nuxt.config.js:

export default {
  plugins: [
    '~/plugins/foo.client.js', // only in client side
    '~/plugins/bar.server.js', // only in server side
    '~/plugins/baz.js' // both client & server
  ]
}
```

