/*
 * @Date: 2022-01-28 14:36:11
 * @LastEditors: jimouspeng
 * @Description: 用于组织 Nuxt.js 应用的个性化配置，以便覆盖默认配置, 若无额外配置，该文件不能被重命名
 * @LastEditTime: 2022-02-11 11:43:10
 * @FilePath: \nuxtjs\nuxt.config.js
 */
export default {
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
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

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

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
