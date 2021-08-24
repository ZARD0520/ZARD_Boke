<template>
    <div class="aside">
        <menu-list/>
    </div>
</template>

<script>
import menuList from './Menu/menuList'

export default {
    name:'aside',
    components:{
        menuList
    }
}
</script>

<style scoped>
    .aside{
        height: 100%;
    }
    span{
        color: rgba(10, 91, 102, 0.5);
        font-weight: bolder;
    }
</style>