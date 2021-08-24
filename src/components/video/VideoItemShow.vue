<template>
    <div id="video-item">
        <div class="video-top">
            <el-page-header content="时光回放" @back="back"></el-page-header>
        </div>
        <div class="video-title">
            <h3>{{getVideo.title}}</h3>
        </div>
        <div class="video-content">
            <!--<video-item :video="getVideo"/>-->
            <video controls="controls" preload autoplay>
                <source :src="getVideo.videoUrl" type="video/mp4">
            </video>
        </div>
    </div>
</template>

<script>

export default {
    name:'VideoItemShow',
    data(){
        return{
            currentId:0
        }
    },
    props:{
        videoList:{
            type:Array,
            default:[]
        }
    },
    computed:{
        getId(){
            return this.$route.query.id
        },
        getVideo(){
            return this.videoList[this.getId - 1]
        }
    },
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
    #video-item{
        text-align: center;
        margin-top: 10px;
        margin-left:10px;
        margin-bottom:10px;
    }
    .video-title{
        margin-top:10px;
        margin-bottom:30px;
    }
    .video-content{
        display: flex;
        align-items: center;
        height: 400px;
        width: 500px;
        margin:0 auto;
        background-color: #000;
    }
    video{
        height: 90%;
        width: 100%;
    }

    @media screen and (max-width:580px){
        #video-item{
            margin-left:0;
        }
        .video-content{
            height: 320px;
            width: 400px;
        }
    }

    @media screen and (max-width:420px){
        .video-content{
            height: 240px;
            width: 300px;
        }
    }

    @media screen and (max-width:340px){
        .video-content{
            height: 200px;
            width: 250px;
        }
    }
</style>