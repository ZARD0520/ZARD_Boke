<template>
    <div id="main">
        <div class="item-info">
            <a href="javascript:;">
                <img v-lazy="item.avatar" alt="" title="偷看我干嘛(ノω<。)ノ))☆.。"/>
            </a>
            <h3>{{item.nickname}}</h3>
            <p>{{this.getDate}}</p>
        </div>
        <div class="item-text">
            <p>{{item.content}}</p>
            <a href="javascript:;" @click="showDialog">回复</a>
        </div>
        <!--留言回复区-->
        <div class="item-res" v-for="(itemer,index) in item.commentList" :key="index">
            <div class="res-info">
                <a href="javascript:;" class="res-avatar">
                    <img v-lazy="itemer.resAvatar" alt="">
                </a>
                <h5>{{itemer.resName}}</h5>
                <p>{{getResDate(itemer.resDate)}}</p>
            </div>
            <div class="res-text">
                <p>{{itemer.resContent}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'BoardItem',
    props:{
        item:{
            type:Object,
            default:{}
        }
    },
    computed:{
        getDate(){
            var date = new Date(this.item.date)
            return this.changeDate(date)
        }
    },
    methods:{
        showDialog(){
            var token = sessionStorage.getItem('token')
            var user = sessionStorage.getItem('user')
            if(token&&user){
                this.$emit('showDialog',this.item.id)
            }else{
                alert('请登录后再留言')
            }
        },
        changeDate(time){
            var year = time.getFullYear()+'年'
            var month = time.getMonth()+1+'月'
            var date  = time.getDate()+'日'
            var hour = time.getHours()+'时'
            var minutes = time.getMinutes()+'分'
            var second = time.getSeconds()+'秒'
            return year+" "+month+date+" "+hour+minutes+second
        },
        getResDate(info){
            var date = new Date(info)
            var dateInfo = this.changeDate(date)
            return dateInfo
        }
    }
}
</script>

<style scoped>
    #main{
        border-top: rgba(185, 185, 185, 0.6) solid 1px;
    }
    .item-info{
        margin-top:10px;
        margin-bottom:6px;
        color:rgb(22, 121, 160);
    }
    .item-info a{
        float: left;
        margin-right:12px;
    }
    .item-info p{
        color: rgb(116, 116, 116);
        font-size: 13px;
        margin-top:8px;
    }
    .item-info::after{
        content: "";
        display: block;
        clear: both;
    }
    .item-text p{
        color: rgb(59, 59, 59);
        margin-bottom:4px;
    }
    a{
        color: darkcyan;
    }
    img{
        width: 60px;
        height: 60px;
    }

    /* 此处是留言回复的样式 */
    .item-res{
        margin-top:10px;
        margin-left:20px;
    }
    .res-info{
        border-top:solid 1px rgba(185, 185, 185, 0.4);
        padding-top:8px;
        color: rgba(22, 121, 160, 0.8);
    }
    .res-info a{
        float: left;
        margin-right:12px;
    }
    .res-info p{
        font-size: 10px;
        color: rgb(116, 116, 116);
        margin-top:4px;
    }
    .res-info::after{
        content: "";
        display: block;
        clear: both;
    }
    .res-text{
        margin-top:4px;
        color: rgb(59, 59, 59);
        font-size: 14px;
    }
    .res-avatar img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
</style>