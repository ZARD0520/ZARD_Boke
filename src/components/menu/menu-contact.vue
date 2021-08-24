<template>
    <div id="contact">
        <h3>联系方式</h3>
        <div class="contact-list">
            <a href="https://space.bilibili.com/191170748" target="_blank">
                <img src="~@/assets/icon/bilibili.svg" alt="">
            </a>
            <a href="https://github.com/ZARD0520" target="_blank">
                <img src="~@/assets/icon/github.svg" alt="">
            </a>
            <a href="javascript:;" target="_self" @click="showCode">
                <img src="~@/assets/icon/weixin.svg" alt="">
            </a>
            <a href="https://twitter.com/ZARD_0520" target="_blank">
                <img src="~@/assets/icon/twitter.svg" alt="">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'menu-contact',
    methods:{
        showCode(){
            this.$store.commit('showCode')
        }
    }
}
</script>

<style scoped>
    #contact{
        margin-top:14px;
    }
    h3{
        width: 80%;
        margin:0 auto;
        padding-bottom:4px;
        margin-bottom:8px;
        border-bottom:1px solid rgb(216, 216, 216);
    }
    img{
        width: 40px;
        height: 40px;
    }
    a:hover{
        background-color: aliceblue
    }
    a{
        width: 52px;
        height: 48px;
        margin: 6px 10px 0 8px;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
</style>