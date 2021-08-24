<template>
    <div class="home">
        <!--移动端侧拉栏-->
        <div class="asideShow">
            <a href="javascript:;" @click="closeAside">
                <img src="~@/assets/icon/close.svg" alt="">
            </a>
            <aside-show/>
        </div>

        <!--移动端遮罩层-->
        <div class="shade" @click.stop="closeAside">
        </div>

        <!--主页面-->
        <div class="content">
            <el-container class="el-container">
            <el-header class="el-header">
                <header-show></header-show>
            </el-header>
            <el-container class="el-content">
                <!--移动端の更多功能小页面-->
                <menu-item class="mobileShow"/>

                <!--二维码展示-->
                <qr-money style="display:none" class="money"/>
                <qr-wechat class="wechat" style="display:none"/>

                <el-aside class="el-aside1" style="width:200px">
                    <aside-show class="asideShow2"/>
                </el-aside>
                <el-main class="el-main">
                    <router-view/>
                </el-main>
                <el-aside class="el-aside2">
                    <aside-user></aside-user>
                </el-aside>

                <!--移动端音乐播放器-->
                <div class="music-show">
                    <div class="music-button" @click="musicIsShow"></div>
                    <div class="music-content">
                        <music/>
                    </div>
                </div>
            </el-container>
            <el-footer class="el-footer"></el-footer>
        </el-container>
        </div>
    </div>
</template>

<script>
import headerShow from '@/view/Header/headerShow'
import asideShow from './Aside/asideShow'
import asideUser from './Aside/asideUser'

import menuItem from '../components/menu/menu-item'

import QrMoney from '@/view/QR/qr-money'
import QrWechat from '@/view/QR/qr-wechat'

import Music from '@/components/header/Music'


export default {
    name:'Home',
    components:{
        headerShow,
        asideShow,
        asideUser,
        menuItem,

        QrMoney,
        QrWechat,

        Music
    },
    data(){
        return {
            musicShow:true
        }
    },
    computed:{
        listenMore(){
            return this.$store.state.mobileMore
        },

        //返回二维码状态
        listenCode(){
            return this.$store.state.codeShow
        },
        listenMoney(){
            return this.$store.state.moneyShow
        },

        //侧拉栏
        listenAside(){
            return this.$store.state.mobileAside
        }
    },
    watch:{
        listenMore:function(after,before){
            var show = this.$el.querySelector('.mobileShow')
            if(after){
                show.style.display = 'block'
            }else{
                show.style.display = 'none'
            }
        },


        //根据二维码状态改变进行相应处理
        listenCode:function(after,before){
            if(after){
                var style = this.$el.querySelector('.wechat').style
                var wDisplay = this.$el.querySelector('.money').style.display
                if( wDisplay == "block"){
                    this.$store.commit('closeMoneyCode')
                }
                style.display = "block"
            }else if(!after){
                var style = this.$el.querySelector('.wechat').style
                style.display = "none"
            }
        },
        listenMoney:function(after,before){
            if(after){
                var style = this.$el.querySelector('.money').style
                var mDisplay = this.$el.querySelector('.wechat').style.display
                if( mDisplay == "block"){
                    this.$store.commit('closeWechatCode')
                }
                style.display = "block"
            }else if(!after){
                var style = this.$el.querySelector('.money').style
                style.display = "none"
            }
        },

        //侧拉栏
        listenAside:function(after,before){
            if(after){
                this.$el.querySelector('.asideShow').style.display = 'block'
                this.$el.querySelector('.shade').style.display = 'block'
            }else{
                this.$el.querySelector('.asideShow').style.display = 'none'
                this.$el.querySelector('.shade').style.display = 'none'
            }
        }
    },
    methods:{
        closeAside(){
            this.$store.commit('closeAside')
        },
        musicIsShow(){
            if(this.musicShow){
                this.$el.querySelector('.music-content').style.display = 'none'
                this.$el.querySelector('.music-show').style.right = '-263px'
                this.$el.querySelector('.music-button').style.height = '60px'
                this.musicShow = false
            }else{
                this.$el.querySelector('.music-content').style.display = 'block'
                this.$el.querySelector('.music-show').style.right = '0px'
                this.$el.querySelector('.music-button').style.height = ''
                this.musicShow = true
            }
        }
    }
}
</script>

<style scoped>
    .el-container{
        background-color: rgba(240, 248, 255, 0.2);
        box-shadow: 10px 2px 40px -1px rgb(32, 25, 25);
        height: 100%;
    }
    .el-header{
        position: fixed;
        top:0;
        left: 5%;
        right: 5%;
        padding: 0;
        width: 90%;
        z-index:10;
    }
    .el-content{
        padding-top:60px;
        padding-bottom: 60px;
        height: 100vh;
    }
    .el-main{
        padding-left:220px;
        height: 100%;

        /*隐藏滚动条*/
        overflow: hidden;
        
    }
    .el-aside1{
        position: fixed;
        top:60px;
        height: calc(100% - 119px);
        width: 100px;
        overflow-x: hidden;
    }
    .el-aside2{
        width: 100%;
        margin-top: 20px;
        margin-bottom:20px;
        overflow: hidden;
    }
    .el-footer{
        position: fixed;
        left: 5%;
        right: 5%;
        bottom: 0;
        width: 90%;
        background-color: darkcyan;
    }
    .home{
        width: 90%;
        height: 100%;
        margin:0 auto;
        opacity: 1;
    }

    .mobileShow{
        display: none;
    }
    .asideShow{
        display: none;
        background-color:rgb(0, 92, 92);
        position: absolute;
        left:0;
        overflow: hidden;
        width: 200px;
        height: 100vh;
        z-index:12;
    }
    .asideShow>a>img{
        position: absolute;
        left:2px;
        width: 22px;
        height: 22px;
        margin-top:4px;
        z-index:13;
    }

    .shade{
        display: none;
        position: absolute;
        right:0;
        height: 100vh;
        width: calc(100vw - 200px);
        background-color: rgba(40, 40, 40, 0.8);
        z-index:90;
    }

    .music-show{
        display: none;
        background-color: rgba(14, 142, 151, 0.603);
        position: fixed;
        right:0;
        width: 263px;
        z-index: 11;
    }
    .music{
        display: none;
    }
    .music-button{
        position: absolute;
        left:-16px;
        background-color: rgba(88, 194, 224, 0.9);
        height: 100%;
        width: 16px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    @media screen and (min-width:1600px){
        .home,.el-header,.el-footer{
            width: 80%;
        }
        .el-header,.el-footer{
            margin:0 auto;
        }
    }

    @media screen and (max-width:1150px){
        .el-aside2{
            display: none;
        }
    }

    @media screen and (max-width:991.5px){
        .home{
            width: 100%;
        }
        .el-aside{
            display: none;
        }
        .el-main{
            padding:10px;
        }
        .music{
            display: block;
        }
        .music-show{
            display: block;
        }
    }

    @media screen and (max-width:1380px){
        .home,.el-header,.el-footer{
            width: 100%;
        }
        .el-header,.el-footer{
            left: 0;
            right: 0;
        }
    }
</style>