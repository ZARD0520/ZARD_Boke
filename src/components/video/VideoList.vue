<template>
    <div id="video-list">
        <div class="video-img">
            <a href="javascript:;" @click="showItem">
                <img :src="videoList.imgUrl" alt="图片飞走啦~">
                <span>{{this.time}}</span>
                <div class="img-text">
                    <p class="img-text-t">{{videoList.title}}</p>
                    <p class="img-text-i">{{videoList.introduce}}</p>
                </div>
            </a>
        </div>
        <div class="video-text">
            <div class="video-title">
                <a href="javascript:;" @click="showItem">{{videoList.title}}</a>
            </div>
            <div class="video-introduce">
                <p>&nbsp&nbsp{{videoList.introduce}}</p>
            </div>
        </div>
        <video :src="videoList.videoUrl" style="display:none" ref="video"></video>
    </div>
</template>

<script>
export default {
    name:'VideoList',
    data(){
        return {
            time:'0:00'
        }
    },
    props:{
        videoList:{
            type:Object,
            default:{}
        }
    },
    mounted(){
        this.getTime()
    },
    methods:{
        showItem(){
            this.$router.push({
                path:'VideoItemShow',
                query:{
                    id:this.videoList.id
                }
            })
        },
        getTime(){
            var video = this.$refs.video
            video.addEventListener('loadedmetadata',()=>{
                if(video.readyState>0){
                    var minutes = parseInt(video.duration/60,10)
                    var seconds = parseInt(video.duration % 60)
                    this.time = minutes+":"+seconds
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
    #video-list{
        height: 160px;
        width: 100%;
        margin-bottom: 16px;
        border-radius: 6px;
    }
    #video-list::after{
        content:' '; 
        display:block;
        clear: both;
    }
    .video-img{
        height: 100%;
        width: 240px;
        position: relative;
        float: left;
        border-radius: 10px;
        margin-right:12px;
        text-align: center;
    }
    .video-img span{
        position: absolute;
        bottom: 0;
        right: 0;
        background-color: rgba(160, 160, 160, 0.6);
        border-bottom-right-radius: 6px;
    }
    .img-text p{
        width: 100%;
        visibility: hidden;
        position: relative;
        bottom:100px;
        color: rgb(221, 222, 223);
        opacity: 0.8;
    }
    .video-img:hover{
        margin-left: 12px;
        transition: margin-left 0.3s;
        .img-text-t{
            visibility: initial;
            transition: visibility 0.6s;
        }
    }


    .video-text{
    }
    .video-text p{
        font-size: 14px;
        color: rgb(161, 159, 159);
    }
    .video-title{
        font-size: 16px;
        margin-bottom: 14px;
    }
    .video-title a:hover{
        color: rgb(114, 114, 114);
    }

    .img-text-t{
        margin-bottom: 10px;
    }
    .img-text-i{
        display: none;
    }


    a{
        color: black;
    }
    img{
        height: 100%;
        width: 240px;
        object-fit: cover;
        border-radius: 6px;
    }

    @media screen and (max-width:520px){
        #video-list{
            height: 220px;
        }
        .video-img{
            width: 95%;
        }
        img{
            width: 100%;
        }
        .img-text p{
            visibility: inherit;
            bottom:160px;
            opacity: 1;
            color: rgb(221, 222, 223);
        }
        .img-text-i{
            display: block;
            font-size: 10px;
            color: rgb(114, 114, 114);
        }
        .video-text{
            display: none;
        }
        .video-img:hover{
            margin-left: 0px;
        }
    }
</style>