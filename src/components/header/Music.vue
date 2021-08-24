<template>
    <div class="music">
        <div class="img">
            <img :src="music.imgUrl" alt="" :class="playing?'rotate':''"/>
        </div>
        <div class="content">
            <span class="text">
                <span class="name">{{music.name}}</span>
                <span class="singer">—{{music.singer}}</span>
            </span>
            <div class="control">
                <i class="iconfont icon-shangyishou" @click="last"></i>
                <i v-if="playing" class="el-icon-video-pause" @click="changeStatus"></i>
                <i v-else class="el-icon-video-play" @click="changeStatus"></i>
                <i class="iconfont icon-xiayishou" @click="next"></i>
            </div>
        </div>
        <audio :src="music.musicUrl" ref="music" @ended="next()" preload="auto">
            浏览器不支持音乐播放
        </audio>
    </div>
</template>

<script>
import {getMusic,Music} from '@/network/music'

export default {
    name:'Music',
    data(){
        return{
            playing:false,
            music:{},
            id:1
        }
    },
    created(){
        getMusic(this.id)
            .then(res=>{
                const data = res.data.data[0]
                this.music = new Music(data.name,data.singer,data.imgUrl,data.musicUrl)
            })
    },
    methods:{
        async startPlay(){
            var music = this.$refs.music
            await getMusic(this.id)
                    .then(res=>{
                        const data = res.data.data[0]
                        this.music = new Music(data.name,data.singer,data.imgUrl,data.musicUrl)
                        music.play()
                    })
        },
        changeStatus(){
            if(!this.playing){
                this.playing = true
                this.$refs.music.play()
            }else{
                this.playing = false
                this.$refs.music.pause()
            }
        },
        async last(){
            if(!this.playing){
                this.playing = true
            }
            if(this.id > 1){
                this.id --
            }else{
                this.id = 32
            }
            await this.startPlay()
            this.$refs.music.play()
        },
        async next(){
            if(!this.playing){
                this.playing = true
            }
            if(this.id < 32){
                this.id ++
            }else{
                this.id = 1
            }
            await this.startPlay()
            this.$refs.music.play()
        }
    }
}
</script>

<style scoped>
    .music{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .img{
        width: 46px;
        height: 46px;
        margin-right:10px;
    }
    img{
        height: 100%;
        width:100%;
        border-radius:50%;
        box-shadow: 0 0 6px #ccc;
    }


    .singer{
        font-size: 10px;
        margin-right: 10px;
    }
    .name{
        width: 60px;
        font-size: 14px;
        margin-left: 10px;
    }

    .content{
        text-align: center;
    }

    .control{
        position: relative;
        height: 30px;
        margin-bottom: 5px;
        margin-right:6px;
        bottom:2px;
    }

    .el-icon-video-pause,.el-icon-video-play{
        font-size: 24px;
    }

    i{
        margin-right:4px;
    }

    .iconfont{
        font-size: 20px;
    }

    .rotate{
        animation: Rotate 6s infinite linear;
    }

    @keyframes Rotate {
        0% {
            transform:rotate(0deg)
        }
        100% {
            transform: rotate(360deg);
        }
    }

    @media screen and (max-width:991.5px){
        .music{
            display: block;
        }
        .img{
            position: relative;
            width: 50px;
            height: 50px;
            left:6px;
            float: left;
            margin-right:6px;
        }
        .control{
            bottom:0;
            top:6px;
            right:0px;
        }
        .content{
            margin-top:6px;
            margin-bottom:6px;
            text-align: center;
        }
        .name{
            margin-left:0;
        }
        .singer{
            margin-right:0;
        }
    }

</style>