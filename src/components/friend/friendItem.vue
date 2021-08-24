<template>
    <div id="friend">
        <a :href="friend.url" target="_blank">
            <img v-lazy="friend.img" alt="图片飞走啦" class="friend-img"/>
            <div class="friend-text">
                <h4>{{friend.name}}</h4>
                <p>{{friend.introduce}}</p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name:'friendItem',
    props:{
        friend:{
            type:Object,
            default:{}
        }
    }
}
</script>

<style scoped> 
    #friend{
        width: 260px;
        margin-right:30px;
        margin-bottom: 10px;
        display: inline-block;
        border-radius: 6px;
    }
    #friend::after{
        content: '';
        display: block;
        clear: both;
    }
    .friend-img{
        float:left;
        margin:6px 10px 6px 6px;
    }
    .friend-text{
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 80px;
    }
    h4{
        margin-bottom:10px;
    }
    p{
        padding-bottom:4px;
        font-size: 13px;
        color: darkgray;
    }
    img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    a{
        color: black;
    }
    #friend:hover{
        background-color:rgba(1, 126, 126, 0.6);
    }

    @media screen and (max-width:300px){
        #friend{
            width: 240px;
        }
        h4{
            font-size: 14px;
        }
    }
</style>