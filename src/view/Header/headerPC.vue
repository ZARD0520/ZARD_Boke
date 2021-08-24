<template>
    <div class="pc">
        <div class="pc_content">
            <music/>
            <search/>
            <div class="login_status">
                <login/>
            </div>
        </div>
    </div>
</template>

<script>
import Search from '@/components/header/Search'
import Music from '@/components/header/Music'
import Login from '@/components/header/Login'

export default {
    name:'pc',
    components:{
        Search,
        Music,
        Login
    }
}
</script>

<style scoped>
    .pc{
        height: 100%;
        font-size: 24px;
    }
    .pc_content{
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        color:aliceblue;
    }
    .login_status{
        margin-left:100px;
    }

    @media screen and (max-width:1150px){
        .login_status{
            margin-left:60px;
        }
    }
</style>