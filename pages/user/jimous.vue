<template>
    <div>
        <span class="jimous" @click.stop="addState">page: jimous</span>
        <nuxt-link to="/user">回到user{{counter}}</nuxt-link>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
    created() {
        console.log();
    },
    computed: {
        ...mapState(['counter'])
    },
    methods: {
        ...mapMutations(['incream']),
        addState() {
            this.incream()
        }
    }
}
</script>
<style lang='scss' scoped>
</style>