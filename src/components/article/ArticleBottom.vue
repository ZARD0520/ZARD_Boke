<template>
    <div class="Article_bottom">
          <span class="bottom_items left">
            <span><img src="~@/assets/icon/article-icon/date.svg"/>{{this.getDate}}</span>
            <span><img src="~@/assets/icon/article-icon/comment.svg"/>{{list.commentCounter}}</span>
            <span class="response"><img src="~@/assets/icon/article-icon/read.svg"/>{{list.viewCounter}}</span>
            <span class="response"><img src="~@/assets/icon/article-icon/zan.svg"/>{{list.zanCounter.length}}</span>
            <span class="response"><img src="~@/assets/icon/article-icon/me.svg"/>{{list.author}}</span>
          </span>
          <span class="bottom_items right">
              <a href="javascript:;" @click="showItem">阅读全文</a>
          </span>
    </div>
</template>

<script>
export default {
    name:'ArticleBottom',
    props:{
        list:Object
    },
    computed:{
        getDate(){
            var date = new Date(this.list.date)
            return this.changeDate(date)
        }
    },
    methods:{
        showItem(){
            //this.$store.commit('articleId',this.list.id)
            this.$router.replace({
                path:'ArticleShow',
                query:{
                    id:this.list.id
                }
            })
        },
        changeDate(time){
            var year = time.getFullYear()+'年'
            var month = time.getMonth()+1+'月'
            var date  = time.getDate()+'日'
            return year+" "+month+date
        }
    }
}
</script>

<style scoped>
    .Article_bottom{
        position: relative;
        top:-5px;
        width: 90%;
        height: 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        border-bottom-left-radius: 22px;
        border-bottom-right-radius: 22px;
    }
    .bottom_items{
        position: relative;
    }
    .left{
        position: relative;
        left:20px;
    }
    .left span{
        margin-right: 10px;
    }
    .right{
        position: relative;
        right:20px;
    }

    a{
        text-decoration: none;
        color: #000;
    }

    img{
        width: 16px;
        height: 16px;
        position: relative;
        top:3px;
        margin-right: 4px;
    }

    a:hover{
        color: darkcyan;
    }

    @media screen and (max-width:650px){
        .response{
            display: none;
        }
    }

    @media screen and (max-width:420px){
        .bottom_items{
        }
    }
</style>