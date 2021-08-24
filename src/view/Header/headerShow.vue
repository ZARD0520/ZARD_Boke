<template>
    <div class="header shadow">
        <Header class="header_content">
            <el-row class="row">
                <el-col :xs="24" :sm="24" :md="6" :lg="6">
                    <header-mobile/>
                </el-col>
                <el-col :xs="0" :sm="0" :md="16" :lg="16">
                    <header-pc/>
                </el-col>
            </el-row>
        </Header>
    </div>
</template>

<script>
import Header from '@/components/header/Header'
import headerPc from '@/view/Header/headerPC'
import headerMobile from '@/view/Header/headerMobile'


export default {
    name:'headerShow',
    components:{
        headerPc,
        headerMobile
    },
    data(){
        return{
        }
    }
}
</script>

<style scoped>
    .header{
        background-color: rgb(15, 134, 134);/*
        background-color: rgb(88,195,224);*/
        height: 60px;
        width: 100%;
        z-index:10;
    }
    .shadow{
        border-bottom: solid 1px rgba(240, 248, 255, 0.8);
    }
    .row{
        display: flex;
        justify-content: space-between;
        align-content: center;
        height: 100%;
        width: 100%;
    }
    .header_content{
        height: 100%;
    }



    @media screen and (max-width:1200px) {
        .header{
            width: 100%;
        }
    }

    @media only screen and (min-width: 992px) {
        .el-col-lg-16{
            display: block;
        }
        .el-col-md-16{
            display: block;
        }
    }
</style>