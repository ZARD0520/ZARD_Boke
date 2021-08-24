<template>
    <div id="more">
        <h3>更多功能</h3>
        <div class="more-list">
            <a href="https://baike.baidu.com/item/%E5%9D%82%E4%BA%95%E6%B3%89%E6%B0%B4/3482174?fr=aladdin" target="_blank">
                <span>ZARD简介</span>
            </a>
            <a href="javascript:;" target="_self" @click="showFriend">
                <span>友情链接</span>
                </a>
            <a href="javascript:;" target="_self" @click="showMoney">
                <span>赞赏博主</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'menu-more',
    methods:{
        showFriend(){
            this.$router.replace('/Home/friend')
        },
        showMoney(){
            this.$store.commit('changeMoneyCode')
        }
    }
}
</script>

<style scoped>
    #more{
        margin-top:14px;
    }
    .more-list{
        margin-top:14px;
    }
    h3{
        width: 80%;
        margin:0 auto;
        margin-bottom:2px;
        padding-bottom:4px;
        border-bottom:1px solid rgb(216, 216, 216);
    }
    a{
        color: rgb(100, 100, 100);
        background-color: #fff;
        margin:0 4px 0 4px;
        padding:2px 4px 2px 4px;
        border:solid 1px rgb(100, 100, 100);
        border-radius: 2px;
    }
    a:hover{
        background-color: rgba(180, 180, 180, 0.6);
    }
</style>