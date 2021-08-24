<template>
    <el-card :body-style="{ padding: '0px' }" class="el-card" shadow="never">
      <div class="card_content">
        <div class="card_title">
          <a href="javascript:;" @click="showItem">
              <h2>{{list.title}}</h2>
          </a>
        </div>
        <div class="card_text">
            <p>{{list.introduce}}</p>
        </div>
      </div>
    </el-card>
</template>

<script>
export default {
    name:"ArticleContainer",
    props:{
        list:Object
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
        }
    }
}
</script>

<style scoped lang="scss">
    .el-card{
        width: 90%;
        height: 90%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border-top-left-radius: 22px;
        border-top-right-radius: 22px;
        text-align: center;

        background-image: url("~@/assets/img/zard001.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .card_content{
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .card_content:hover{
        background-color: rgba(2, 2, 2, 0.3);
        transition: background-color 0.6s ease;
        .card_title{
            padding-bottom:30px;
            transition: padding-bottom 0.2s;
        }
        .card_text{
            visibility: initial;
        }
        h2{
            color: aliceblue;
        }
    }
    .card_title{
        position: relative;
        top:25px;
        width: 100%;
        font-size: 1.2rem;
        color: rgb(178, 179, 180);
    }
    .card_text{
        color: rgba(243, 243, 253, 0.9);
        font-size: 1rem;
        visibility: hidden;
    }
    img{
        width: 100%;
        display: block;
    }
    a{
        text-decoration: none;
        color: rgb(178, 179, 180);
    }

    @media screen and (max-width:420px){
        .card_text{
            font-size: 0.8rem;
        }
        .card_title{
            font-size: 0.8rem;
        }
    }
</style>