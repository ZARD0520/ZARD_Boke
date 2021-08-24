<template>
    <el-card class="box-card" shadow="hover">
        <div class="top">
            <div class="title">更多功能</div>
        </div>
        <div class="bottom">
            <div class="more">
                <a href="https://baike.baidu.com/item/%E5%9D%82%E4%BA%95%E6%B3%89%E6%B0%B4/3482174?fr=aladdin" target="_blank">
                    <span>ZARD简介</span>
                </a>
                <a href="javascript:;" target="_self" @click="showFriend">
                    <span>友情链接</span>
                </a>
                <a href="javascript:;" target="_self" @click="showMoney">
                    <span>赞赏博主</span>
                </a>
            </div>
        </div>
    </el-card>
</template>

<script>

export default {
    name:'userMore',
    methods:{
        showMoney(){
            this.$store.commit('changeMoneyCode')
        },
        showFriend(){
            this.$router.replace('/Home/friend')
        }
    }
}
</script>

<style scoped>
    .box-card{
        margin:0 auto;
        margin-top: 20px;
        width: 90%;
        height: 100px;
        background-color: rgba(240, 240, 240, 0.8);
    }
    .top{
        position: relative;
        top:-16px;
        width: 80%;
        text-align: center;
        border-bottom: solid 1px rgba(160, 160, 160,0.8);
    }
    .title{
        margin-bottom: 10px;
    }
    a{
        color: rgb(100, 100, 100);
        background-color: #fff;
        margin:0 4px 0 4px;
        padding:2px 4px 2px 4px;
        border:solid 1px rgb(100, 100, 100);
        border-radius: 2px;
    }
    a:hover{
        background-color: rgba(180, 180, 180, 0.6);
    }
</style>