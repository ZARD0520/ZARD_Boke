<template>
    <el-card class="box-card" shadow="hover">
        <div class="background"></div>
        <div class="img">
            <a href="javascript:;" @click="manager">
                <img v-lazy="userImg" alt="图片飞走啦~" title="点击进入后台管理系统~">
            </a>
        </div>
        <div class="name">
            <p class="name">WEZARD</p>
        </div>
    </el-card>
</template>

<script>
export default {
    name:'user',
    data(){
        return{
            userImg:'http://47.112.128.68/server/public/staticImg/Moon2.jpg'
        }
    },
    methods:{
        manager(){
            alert('此功能还未开发，哈哈哈')
        }
    }
}
</script>

<style scoped lang="scss">
    .box-card{
        width: 90%;
        height: 200px;
        margin: 0 auto;
        padding: 0;
        border:0;
        background-color: rgba(240, 240, 240, 0.8);
    }
    .card_content{
        height: 120px;
        text-align: center;
    }
    .background{
        width: 100%;
        height: 50%;
        background-image: url("~@/assets/img/bg3.jpg");
        background-size: cover;
        background-repeat: no-repeat;
    }
    .img{
        position: relative;
        bottom:40px;
        width: 100%;
        height: 25%;
        text-align: center;
    }
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        border:3px solid rgba(168, 168, 168, 0.6);
    }
    img:hover{
        animation: rotate 0.6s ease;
        width: 70px;
        height: 70px;
    }
    .name{
        height: 25%;
        padding-left: 4px;
    }
    .name::before{
        clear: both;
    }
    p{
        font-weight: bold;
        color: rgb(43, 63, 63);
    }
    a{
        text-decoration: none;
    }

    @keyframes rotate {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
</style>