<template>
    <div id="profile-wait">
        <div class="title">
            <h2>欢迎加入WEZARD~</h2>
            <p>您还未登录，无法查看个人信息呢，点击下方进行登录/注册</p>
        </div>
        <div class="button">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button @click="register">加入我们</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name:'profileWait',
    methods:{
        login(){
            this.$router.replace('/login')
        },
        register(){
            this.$router.replace('/login/Register')
        }
    }
}
</script>

<style scoped>
    .button{
        margin-top:40px;
    }
    h2{
        color:rgb(110,120,120);
    }
    p{
        margin-top:20px;
    }
</style>