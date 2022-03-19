<template>
    <div>
        <span>当前页面：pages/user/index</span>
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/user/jimous">个人页面{{ counter }}</nuxt-link>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    asyncData(context) {
        console.log(context.env.baseUrl, '打印看看context');
        return { project: "nuxt" };
    },
    computed: {
        ...mapState(["counter"]),
    },
};
</script>
<style lang="scss" scoped></style>
