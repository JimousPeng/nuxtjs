# 静态文件目录 static 

用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。

服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。

------

举个例子: /static/robots.txt 映射至 /robots.txt

你可以在代码中使用根路径 / 结合资源相对路径来引用静态资源

请注意: 从 Nuxt 2.0 开始，~/alias将无法在CSS 文件中正确解析。
你必须在 url CSS 引用中使用~assets（没有斜杠）或@别名，即background:url("~assets/banner.svg")

```
<!-- 引用 static 目录下的图片 -->
<img src="/my-image.png" />

<!-- 引用 assets 目录下经过 webpack 构建处理后的图片 -->
<img src="~/assets/my-image-2.png" />
```

**若无额外配置，该目录不能被重命名**