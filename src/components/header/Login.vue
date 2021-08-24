<template>
    <div class="Login">
        <a href="javascript:;" @click="Login" v-if="!getStatus">
            <p>登录</p>
        </a>
        <a href="javascript:;" v-else @click="toProfile">
            <img :src="userInfo.avatar" alt="图片飞走啦" title="点击查看个人信息">
        </a>
    </div>
</template>

<script>
import {getProfile} from '@/network/profile'

export default {
    name:'Login',
    data(){
        return{
            userInfo:{}
        }
    },
    created(){
        var user = sessionStorage.getItem('user')
        if(user){
            getProfile(user).then(res=>{
                this.userInfo = res.data.data
            })
        }
    },
    computed:{
        getStatus(){
            if(sessionStorage.getItem('user')){
                return true
            }
        }
    },
    methods:{
        Login(){
            this.$router.replace('/login')
        },
        toProfile(){
            this.$router.replace('/Home/profile')
        }
    }
}
</script>

<style scoped>
    .Login{
        font-size: 20px;
    }
    a{
        text-decoration-line: none;
        color: aliceblue;
    }
    p{
        color: aliceblue;
    }
    p:hover{
        color: rgb(172, 170, 170);
    }
    img{
        position: relative;
        width: 42px;
        height: 42px;
        border-radius: 10px;
        box-shadow: gainsboro;
        top:2px;
    }
    span{
        font-size: 16px;
    }
</style>