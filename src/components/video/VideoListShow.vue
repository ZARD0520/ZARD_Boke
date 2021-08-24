<template>
    <div id="main">
        <video-list v-for="(item,index) in videoList" :video-list="item"/>
    </div>
</template>

<script>
import MainContainer from '@/components/main/MainContainer'
import VideoList from '@/components/video/VideoList'

export default {
    name:'VideoListShow',
    props:{
        videoList:{
            type:Array,
            default:[]
        }
    },
    components:{
        MainContainer,
        VideoList
    }
}
</script>

<style scoped>
    #main{
        margin-top: 16px;
        margin-left:14px;
    }
</style>