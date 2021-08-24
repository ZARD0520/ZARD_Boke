<template>
    <div class="main-container">
        <div class="main-content" ref="list">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'MainContainer',
    watch:{
        listenScroll:function(){
            if(this.listenScroll){
                this.$refs.list.scrollTop = 0
                this.$store.commit('scrollStop')
            }
        }
    },
    computed:{
        listenScroll(){
            return this.$store.state.scroll
        }
    },
    methods:{/*
        scroll(){
            this.$refs.list.scrollTop = 0
            console.log(this.$refs.list.scrollTop);
        }*/
    }
}
</script>

<style scoped>
    .main-container{
        position: relative;
        height: 100%;
        width:100%;
        border-radius: 6px;
        background-color: rgba(240, 240, 240, 0.8);
    }
    .main-content{
        position: relative;
        height: 100%;
        width:106%;
        overflow-y: scroll;
        padding-left:12px;
        padding-right:6%;
    }

    @media screen and (max-width:650px){
        .main-content{
            width:110%;
            padding-right:10%;
            padding-left:6px;
        }
    }
    @media screen and (max-width:420px){
        .main-content{
            width:110%;
            padding-right:10%;
        }
    }
</style>