<template>
    <div id="main">
        <div class="title">
            <h2>留言板</h2>
            <p>有什么想要说的么~</p>
        </div>
        <div class="input">
            <el-input type="textarea" 
                :rows="3" class="input2" v-model="input" ref="input"/>
            <el-button class="input-button" type="primary" @click="comment">发表留言</el-button>
        </div>
        <!--具体留言-->
        <div class="item" v-for="(item,index) in this.items.slice((this.currentPage-1)*this.pageSize,this.currentPage*this.pageSize)" :key="index">
            <board-item :item="item" @showDialog="isShowDialog"/>
        </div>
        <el-dialog title="留言回复" 
                    :visible.sync="isDialogShow" width="300px" class="dialog">
            <div class="dialog-text">
                <el-input v-model="inputRes" type="textarea" :rows="4" ref="inputRes"></el-input>
            </div>
            <span>
                <el-button type="primary" @click="commentRes">留言</el-button>
            </span>
        </el-dialog>
        <el-pagination 
            :total="items.length"
            :page-size="pageSize"
            :current-page="currentPage"
            @size-change="sizeChange"
            @current-change="currentChange"
            ref="control"/>
    </div>
</template>

<script>
import BoardItem from "./BoardItem"
import {commitBoard,resBoard,boardId} from '@/network/board'
import {getProfile} from '@/network/profile'

export default {
    name:'',
    data(){
        return {
            input:'',
            inputRes:'',
            pageSize:10,
            currentPage:1,
            isDialogShow:false,
            currentId:0
        }
    },
    props:{
        items:{
            type:Array,
            default:[]
        }
    },
    components:{
        BoardItem
    },
    methods:{
        sizeChange(size){
            this.pageSize = size
        },
        currentChange(currentPage){
            this.currentPage = currentPage
        },
        isShowDialog(id){
            this.isDialogShow = true
            this.currentId = id
        },
        cancelShow(){
            this.isDialogShow = false
        },
        comment(){
            var user = sessionStorage.getItem('user')
            var token = sessionStorage.getItem('token')
            var input = this.input
            var that = this
            if(user&&token&&input!=''){
                var commitInfo = (async function(){
                    //根据当前用户来查询留言的用户信息(此处尝试一下async/await处理回调)
                    var {data} = await getProfile(user)
                    if(data.err_code === 1 ){
                        return alert(data.message)
                    }else{
                        var {nickname,avatar} = data.data
                        var commitTime = new Date()
                        var counterRes = await boardId()
                        var res = await commitBoard(nickname,avatar,input,commitTime,counterRes.data.data)
                        alert(res.data.message);
                        that.$refs.input.clear()
                        setTimeout(()=>{
                            that.$emit('refresh')
                        },100)
                    }
                })()
            }else if(!token){
                alert('请先登录再留言')
            }else if(input === ''){
                alert('请输入内容')
            }
        },
        commentRes(){
            //留言回复
            //根据id插入到对应的留言下方
            var user = sessionStorage.getItem('user')
            var token = sessionStorage.getItem('token')
            var inputRes = this.inputRes
            var id = this.currentId
            var that = this
            if(user&&token&&inputRes!=''){
                //先查询回复者的信息，再把返回的信息插入到回复的评论区
                var objInfo = (async function(){
                    var {data} = await getProfile(user)
                    if(data.err_code === 1 ){
                        return alert(data.message)
                    }else{
                        //打包三个属性到一个对象中，传给resBoard进行插入请求
                        var {nickname,avatar} = data.data
                        var commitTime = new Date()
                        var resObj = {
                            resName:nickname,
                            resAvatar:avatar,
                            resDate:commitTime,
                            resContent:inputRes
                        }
                        var res = await resBoard(id,resObj)
                        alert(res.data.message);
                        that.$refs.inputRes.clear()
                        setTimeout(()=>{
                            that.$emit('refresh')
                        },100)
                    }
                })()
            }else if(!token){
                alert('请先登录再留言')
            }else if(inputRes === ''){
                alert('请输入内容')
            }
        }
    },
    computed:{
        listenWidth(){
            return this.$el.clientWidth
        }
    },
    mounted(){
        if(this.listenWidth<350){
            this.$refs.control.layout = "prev, pager, next"
        }
    },
    updated(){
        this.$store.commit('scrollTop')
    }
}
</script>

<style scoped>
    #main{
        margin-bottom:6px;
    }
    .title{
        height: 300px;
        width: 98%;
        margin-bottom:10px;
        background-image: url('~@/assets/img/zard003.jpg');
        background-size: cover;
        border-radius: 6px;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .title h2{
        color: aliceblue;
        margin-bottom:40px;
    }
    .title p{
        color: darkgray;
    }
    .input{
        margin-bottom: 10px;
    }
    .input2{
        width:82%;
        float: left;
    }
    .input::after{
        content: "";
        display: block;
        clear: both;
    }
    .input-button{
        margin-top:32px;
    }
    .item{
        width: 98%;
        margin-top:20px;
        text-align: left;
    }
    .dialog-text{
        margin-bottom: 20px;
    }

    @media screen and (max-width:680px){
        .input2{
            width: 98%;
        }
        .input-button{
            margin-top:14px;
        }
    }
    @media screen and (max-width:400px){
        .title{
            height: 200px;
        }
        .dialog{
            text-align: center;
        }
    }
</style>