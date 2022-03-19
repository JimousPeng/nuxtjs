/*
 * @Date: 2022-03-19 12:02:22
 * @LastEditors: jimouspeng
 * @Description: 通过自定义服务开启nuxt.js
 * @LastEditTime: 2022-03-19 12:45:29
 * @FilePath: \nuxtjs\server.js
 */
const { Nuxt, Builder } = require('nuxt')
const app = require('express')()
const port = process.env.PORT || 3000

// 传入配置初始化 Nuxt.js 实例
const config = require('./server.config.js')
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// 在开发模式下进行编译
if (config.dev) {
  new Builder(nuxt).build()
}

// 监听指定端口
app.listen(port, '0.0.0.0')
console.log('服务器运行于 localhost:' + port)