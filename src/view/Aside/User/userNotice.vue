<template>
    <el-card class="box-card" shadow="hover">
        <div class="top">
            <div class="title">公告栏</div>
        </div>
        <div class="bottom">
            <div class="text">
                <p>浏览本站推荐使用PC端</p>
                <p>系统持续开发中...</p>
            </div>
        </div>
    </el-card>
</template>

<script>
export default {
    name:'userNotice'
}
</script>

<style scoped>
    .box-card{
        margin:0 auto;
        margin-top: 20px;
        width: 90%;
        height: 120px;
        background-color: rgba(240, 240, 240, 0.8);
    }
    .top{
        position: relative;
        top:-16px;
        width: 80%;
        text-align: center;
        border-bottom: solid 1px rgba(160, 160, 160,0.8);
    }
    .title{
        margin-bottom: 10px;
    }
    .bottom{
        text-align: center;
        margin-top:0px;
    }
</style>