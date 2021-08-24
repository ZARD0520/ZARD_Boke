<template>
    <div class="mobile">
        <div class="mobile_content">
            <i class="menu iconfont icon-caidan" @click="menuShow"></i>
            <p>WEZARD</p>
            <i class="search iconfont icon-sousuo" @click="search"></i>
        </div>
    </div>
</template>

<script>

export default {
    name:'mobile',
    components:{
    },
    data(){
        return {
            isShow:false
        }
    },
    methods:{
        menuShow(){
            this.$store.commit('showAside')
        },
        search(){
            alert('哈哈哈，此功能未开放')
        }
    }
}
</script>

<style scoped>
    .mobile{
        height: 100%;
        width: 100%;
        font-size: 24px;
    }
    .mobile_content{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .menu,.search{
        display: none;
        font-size: 1.6rem;
    }
    .menu{
        margin-left:20px;
    }
    .search{
        margin-right:20px;
    }

    p{
        font-size: 1.6rem;
        color: aliceblue;
        margin-right: 160px;
    }
    p:hover{
        animation: light 3s linear;
        animation-fill-mode: forwards;
    }
    i:hover{
        color: rgb(172, 170, 170);
    }

    @media screen and (max-width: 991.5px){
        .menu,.search{
            display: block;
            color: aliceblue;
        }
        .mobile_content{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-content: center;
        }
        p{
            margin-right: 0px;
        }
    }

    @media screen and (min-width:992px){
        p{
            margin-right: 60px;
        }
    }

    @media  screen and (max-width:760px){
        p,i{
            font-size: 1.1rem;
        }
    }

    @keyframes light {
        0% {
            color: white;
            text-shadow: 0 0 6px white;
        }
        100% {
            text-shadow: 0 0 16px 1px white;
        }
    }

</style>