<template>
    <el-card class="box-card" shadow="hover">
        <div class="top">
            <div class="title">联系方式</div>
        </div>
        <div class="bottom">
            <div class="contact_list">
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
    </el-card>
</template>

<script>

export default {
    name:'userContact',
    methods:{
        showCode(){
            this.$store.commit('showCode')
        }
    }
}
</script>

<style scoped>
    .box-card{
        width: 90%;
        height: 100px;
        margin:0 auto;
        margin-top:20px;
        background-color: rgba(240, 240, 240, 0.8);
    }
    .top{
        width: 80%;
        text-align: center;
        border-bottom: solid 1px rgba(160, 160, 160,0.8);
    }
    .title{
        margin-bottom: 10px;
    }
    img{
        width: 40px;
        height: 40px;
    }
    a:hover{
        background-color: aliceblue
    }
    a{
        width: 48px;
        height: 48px;
        margin: 5px 8px 0 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    .contact_list{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>