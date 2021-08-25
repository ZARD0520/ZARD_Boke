<template>
    <div id="write-article">
        <el-page-header @back="back" content="写文章" class="page-header">
        </el-page-header>
        <div class="title">
            <span>标题：</span>
            <el-input class="input" placeholder="请输入标题" v-model="title"></el-input>
        </div>
        <el-input class="input" placeholder="请输入简介" v-model="introduce"></el-input>
        <el-input type="textarea" :rows="8" v-model="text" class="input" placeholder="请输入内容">
        </el-input>
        <el-button type="primary" plain @click="writeArticle" class="button">点击发布</el-button>
    </div>
</template>

<script>
import {write} from '@/network/article'

export default {
    name:'writeArticle',
    data(){
        return{
            title:'',
            introduce:'',
            text:''
        }
    },
    methods:{
        back(){
            this.$router.replace('/Home')
        },
        writeArticle(){
            var that = this
            var title = this.title
            var introduce = this.introduce
            var text = this.text
            write(title,introduce,text).then(res=>{
                that.title = ''
                that.introduce = ''
                that.text = ''
                alert(res.data.message)
            })
        }
    }
}
</script>

<style scoped>
    #write-article{
        position: absolute;
        left:50%;
        top:50%;
        transform:translate(-50%,-60%);

        width: 320px;
        height: 380px;
        background-color: rgb(88,195,224);
        border-radius: 10px;

        text-align: center;
    }
    .page-header{
        margin-top:5px;
        margin-left:5px;
    }
    .title{
        width: 90%;
        color: rgb(253, 253, 253);
        margin:0 auto;
    }
    .title>.input{
        width: 70%;
    }
    .input{
        width: 90%;
        margin-top:10px;
    }
    .button{
        margin-top:6px;
    }
</style>