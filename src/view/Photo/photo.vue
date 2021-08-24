<template>
    <main-container>
        <router-view :photoList="photoList"/>
    </main-container>
</template>

<script>
import MainContainer from '@/components/main/MainContainer'
import PhotoList from '@/components/photo/PhotoList'
import {getPhoto,Photo} from '@/network/photo'

export default {
    name:'photo',
    components:{
        MainContainer,
        PhotoList
    },
    data(){
        return {
            id:1,
            photoList:[]
        }
    },
    created(){
        getPhoto()
            .then(res=>{
                const data = res.data.data
                this.photoList = data
            })
    }
}
</script>

<style scoped>
</style>