<style lang="less" scoped>
    @import url('./main.less');
</style>

<template>
    <div>
        <header></header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import header from '@/components/header/header.vue'

    export default {
        
    }
</script>


