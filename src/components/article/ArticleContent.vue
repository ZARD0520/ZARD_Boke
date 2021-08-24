<template>
    <div class="article_content">
        <article-container :list="list"/>
        <article-bottom :list="list"/>
    </div>
</template>

<script>
import ArticleContainer from './ArticleContainer'
import ArticleBottom from './ArticleBottom'

export default {
    name:"ArticleContent",
    data(){
        return{
            info:{}
        }
    },
    props:{
        list:{
            type:Object,
            default:{}
        }
    },
    components:{
        ArticleContainer,
        ArticleBottom
    }
}
</script>

<style scoped>
    .article_content{
        height: 320px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top:10px;
        margin-bottom:10px;
    }
    @media screen and (max-width:420px){
        .article_content{
            height: 200px;
        }
    }
</style>