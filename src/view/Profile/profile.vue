<template>
    <main-container>
        <div id="profile">
            <router-view :user="userInfo"/>
        </div>
    </main-container>
</template>

<script>
import MainContainer from '@/components/main/MainContainer'
import {getProfile} from '@/network/profile'

export default {
    name:'profile',
    data(){
        return {
            isShow:true,
            userInfo:{}
        }
    },
    created(){
        var user = sessionStorage.getItem('user')
        var token = sessionStorage.getItem('token')
        if(user&&token){
            getProfile(user).then(res=>{
                if(res.data.err_code === 1 ){
                    return alert(res.data.message)
                }
                this.userInfo = res.data.data
                this.$router.replace('ProfileShow')
            })
        }
    },
    components:{
        MainContainer
    }
}
</script>

<style scoped>
    #profile{
        margin-top:20px;
        margin-bottom:20px;
        text-align: center;
    }
</style>