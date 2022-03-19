/*
 * @Date: 2022-01-28 14:36:11
 * @LastEditors: jimouspeng
 * @Description: 用于组织 Nuxt.js 应用的个性化配置，以便覆盖默认配置, 若无额外配置，该文件不能被重命名
 * @LastEditTime: 2022-03-19 17:31:23
 * @FilePath: \nuxtjs\nuxt.config.js
 */
export default {
    /** head
     * 借助 head 属性，Nuxt.js 让你可以在 nuxt.config.js 中配置应用的 meta 信息。
     * 你也可以在页面组件中使用 head 配置并通过 this 关键字来获取组件的数据
     * Global page headers: https://go.nuxtjs.dev/config-head
     */
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

    /** css
     * 该配置项用于定义应用的全局（所有页面均需引用的）样式文件、模块或第三方库
     * 如果要使用 sass 就必须要安装 node-sass和sass-loader
     * Global CSS: https://go.nuxtjs.dev/config-css
     * Nuxt.js 会自动识别被导入文件的扩展名，之后，webpack 会使用相应的预处理器进行处理。前提是，你安装了对应预处理器
     */
    css: [
        // 直接加载一个 Node.js 模块 -- bulma。（在这里它是一个 Sass 文件）
        // https://www.ruanyifeng.com/blog/2017/10/bulma.html
        "bulma",
        "~/assets/style/index.scss",
    ],

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
     * @analyze {Boolean} 默认值： false
     * Nuxt.js 使用 webpack-bundle-analyzer 分析并可视化构建后的打包文件，你可以基于分析结果来决定如何优化它
     *
     * @babel { Object }
     * default:
     * { babelrc: false, cacheDirectory: undefined, presets: ['@nuxt/babel-preset-app'] }
     *
     * 默认为 @nuxt/babel-preset-app 在client构建中是ie：'9'，在server构建中是node:'current'
     * 注意: build.babel.presets 中配置的预设将应用于客户端和服务器构建。
     * 目标将由 Nuxt 相应地设置（客户端/服务器）。如果要为客户端或服务器版本配置不同的预设，请使用presets作为函数：
     * 建议使用预设
     *
     * @cache { Boolean } 默认: false
     * 实验性的
     * 启用缓存 terser-webpack-plugin 和 cache-loader
     *
     * @crossorigin { String } 默认: undefined
     * 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标记上配置 crossorigin 属性
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin
     *
     * @cssSourceMap { Boolean }
     * 默认: true 为开发模式(development)， false 为生产模式(production)
     * 开启 CSS Source Map 支持
     *
     * @devMiddleware { Object }
     * 参考webpack-dev-middleware
     *
     * @devtools { boolean } 默认: false
     * 配置是否允许 vue-devtools 调试
     * 如果您已经通过 nuxt.config.js 或其他方式激活，则无论标志为 true 或 false，devtools 都会启用
     *
     * @extend { Function }
     * 为客户端和服务端的构建配置进行手工的扩展处理
     * 该扩展方法会被调用两次，一次在服务端打包构建的时候，另外一次是在客户端打包构建的时候。
     * 该方法的参数如下：
     * 1. Webpack 配置对象
     * 2. 构建环境对象，包括这些属性(全部为布尔类型):isDev，isClient，isServer
     * 警告: 提供的isClient和isServer键与context中可用的键分开， 它们是长期支持的。
     * 这里不要使用process.client和process.server，因为它们是'undefined'
     * loaders in extend
     * loaders具有与之相同的对象结构 build.loaders, 所以你可以在extend中更改loaders的选项
     *
     * @extractCSS { Boolean } 默认: false
     * 使用 Vue 服务器端渲染指南启用常见 CSS 提取
     * 使用extract-css-chunks-webpack-plugin将主块中的 CSS 提取到一个单独的 CSS 文件中（自动注入模板），该文件允许单独缓存文件
     * 当有很多共用 CSS 时建议使用此方法，异步组件中的 CSS 将保持内联为 JavaScript 字符串并由 vue-style-loader 处理
     *
     * @filenames { Object }
     * 自定义打包文件名
     *
     * @friendlyErrors { Boolean } 默认: true (启用叠加)
     * https://github.com/nuxt/friendly-errors-webpack-plugin
     *
     * @hardSource { Boolean } 默认: false
     * https://github.com/mzgoddard/hard-source-webpack-plugin
     *
     * @hotMiddleware { Object }
     * https://github.com/webpack-contrib/webpack-hot-middleware
     *
     * @html.minify { Object }
     * 用于压缩在构建打包过程中创建的 HTML 文件配置html-minifier的插件（将应用于所有模式）。
     * https://www.nuxtjs.cn/api/configuration-build
     *
     * @loaders { Object }
     * 自定义 webpack 加载器
     * 注意：除了在nuxt.config.js中指定配置外，它还可以通过build.extend修改
     *
     * @optimization { Object }
     *
     * @terser Object 或 Boolean
     * 设置为false可以禁用此插件
     *
     * @optimizeCSS Object 或 Boolean
     *
     * @parallel { Boolean } 默认: false
     * 在 webpack 构建打包中开启 thread-loader
     *
     * @plugins { Array } 默认值： []
     * 配置 Webpack 插件
     *
     * @postcss Array, Object(推荐), Function 或 Boolean
     * 注意：Nuxt.js 已应用PostCSS Preset Env。
     * 默认情况下，它将启用Stage 2功能和Autoprefixer,你可以使用build.postcss.preset来配置它
     *
     * @profile { Boolean } 默认: 开启只需在命令行中加入： --profile
     * https://github.com/unjs/webpackbar#profile
     *
     * @publicPath String  默认: '/_nuxt/'
     * Nuxt.js 允许您将dist文件上传到 CDN 来获得最快渲染性能，只需将publicPath设置为 CDN 即可
     *
     * @quiet { Boolean }  默认: 检测到CI或test环境时启用 std-env
     * 控制部分构建信息输出日志
     *
     * @splitChunks { Object }
     * default: { layouts: false, pages: true, commons: true }
     *
     * @ssr { Boolean } 默认: true 为通用模式，false 为spa模式
     * 如果未提供，则根据默认模式自动设置此选项
     * 为服务器端渲染创建特殊的 webpack 包
     *
     * @styleResources { Object } 默认: {}
     * 当您需要在页面中注入一些变量和mixin而不必每次都导入它们时，这非常有用
     * Nuxt.js 使用 https://github.com/nuxt-community/style-resources-module 来实现这种行为
     * 您需要为 css 预处理器指定要包含的 模式 / 路径 ： less, sass, scss 或 stylus
     * [不能在此处使用路径别名(~ 和 @)，]
     *
     * @templates { Array }
     * Nuxt.js 允许您自定义自己的模板，这些模板将基于 Nuxt 配置进行渲染。 此功能特别适用于使用 modules
     *
     * @transpile { Array<string | RegExp> } 默认: []
     * 如果要使用 Babel 与特定的依赖关系进行转换，你可以在build.transpile中添加它们，
     * transpile中的选项可以是字符串或正则表达式对象，用于匹配依赖项文件名
     *
     * @watch { Array<String> }
     * 您可以使用watch来监听文件更改。此功能特别适用用在modules中
     *
     * @followSymlinks { Boolean }
     */
    build: {
        /** analyze
         * 可通过 nuxt build --analyze 或 nuxt build -a 命令来启用该分析器进行编译构建，
         * 分析结果可在 http://localhost:8888 上查看
         */
        // analyze: true,
        // analyze: {
        //     analyzerMode: 'static'
        // }
        // babel: {
        //     presets({ isServer }) {
        //         const targets = isServer ? { node: "10" } : { ie: "11" };
        //         return [
        //             [require.resolve("@nuxt/babel-preset-app"), { targets }],
        //         ];
        //     },
        // },
        extend(config, { isClient }) {
            // 为 客户端打包 进行扩展配置
            if (isClient) {
                config.devtool = "eval-source-map";
            }
        },
        filenames: {
            chunk: ({ isDev }) =>
                isDev ? "[name].[id].js" : "[id].[contenthash].js",
        },
    },

    /** generate
     * 配置 Nuxt.js 应用生成静态站点的具体方式
     * 当运行 nuxt generate 命令或在编码中调用 nuxt.generate() 时，Nuxt.js 会使用 generate 属性的配置
     * https://www.nuxtjs.cn/api/configuration-generate
     */
    generate: {},

    /**
     * server
     * 此选项允许您配置 Nuxt.js 应用程序的服务器实例变量
     * Nuxt.js 允许您为应用程序内部nuxt.config.js中定义服务器访问主机和端口
     */
    server: {
        port: 8001, // default: 3000
        // host: "0.0.0.0", // default: localhost,
        host: '127.0.0.1'
    },

    /**
     * loading Boolean 或 Object 或 String
     * 该配置项用于个性化定制 Nuxt.js 使用的加载组件。
     * 在页面切换的时候，Nuxt.js 使用内置的加载组件显示加载进度条。你可以定制它的样式，禁用或者创建自己的加载组件
     * 在你的组件中你可以使用this.$nuxt.$loading.start()来启动加载条。使用this.$nuxt.$loading.finish()来使加载条结束
     * 如果要在mounted方法中启动它，请确保使用this.$nextTick来调用它，因为$loading可能无法立即使用。
     * https://www.nuxtjs.cn/api/configuration-loading
     */
    loading: false,

    /** dev
     * 该配置项用于配置 Nuxt.js 应用是开发还是生产模式
     * 类型： Boolean
     * dev 属性的值会被 nuxt 命令 覆盖
     * 当使用 nuxt 命令时，dev 会被强制设置成 true
     * 当使用 nuxt build， nuxt start 或 nuxt generate 命令时，dev 会被强制设置成 false
     * 所以，在 编码中使用 nuxt.js 时才会用到该配置
     */
    dev: true,

    /** 配置telemetr=false用于跳过Are you interested in participation?(Y/n) */
    telemetry: false,

    /** env { Object }
     * 该配置项用于定义应用客户端和服务端的环境变量
     * Nuxt.js 让你可以配置在客户端和服务端共享的环境变量
     */
    env: {
        /** 可以通过以下两种方式来使用 baseUrl 变量
         * 1. 通过 process.env.baseUrl
         * 2. 通过 context.env.baseUrl
         * context上下文：
         * asyncData方法会在组件（限于页面组件）每次加载之前被调用。
         * 它可以在服务端或路由更新之前被调用。
         * 在这个方法被调用的时候，第一个参数被设定为当前页面的上下文context对象，
         * 你可以利用 asyncData方法来获取数据并返回给当前组件
         */
        baseUrl: process.env.BASE_URL || "http://localhost.jimous:3000",
    },

    /** 别名
     * ~ 或 @ :
     * 在您的 vue 模板中, 如果你需要引入 assets 或者 static 目录,
     * 使用 ~/assets/your_image.png 和 ~/static/your_image.png方式
     */
};
