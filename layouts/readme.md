# 布局目录 layouts 用于组织应用的布局组件。

默认布局

可通过添加 layouts/default.vue 文件来扩展应用的默认布局

**提示: 别忘了在布局文件中添加 <nuxt/> 组件用于显示页面的主体内容。**


#### 自定义布局
layouts 目录中的每个文件 (顶级) 都将创建一个可通过页面组件中的 layout 属性访问的自定义布局。

假设我们要创建一个 博客布局 并将其保存到 layouts/blog.vue:

```
<template>
  <div>
    <div>我的博客导航栏在这里</div>
    <nuxt />
  </div>
</template>
```

然后我们必须告诉页面 (即pages/posts.vue) 使用您的自定义布局：

```
<template>
  <!-- Your template -->
</template>
<script>
  export default {
    layout: 'blog'
    // page component definitions
  }
</script>
```

#### 错误页面

你可以通过编辑 layouts/error.vue 文件来定制化错误页面.
**警告: 虽然此文件放在 layouts 文件夹中, 但应该将它看作是一个 页面(page).**

这个布局文件不需要包含 <nuxt/> 标签。

你可以把这个布局文件当成是显示应用错误（404，500 等）的组件



**若无额外配置，该目录不能被重命名**