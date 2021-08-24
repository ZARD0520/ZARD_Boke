<template>
    <main-container id="main">
        <router-view :List="List" @sizeChange="sizeChange" @currentChange="currentChange"></router-view>
    </main-container>
</template>

<script>
import MainContainer from '@/components/main/MainContainer'
import ArticleContent from '@/components/article/ArticleContent'
import {getArticleList} from '@/network/article'

export default {
    name:'articleList',
    data(){
        return{
            List:{
                list:[],
                currentPage:1,
                pageSize:5
            }
        }
    },
    created(){
        getArticleList().then(res=>{
            this.List.list = res.data.data
        })
    },
    components:{
        MainContainer,
        ArticleContent
    },
    methods:{
        sizeChange(size){
            this.List.pageSize = size
        },
        currentChange(currentPage){
            this.List.currentPage = currentPage
        }
    }
}
</script>

<style scoped>
    
</style>



