# 资源目录 assets 

默认情况下 Nuxt 使用 **vue-loader、file-loader** 以及 **url-loader** 这几个 Webpack 加载器来处理文件的加载和引用。

用于组织未编译的静态资源如 LESS、SASS 或 JavaScript

------

对于不需要通过 Webpack 处理的静态资源文件，可以放置在 static 目录中

即如果你的静态资源文件需要 Webpack 做构建编译处理，可以放到 assets 目录，否则可以放到 static 目录中去

