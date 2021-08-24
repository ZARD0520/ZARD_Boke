<template>
    <div id="main-photo">
        <photo-card v-for="(item,index) in this.photoList" :photo-list="item" :key="index"/>
    </div>
</template>

<script>
import MainContainer from '@/components/main/MainContainer'
import PhotoCard from '@/components/photo/PhotoCard'

export default {
    name:'PhotoList',
    components:{
        MainContainer,
        PhotoCard
    },
    props:{
        photoList:{
            type:Array
        }
    }
}
</script>

<style scoped>
    #main-photo{
        width: 100%;
        text-align: center;
        margin-top:10px;
        margin-bottom:10px;
        /*display: flex;
        flex-direction: row;
        flex-wrap: wrap;*/
    }
</style>