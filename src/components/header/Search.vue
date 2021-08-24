<template>
    <div class="search">
        <el-input 
            v-model="input" placeholder="请输入内容" class="input"
            suffix-icon="el-icon-search" >
        </el-input>
    </div>
</template>

<script>
export default {
    name:'Search',
    data(){
        return{
            input:''
        }
    }
}
</script>

<style scoped>
    .input{
        border-radius: 60px;
    }
</style>