<template>
    <el-menu class="menu">
        <div class="user">
            <a href="javascript:;" @click="manager">
                <img :src="userImg" alt="图片飞走啦~" title="点击进入后台管理系统~">
            </a>
            <p>WEZARD</p>
        </div>
        <el-menu-item v-for="(item,index) in paths" class="menu-items">
            <menu-item :path="item.path">
                <i slot="icon"></i>
                <span slot="name">{{item.name}}</span>
            </menu-item>
        </el-menu-item>
        <div class="more">
            <a href="javascript:;" @click="showMore">更多功能</a>
        </div>
        <div class="more-write">
            <a href="javascript:;" @click="writeArticle" v-show="isUp">写文章</a>
        </div>
    </el-menu>
</template>

<script>
import menuItem from './menuItem'

export default {
    name:'menuList',
    components:{
        menuItem
    },
    data(){
        return {
            paths:[
                {path:"/Home/articleList",name:"文章阅读"},
                {path:"/Home/photo",name:"回忆相册"},
                {path:"/Home/videoShow",name:"影像回忆"},
                {path:"/Home/board",name:"留言信箱"},
                {path:"/Home/profile",name:"个人中心"}
            ],
            path:"",
            src1:require("@/assets/icon/menu-icon/right.svg"),
            src2:require("@/assets/icon/menu-icon/down.svg"),
            userImg:'http://47.112.128.68/server/public/staticImg/Moon2.jpg',
            isUp:false
        }
    },
    created(){
        this.checkIsUp()
    },
    methods:{
        showMore(){
            this.$store.commit('showMore')
        },
        manager(){
            alert('达咩~ 此功能未开放')
        },
        checkIsUp(){
            var user = sessionStorage.getItem('user')
            var token = sessionStorage.getItem('token')
            if(user==='wezard'&&token){
                this.isUp = true
            }else{
                this.isUp = false
            }
        },
        writeArticle(){
            this.$store.commit('closeAside')
            this.$router.replace('/admin')
        }
    }
}
</script>

<style scoped>
    .menu{
        background-color:rgba(170, 172, 172, 0.85);
        height: 100%;
        width: calc(100% + 20px);
        padding-right:20px;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .menu-items:hover{
        color: rgb(0, 100, 95);
    }
    .menu-items{
        color: rgba(226, 226, 230, 0.9);
    }

    .user{
        display: none;
        height: 150px;
        text-align: center;
        font-size: 16px;
        border-bottom:1px solid aliceblue;
    }
    .user>p{
        color: rgb(68, 68, 68);
    }
    .user img{
        width: 80px;
        height: 80px;
        margin-top:20px;
        margin-bottom:4px;
        border-radius: 50%;
    }
    .user img:hover{
        animation: rotate 0.6s ease;
    }

    .more{
        display: none;
        border-top:1px solid rgb(192, 192, 192);
        width: 80%;
        margin-bottom:20px;
        font-size: 16px;
    }
    .more>a{
        display: block;
        margin-top:10px;
        margin-bottom:20px;
        margin-left:20px;
    }
    .more-write{
        border-top:1px solid rgb(192, 192, 192);
        width: 80%;
    }
    .more-write>a{
        display: block;
        margin-top:10px;
        margin-left:20px;
    }

    a{
        color:rgb(68, 68, 68);
    }

    @keyframes rotate {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }

    @media screen and (max-width:1150px){
        .user{
            display: block;
        }
        .more{
            display: block;
        }
        .more-write{
            border:0px;
        }
    }

    @media screen and (max-width:992px){
        .menu{
           background-color: rgb(0, 92, 92);
        }
        .user>p{
            color: aliceblue;
        }
        .user img{
            box-shadow: 0 0px 3px 3px rgb(134, 134, 134);
        }
    }

</style>