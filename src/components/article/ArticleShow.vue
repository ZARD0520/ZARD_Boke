<template>
    <div id="articleShow">
        <div class="page-top">
            <el-page-header content="" @back="back" content="文章详情"></el-page-header>
        </div>
        <div class="page-title">
            <h2>{{listInfo.title}}</h2>
        </div>
        <div class="page-container">
            <div class="page-info">
                <ul>
                    <li>
                        <img src="~@/assets/icon/article-icon/date.svg" alt="">
                        {{this.getDate}}
                    </li>
                    <li>
                        <img src="~@/assets/icon/article-icon/me.svg" alt="">
                        {{listInfo.author}}
                    </li>
                    <li>
                        <img src="~@/assets/icon/article-icon/comment.svg" alt="">
                        {{listInfo.commentCounter}}
                    </li>
                    <li>
                        <img src="~@/assets/icon/article-icon/zan.svg" alt="">
                        {{this.getZan}}
                    </li>
                </ul>
            </div>
            <div class="page-content">
                <p v-for="item in this.getText">
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    {{item}}
                </p>
                <div class="page-content-button">
                    <el-button type="success" @click="moneyShow">打赏</el-button>
                    <el-button type="primary" @click="zan">点赞</el-button>
                </div>
            </div>
        </div>
        <!--评论区-->
        <div class="page-bottom">
            <div class="page-comment" v-for="(item,index) in this.getCommentList" :key="index">
                <a href="javascript:;">
                    <img v-lazy="item.avatar" alt=""/>
                </a>
                <div class="page-comment-info">
                    <p>{{item.nickname}}</p>
                    <span>{{item.date}}</span>
                </div>
                <div class="page-comment-content">
                    <p>{{item.comment}}</p>
                </div>
            </div>
            <div class="page-comment-input">
                <p>我也要说一句~</p>
                <el-input v-model="input" type="textarea" :rows="3" ref="input"></el-input>
                <el-button type="primary" class="page-comment-button" @click="comment">发表评论</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import MainContainer from '@/components/main/MainContainer'
import {getArticle,getArticleList,zan,comment} from '@/network/article'
import {getProfile} from '@/network/profile'

export default {
    name:"ArticleShow",
    data(){
        return {
            input:'',
            articleInfo:{},
            listInfo:{}
        }
    },
    created(){
        var id = this.$route.query.id
        var that = this
        var get = (async function(id){
            var res1 = await getArticle(id)
            var res2 = await getArticleList()
            that.articleInfo = res1.data.resData[0]
            that.listInfo = res2.data.data[id]
        })(id)
    },
    computed:{
        getDate(){
            var date = new Date(this.listInfo.date)
            return this.changeDate(date,false)
        },
        getText(){
            var str = this.articleInfo.content
            return str.split('/')
        },
        getZan(){
            var zan = this.listInfo.zanCounter
            return zan.length
        },
        getCommentList(){
            var list = this.articleInfo.commentList
            var that = this
            list = list.map((item)=>{
                var date = new Date(item.date)
                item.date = that.changeDate(date,true)
                return item
            })
            return list.reverse()
        }
    },
    components:{
        MainContainer
    },
    methods:{
        back(){
            this.$router.replace('/Home/articleList')
        },
        async zan(){
            //先判断登录状态，再传递用户名去更新赞数
            var token = sessionStorage.getItem('token')
            var user = sessionStorage.getItem('user')
            var id = this.articleInfo.id
            var that = this
            if(token&&user){
                //传递参数进行点赞请求
                var res = await zan(id,user)
                alert(res.data.message)
                if(res.data.message ==='点赞成功'){
                    that.refresh(id)
                }
            }else{
                alert('请先登录')
            }
        },
        comment(){
            var user = sessionStorage.getItem('user')
            var token = sessionStorage.getItem('token')
            var input = this.input
            var id = this.articleInfo.id
            var that = this
            if(token&&user&&input!=''){
                var commit = (async function(){
                    //先获取用户信息
                    var {data} = await getProfile(user)
                    if(data.err_code === 1 ){
                        return alert(data.message)
                    }else{
                        var {nickname,avatar}= data.data
                        var commitTime = new Date()
                        let obj = {
                            nickname,
                            avatar,
                            date:commitTime,
                            comment:input
                        }
                        var res = await comment(id,obj)
                        that.$refs.input.clear()
                        alert(res.data.message)
                        that.refresh(id)
                    }
                })()
            }else if(!token){
                alert('请先登录')
            }else if(input === ''){
                alert('请输入内容')
            }
        },
        moneyShow(){
            this.$store.commit('changeMoneyCode')
        },
        changeDate(time,status){
            var year = time.getFullYear()+'年'
            var month = time.getMonth()+1+'月'
            var date  = time.getDate()+'日'
            var hour = time.getHours()+'时'
            var minutes = time.getMinutes()+'分'
            var second = time.getSeconds()+'秒'
            if(status){
                return year+" "+month+date+" "+hour+minutes+second
            }
            return year+" "+month+date
        },
        refresh(id){
            var that = this
            var get = (async function(id){
                var res1 = await getArticle(id)
                var res2 = await getArticleList()
                that.articleInfo = res1.data.resData[0]
                that.listInfo = res2.data.data[id]
            })(id)
        }
    }
}
</script>

<style scoped>
    #articleShow{
        width: 98%;
        margin-left:10px;
        margin-top:10px;
        text-align: center;
    }
    .page-title{
        margin-top:10px;
    }
    .page-info{
        margin-top:6px;
        margin-bottom:16px;
        color:rgb(119, 119, 119);
    }
    .page-content{
        padding-bottom:10px;
        border-bottom:solid 1px darkgray;
    }
    .page-content p{
        color: rgb(43, 43, 43);
        text-align: left;
        margin-bottom:5px;
    }
    .page-content-button{
        margin-top:60px;
    }
    .page-comment-button{
        margin-top:10px;
    }
    .page-bottom{
        margin-top:20px;
        text-align: left;
    }
    .page-comment{
        margin-top:10px;
        padding-bottom: 20px;
        border-bottom:solid 1px rgb(202, 202, 202);
        
    }
    .page-comment img{
        width: 60px;
        height: 60px;
        margin-right:10px;
        margin-bottom:10px;
        border-radius: 50%;
        float:left;
    }
    .page-comment-info::after{
        display: block;
        clear: both;
        content: "";
    }
    .page-comment-info{
        font-size: 14px;
    }
    .page-comment-info span{
        font-size: 12px;
        color: rgb(119, 119, 119);
    }
    .page-comment-input{
        text-align: center;
        margin-top:20px;
        margin-bottom:20px;
    }
    .page-comment-input p{
        margin-bottom:6px;
    }
    li{
        font-size: 10px;
        display: inline-block;
        margin-right:14px;
    }
    li>img{
        position: relative;
        top:4px;
        width:18px;
    }

    @media screen and (max-width:420px){
        #articleShow{
            margin-left:0;
        }
    }
</style>