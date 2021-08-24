<template>
    <q-r>
        <p slot="title">支持作者</p>
        <div slot="code" class="img">
            <img :src="codeList[index].url" alt=""/>
            <div class="tab">
                <el-button @click="tabClick1">{{codeList[0].name}}</el-button>
                <el-button @click="tabClick2">{{codeList[1].name}}</el-button>
            </div>
        </div>
    </q-r>
</template>

<script>
import QR from '@/components/QR-code/QR'

export default {
    name:'qr-money',
    data(){
        return{
            codeList:[
                {
                    name:'微信',
                    url:require('@/assets/img/qrCode/wechatpay.jpg')
                },
                {
                    name:'支付宝',
                    url:require('@/assets/img/qrCode/alipay.jpg')
                }
            ],
            wechat:require('@/assets/img/qrCode/wechatpay.jpg'),
            ali:require('@/assets/img/qrCode/alipay.jpg'),
            index:0
        }
    },
    components:{
        QR
    },
    methods:{
        tabClick1(){
            this.index=0
        },
        tabClick2(){
            this.index=1
        }
    }
}
</script>

<style scoped>
    .img{
        text-align: center;
        padding:5px 0 0 0;
    }
    .tab{
        padding-bottom: 10px;
    }
    img{
        width: 200px;
        height: 200px;
    }
</style>