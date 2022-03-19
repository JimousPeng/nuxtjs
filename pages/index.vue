<!--
 * @Date: 2022-01-28 14:51:02
 * @LastEditors: jimouspeng
 * @Description: 描述文件内容
 * @LastEditTime: 2022-03-19 17:34:55
 * @FilePath: \nuxtjs\pages\index.vue
-->
<template>
    <div>
        <span class="jimous">jimous</span>
        <nuxt-link to="/user">前往用户</nuxt-link>
        <div>{{ title }}</div>
        <div>
            <p>bluma样式</p>
            <a class="button is-small is-primary">Small</a>
            <a class="button is-link">Normal</a>
            <a class="button is-medium is-info">Medium</a>
            <a class="button is-large is-success">Large</a>
        </div>
        <img src="/cat.jpg" mode="" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "用这个主页名字",
        };
    },
    head() {
        return {
            /**
             * 在 head 方法里可通过 this 关键字来获取组件的数据
             * 你可以利用页面组件的数据来设置个性化的 meta 标签
             */
            title: this.title || "主页哦",
            /**
             * 注意：为了避免子组件中的 meta 标签不能正确覆盖父组件中相同的标签而产生重复的现象，
             * 建议利用 hid 键为 meta 标签配一个唯一的标识编号
             */
            meta: [
                {
                    hid: "2333",
                    name: "主页的meta",
                    content: "My custom description",
                },
                {
                    hid: "2334",
                    name: "主页的meta",
                    content: "My custom description",
                },
            ],
        };
    },
    layout: "default",
    created() {
        console.log(process.env.baseUrl, '看看配置');
    }
};
</script>
