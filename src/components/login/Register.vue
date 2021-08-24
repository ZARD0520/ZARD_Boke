<template>
    <div id="register">
        <div class="login">
            <a href="javascript:;" @click="login">返回登录</a>
        </div>
        <div class="form">
            <div class="input-name input">
                <p>你的名字</p>
                <input type="text" size="20" v-model="username"/>
            </div>
            <div class="input-password input">
                <p>密码</p>
                <input type="password" size="20" v-model="password"/>
            </div>
            <div class="input-email input">
                <p>邮箱</p>
                <input type="text" size="20" v-model="email"/>
            </div>
            <input type="submit" value="点击注册" class="input-submit" @click="register"/>
        </div>
    </div>
</template>

<script>
import {Register} from '@/network/login'

//注意:注册的邮箱验证功能暂不实现，后续再完善
export default {
    name:'Register',
    data(){
        return{
            username:'',
            password:'',
            email:''
        }
    },
    methods:{
        login(){
            this.$router.replace('Login')
        },
        register(){
            if(this.username === ''){
                alert('请输入你的名字')
            }else if(this.password === ''){
                alert('请输入密码')
            }else if(this.email === ''){
                alert('请输入你的邮箱')
            }else{
                //注册相关处理
                Register(this.username,this.password,this.email).then(res=>{
                    var data = res.data
                    if(data.err_code === 0 ){
                        alert(data.message)
                        this.$router.replace('Login')
                    }else if(data.err_code === 1){
                        alert(data.message)
                    }
                })
            }
        }
    }
}
</script>

<style scoped>
    #register{
        position: absolute;
        top:24%;
        left:20%;
        right:20%;
        margin:0 auto;
        text-align: center;
        width: 300px;
        height: 260px;
        background-color: rgba(122, 122, 122, 0.6);
        border-radius: 10px;
        font-size: 16px;
    }
    .input>input{
        border:2px solid rgb(160, 160, 160);
        border-radius: 4px;
        line-height: 24px;
        width: 160px;
    }
    .input{
        margin-bottom:6px;
    }
    .input-submit{
        position: absolute;
        bottom:0;
        right:0;
        margin:0 6px 5px 0; 
        width: 80px;
        height: 24px;
        border-radius: 4px;
        color: rgb(88,195,224);
        border:1px solid rgb(88,195,224);
        font-size: 14px;
    }
    .input-submit:hover{
        color:aliceblue;
        background-color: rgb(88,195,224);
    }
    .login{
        position: absolute;
        bottom:0;
        margin-left:6px;
        margin-bottom:6px;
    }
    .form{
        margin-top:40px;
    }
    .login>a:hover{
        color:aliceblue;
    }
    p{
        color: aliceblue;
    }
    a{
        color:rgb(88,195,224);
    }

    @media screen and (max-width:500px){
        #register{
            width:200px;
            height: 200px;
            font-size: 12px;
        }
        .input > input{
            width:120px;
        }
        .form{
            margin-top:10px;
        }
        .input-submit{
            font-size: 12px;
        }
    }
</style>