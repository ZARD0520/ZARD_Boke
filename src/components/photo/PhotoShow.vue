<template>
    <div id="photoShow">
        <div class="page-top">
            <el-page-header @back="back" content="回忆时光"></el-page-header>
        </div>
        <div class="title">
            <h2>{{photoList[getId-1].photoName}}</h2>
        </div>
        <div class="content">
            <el-carousel type="card" height="400px">
                <el-carousel-item v-for="(item,index) in this.getPhotos" :key="index">
                    <!--<img :src="item.url" alt="图片飞走啦" @click="getItem(item.id)">-->
                    <el-image :src="item" :fit="fit" :preview-src-list="getSrcList"></el-image>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    name:'PhotoShow',
    props:{
        photoList:{
            type:Array,
            default:[]
        }
    },
    data(){
        return {
            currentId:0,
            isShow:true,
            fit:'cover'
        }
    },
    computed:{
        getId(){
            return this.$route.query.id
        },
        getPhotos(){
            return this.photoList[this.getId-1].photoList
        },
        getSrcList(){
            var srcList = []
            this.getPhotos.forEach(element => {
                srcList.push(element)
            });
            return srcList
        }
    },
    methods:{
        back(){
            this.$router.back()
        },
        getItem(id){
           this.currentId = id-1
           this.changeShow()
        },
        changeShow(){
            this.isShow = !this.isShow
        }
    }
}
</script>

<style scoped>
    #photoShow{
        margin-left:10px;
        margin-top:10px;
        margin-bottom:10px; 
    }
    .title{
        margin-top:6px;
        text-align: center;
    }
    .content{
        margin-top:30px;
        text-align: center;
    }

    
    .el-image{
        width: 100%;
        height: 100%;
        position: relative;
        z-index:2;
    }
</style>