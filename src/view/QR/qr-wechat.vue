<template>
    <q-r>
        <p slot="title">微信二维码</p>
        <div slot="code" class="img">
            <img src="~@/assets/img/qrCode/wechat.jpg" alt="">
        </div>
    </q-r>
</template>

<script>
import QR from '@/components/QR-code/QR'
export default {
    name:'qr-wechat',
    components:{
        QR
    }
}
</script>

<style scoped>
    .img{
        text-align: center;
        padding:5px 0 5px 0;
    }
    img{
        width: 200px;
        height: 200px;
    }
</style>