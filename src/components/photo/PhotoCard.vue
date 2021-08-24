<template>
    <div class="card">
        <div class="card-img">
            <a href="javascript:;" @click="photoShow">
                <img :src="photoList.photoStart" alt="">
            </a>
        </div>
        <div class="card-text">
            <p>{{photoList.photoName}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'PhotoCard',
    props:{
        photoList:{
            type:Object,
            default:{}
        }
    },
    methods:{
        photoShow(){
            this.$router.push({
                path:'photoShow',
                query:{
                    id:this.photoList.id
                }
            })
        }
    }
}
</script>

<style scoped lang="scss">
    .card{
        position: relative;
        display: inline-block;

        width: 300px;
        height: 400px;
        text-align: center;

        margin:8px 5px 5px 10px;
        padding-bottom:4px;
        border:2px solid rgba(0, 139, 139, 0.80);
        border-radius: 4px;
        background-color: #fff;

    }
    .card-img{/*
        position: relative;
        overflow: hidden;*/
        height: 90%;
        width: 90%;
        margin:0 auto;
        margin-top:4%;
    }
    .card-text{
        margin-top:2px;
        height: 10%;
        font-size: 18px;
        font-weight: bold;
        color: rgba(61, 60, 60,0.9);
    }
    img{/*
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        padding-top:10px;
        max-width: 100%;
        max-height: 100%;
        transform:translate(-50%,-50%);*/
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card:hover{
        box-shadow: 0 0 10px 1px rgba(100, 100, 100, 0.6);
    }

    @media screen and (max-width:350px){
        .card{
            margin-left:0;
            width: 260px;
        }
    }
</style>