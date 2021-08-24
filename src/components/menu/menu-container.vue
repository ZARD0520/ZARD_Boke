<template>
    <div id="menu-container">
        <div class="header">
            <span>
                <slot name="title"></slot>
            </span>
            <a href="javascript:;">
                <img src="~@/assets/icon/close.svg" alt="" @click="close()">
            </a>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'menu-container',
    methods:{
        close(){
            this.$store.commit('closeMore')
        }
    }
}
</script>

<style scoped>
    #menu-container{
        position: absolute;
        top:20%;
        left:30%;
        right:25%;

        height: 300px;
        width: 300px;

        border-radius: 6px;
        background-color: rgb(88,195,224);
        z-index:91;
    }
    .content{
        text-align: center;
        color: aliceblue;
    }
    a>img{
        position: absolute;
        right:0;
        height: 24px;
        width: 24px;
    }
    
    @media screen and (max-width:600px){
        #menu-container{
            left:20%;
            right:20%；
        }
    }

    @media screen and (max-width:450px){
        #menu-container{
            left:15%;
            right:15%;
        }
    }

    @media screen and (max-width:400px){
        #menu-container{
            left:10%;
            right:10%;
        }
    }

    @media screen and (max-width:350px){
        #menu-container{
            left:5%;
        }
    }

    @media screen and (max-width:330px){
        #menu-container{
            left:3%;
        }
    }

</style>