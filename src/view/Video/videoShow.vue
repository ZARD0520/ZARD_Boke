<template>
    <main-container>
        <router-view :videoList="videoList"/>
    </main-container>
</template>

<script>
import MainContainer from '@/components/main/MainContainer'
import VideoList from '@/components/video/VideoList'
import VideoListShow from '@/components/video/VideoListShow'

import {getVideo} from '@/network/video'

export default {
    name:'video',
    components:{
        MainContainer,
        VideoList,
        VideoListShow
    },
    data(){
        return {
            videoList:[]
        }
    },
    created(){
        getVideo()
            .then(res=>{
                const data = res.data.data
                this.videoList = data
            })
    }
}
</script>

<style scoped>
</style>