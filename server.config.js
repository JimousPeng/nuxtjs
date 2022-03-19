/*
 * @Date: 2022-01-28 14:36:11
 * @LastEditors: jimouspeng
 * @Description: 为server.js引用nuxt.js框架用的配置文件
 * @LastEditTime: 2022-03-19 16:18:59
 * @FilePath: \nuxtjs\server.config.js
 */
module.exports = {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "jimous",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "123232", name: "description", content: "全局meta" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["bulma", "~/assets/style/index.scss"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        "@nuxt/typescript-build",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    /** build
     * Build Configuration: https://go.nuxtjs.dev/config-build
     * Nuxt.js 允许你在自动生成的 vendor.bundle.js 文件中添加一些模块，以减少应用 bundle 的体积。
     * 如果你的应用依赖第三方模块，这个配置项是十分实用的
     */
    build: {},
    /** dev
     * 该配置项用于配置 Nuxt.js 应用是开发还是生产模式
     * 类型： Boolean
     * dev 属性的值会被 nuxt 命令 覆盖
     * 当使用 nuxt 命令时，dev 会被强制设置成 true
     * 当使用 nuxt build， nuxt start 或 nuxt generate 命令时，dev 会被强制设置成 false
     * 所以，在 编码中使用 nuxt.js 时才会用到该配置
     */
    dev: true,
    telemetry: false,
};
