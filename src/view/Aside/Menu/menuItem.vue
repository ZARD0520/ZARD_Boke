<template>
    <div class="menu-item" @click="itemClick" :style="activeStyle">
        <slot name="icon"></slot>
        <slot name="name"></slot>
    </div>
</template>

<script>
export default {
    name:"menuItem",
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'darkcyan'
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    methods:{
        itemClick(){
            this.$router.replace(this.path)
        }
    }
}
</script>

<style scoped>

</style>