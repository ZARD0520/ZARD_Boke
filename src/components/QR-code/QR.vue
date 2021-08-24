<template>
    <div class="box-card" id="card">
        <div class="top">
            <div class="title">
                <slot name="title"></slot>
            </div>
            <a href="javascript:;">
                <img src="~@/assets/icon/close.svg" alt="" @click="close()">
            </a>
        </div>
        <div class="bottom">
            <slot name="code"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"QR",
    methods:{
        close(){
            this.$store.commit('closeCode')
            //var card = this.$el.querySelector('#card')
            //this.$el.remove(card)
        }
    }
}
</script>

<style scoped>
    .box-card{
        position: fixed;
        top:30%;
        left: 35%;
        margin: 0 auto;
        width: 250px;
        background-color: darkcyan;
        z-index:92;
    }
    .click-card{
        display: none;
    }
    .top{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content:space-around
    }
    .top img{
        width: 30px;
        height: 30px;
    }
    .top a:hover{
        color:aliceblue;
    }
    .title{
        display: flex;
        align-items: center;
        justify-items: end;
        height: 30px;
        padding-right:110px;
        margin-left:30px;
        color: aliceblue;
    }
    .bottom{
        background-color: rgb(255, 255, 255);
    }

    @media screen and (max-width:600px){
        .box-card{
            left:22%;
        }
    }

    @media screen and (max-width:450px){
        .box-card{
            left:18%;
        }
    }

    @media screen and (max-width:350px){
        .box-card{
            left:10%;
        }
    }

</style>