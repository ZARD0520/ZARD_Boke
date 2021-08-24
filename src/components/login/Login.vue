<template>
    <div id="Login">
        <div class="back">
            <a href="javascript:;" @click="back">回到过去</a>
        </div>
        <div class="form">
            <div class="input-name">
                <p>你的名字</p>
                <span class="tips1">请输入名字!</span>
                <input type="text" size="20" v-model="username"/>
            </div>
            <div class="input-password">
                <p>密码</p>
                <span class="tips2">请输入密码!</span>
                <input type="password" size="20" v-model="password"/>
            </div>
            <a href="javascript:;" class="login-button" @click="login">
                <span>登录</span>
            </a>
        </div>
        <div class="more">
            <a href="javascript:;" @click="register">成为WEZARD</a>
            <span> / </span>
            <a href="javascript:;" @click="forget">忘记密码?</a>
        </div>
    </div>
</template>

<script>
import {Login} from '@/network/login'

export default {
    name:'Login',
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        back(){
            this.$router.replace('/Home')
        },
        login(){
            if(this.username === ''){
                this.$el.querySelector('.tips1').style.display = 'block'
            }else if(this.password === ''){
                this.$el.querySelector('.tips2').style.display = 'block'
            }else{
                this.$el.querySelector('.tips1').style.display = 'none'
                this.$el.querySelector('.tips2').style.display = 'none'
                //请求登录
                Login(this.username,this.password).then(res=>{
                    var status = res.data.err_code
                    if(status===1){
                        alert('用户或密码不存在')
                    }else if(status===0){
                        //做登录成功的处理
                        this.$store.dispatch('checkLogin',{
                            token:res.data.token,
                            user:res.data.username
                        })
                        this.$router.replace('/Home')
                    }
                })
            }
        },
        register(){
            this.$router.push('Register')
        },
        forget(){
            alert('哈哈哈，本功能还没开发出来')
        }
    }
}
</script>

<style scoped>
    #Login{
        background-color: rgba(122, 122, 122, 0.6);
        height: 200px;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        padding-bottom:6px;
    }
    .form{
        position: relative;
        text-align: center;
    }
    .input-name input,.input-password input{
        border:2px solid rgb(160, 160, 160);
        border-radius: 4px;
        line-height:24px;
        width: 160px;
    }
    .input-name,.input-password{
        margin-bottom:6px;
    }
    .input-password{
        float: left;
    }
    .form div{
        text-align: left;
    }
    .form p{
        margin-bottom:2px;
    }
    .login-button{
        display: inline-block;
        position: relative;
        bottom:30px;
        left:10px;
        border:2px solid rgb(88,195,224);
        height: 80px;
        width: 80px;
        border-radius: 50%;
        color:rgb(88,195,224);
        font-size: 16px;
    }
    .login-button:hover{
        background-color: aliceblue;
    }
    .login-button span{
        position: relative;
        top:26px;
    }
    .form::after{
        content:'';
        display: block;
        clear: both;
    }
    .back{
        margin-left:6px;
        margin-right:16px;
    }
    .more{
        margin-right:6px;
    }
    .tips1,.tips2{
        position: absolute;
        left:-95px;
        display: none;
    }
    p{
        color: aliceblue;
    }
    a{
        color: rgb(88,195,224);
        font-size: 12px;
    }
    a:hover{
        color: rgb(212, 212, 212);
    }
    span{
        color: rgb(88,195,224);
    }

    @media screen and (max-width:500px){
        .input-name input,.input-password input{
            width:100px;
        }
        .input-password{
            float: none;
        }
        a{
            font-size: 10px;
        }
        .login-button{
            left:0px;
            bottom:0px;
            height: 60px;
            width: 60px;
            margin-top:6px;
        }
        .login-button span{
            position: relative;
            top:16px;
        }
        .more a{
            display: block;
        }
        .more span{
            display: none;
        }
        .back{
            margin-right:2px;
        }
    }
</style>