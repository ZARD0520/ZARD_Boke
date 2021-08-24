<template>
    <div id="profile">
        <div class="title">
            <h2>WEZARDの个人信息</h2>
        </div>
        <div class="content">
            <div class="profile-img">
                <img v-lazy="user.avatar" alt="" v-if="!isInput">
                <a href="javascript:;" v-else @click="editImg">
                    <img v-lazy="user.avatar" alt="">
                </a>
            </div>
            <div class="profile-text">
                <div class="profile-name">
                    你的名字:<h3 v-if="!isInput">{{user.nickname}}</h3>
                    <div class="input" v-else>
                        <el-input v-model="user.nickname"/>
                    </div>
                </div>
                <div class="profile-introduce">
                    <span>个性签名:</span>
                    <p v-if="!isInput">{{user.personal}}</p>
                    <div class="input2" v-else>
                        <el-input type="textarea" 
                            v-model="user.personal" :rows="4"/>
                    </div>
                </div>
            </div>
            <div class="profile-button">
                <el-button @click="edit" ref="edit">{{editName}}</el-button>
                <el-button type="primary" @click="exit">退出登录</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import {updateProfile} from '@/network/profile'

export default {
    name:'profileShow',
    data(){
        return {
            isInput:false,
            editName:'编辑'
        }
    },
    props:{
        user:{
            type:Object,
            default:{}
        }
    },
    watched(){
        var status = this.$store.getters.getUser
        console.log(status);
    },
    methods:{
        /*后续要在此处添加数据更新到服务器*/ 
        edit(){
            if(this.isInput){
                this.isInput = false
                this.editName = '编辑'
                //更新信息到服务器
                var user = sessionStorage.getItem('user')
                var newNickname = this.user.nickname
                var personal = this.user.personal
                updateProfile(user,newNickname,personal).then(res=>{
                    alert('更新成功')
                })
            }else{
                this.isInput = true
                this.editName = '完成'
            }
        },
        exit(){
            //提交事件到Vuex，进行session的清空
            this.$store.commit('changeLogin',false)
            sessionStorage.clear()
            this.$router.replace('ProfileWait')
        },
        editImg(){
            alert('头像不可更改，功能暂未开放')
        }
    }
}
</script>

<style scoped>
    .profile-img{
        margin-top:20px;
        margin-bottom:20px;
    }
    .profile-text{
        text-align: center;
        margin-bottom:6px;
    }
    .profile-introduce{
        margin-left: 10%;
        width: 80%;
    }
    .profile-name{
        
    }
    .input{
        margin:0 auto;
        margin-top:10px;
        margin-bottom:10px;
        width: 100px;
    }
    .input2{
        margin:0 auto;
        margin-top:10px;
        margin-bottom:16px;
        width: 300px;
    }
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border:2px solid darkgray;
    }
    p{
        margin-top:6px;
        color: rgb(120, 122, 122);
    }
    h3,p{
        margin-bottom:14px;
    }
    h2{
        color:rgb(110,110,110);
    }
    h3{
        color: rgb(160, 100, 160);
    }
    h2:hover{
        color:rgb(0, 160, 160);
    }
</style>