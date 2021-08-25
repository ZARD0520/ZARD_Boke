<template>
    <div id="ArticleList">
        <div class="articleList">
            <div class="title">
                <img src="@/assets/icon/book.svg" alt="" class="title_icon">
                <p>文章</p>
            </div>
        <article-content v-for="(item,index) in getList"
                            :list="item" :key="index"/>
        </div>
        <el-pagination
            class="pagination"
            background
            layout="prev, pager, next"
            :total="List.list.length"
            :page-size="List.pageSize"
            :current-page="List.currentPage"
            @size-change="sizeChange"
            @current-change="currentChange"
            ref="control"/>
    </div>
</template>

<script>
import MainContainer from '@/components/main/MainContainer'
import ArticleContent from '@/components/article/ArticleContent'


export default {
    name:'articleList',
    props:{
        List:{
            type:Object
        }
    },
    components:{
        MainContainer,
        ArticleContent
    },
    computed:{
        getList(){
            return this.List.list.slice((this.List.currentPage-1)*this.List.pageSize,this.List.currentPage*this.List.pageSize)
        }
    },
    updated(){
        this.$store.commit('scrollTop')
        this.isBottom()
    },
    methods:{
        sizeChange(size){
            this.$emit('sizeChange',size)
        },
        currentChange(currentPage){
            this.$emit('currentChange',currentPage)
        },
        isBottom(){
            var listLength= this.List.list.slice((this.List.currentPage-1)*this.List.pageSize,this.List.currentPage*this.List.pageSize).length
            var style = this.$el.querySelector('.pagination').style
            var style2 = this.$el.querySelector('.articleList').style
            if(listLength===1){
                style2.height = "94%"
            }else{
                style2.height = ""
            }
        }
    }
}
</script>

<style scoped>
    .articleList{
        position: relative;
        display: flex;
        flex-direction: column;
        font-size: 12px;
    }
    .title{
        text-align: center;
    }
    .title p{
        display: inline-block;
        font-weight: bold;
        font-size: 1.6rem;
        color: rgb(101, 101, 102);
    }
    .title_icon{
        height: 40px;
        width:40px;
        padding-top: 18px;
        margin-right:4px;
    }
    .pagination{
        position: relative;
        bottom:5px;
        text-align: center;
    }

    @media  screen and (max-width:760px) {
        .title p{
            font-size: 1rem;
        }
        .title_icon{
            height: 30px;
            width: 30px;
        }
    }
</style>