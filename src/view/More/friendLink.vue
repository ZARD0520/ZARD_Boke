<template>
    <main-container>
        <div class="title">
            <h3>友情链接</h3>
        </div>
        <div class="friendList">
            <friend-item v-for="item in friend" :friend="item"/>
        </div>
    </main-container>
</template>

<script>
import MainContainer from '@/components/main/MainContainer'
import friendItem from '@/components/friend/friendItem'

export default {
    name:'friendLink',
    data(){
        return {
            friend:[
                {
                    name:'张咚咚171-kmakise',
                    url:'https://kmakise.cn/',
                    introduce:"一个技术宅 电子 嵌入式",
                    img:"https://kmakise.cn/wp-content/uploads/2021/03/kmakise_avatar_2-96x96.jpg"
                },{
                    name:'PiaJi',
                    url:'http://piaji.xyz/',
                    introduce:"狗洞科技",
                    img:"http://piaji.xyz/Avatar.jpg"
                }
            ]
        }
    },
    components:{
        MainContainer,
        friendItem
    }
}
</script>

<style scoped>
    .title{
        text-align: center;
        margin-top:8px;
        color: rgb(101, 101, 102);
    }
    .friendList{/*
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;*/

        width: 100%;
        margin-top:14px;
        margin-left:20px;
    }

    @media screen and (max-width:330px){
        .friendList{
            margin-left:10px;
        }
    }
    @media screen and (max-width:300px){
        .friendList{
            margin-left:2px;
        }
    }
</style>