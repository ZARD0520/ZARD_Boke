<template>
    <div id="asideUser">
        <user/>
        <user-notice/>
        <user-more/>
        <user-contact/>

        <qr-money class="money" style="display:none"/>
        <qr-wechat class="wechat" style="display:none"/>
    </div>
</template>

<script>
import User from './User/user'
import userContact from './User/userContact'
import userNotice from './User/userNotice'
import userMore from './User/userMore'

import QrMoney from '@/view/QR/qr-money'
import QrWechat from '@/view/QR/qr-wechat'

export default {
    name:'asideUser',
    components:{
        User,
        userContact,
        userNotice,
        userMore,

        QrMoney,
        QrWechat
    },
    computed:{
        //返回二维码状态
        listenCode(){
            return this.$store.state.codeShow
        },
        listenMoney(){
            return this.$store.state.moneyShow
        }
    },
    watch:{
        //根据二维码状态改变进行相应处理
        listenCode:function(after,before){
            if(after){
                var style = this.$el.querySelector('.wechat').style
                var wDisplay = this.$el.querySelector('.money').style.display
                if( wDisplay == "block"){
                    this.$store.commit('closeMoneyCode')
                }
                style.display = "block"
            }else if(!after){
                var style = this.$el.querySelector('.wechat').style
                style.display = "none"
            }
        },
        listenMoney:function(after,before){
            if(after){
                var style = this.$el.querySelector('.money').style
                var mDisplay = this.$el.querySelector('.wechat').style.display
                if( mDisplay == "block"){
                    this.$store.commit('closeWechatCode')
                }
                style.display = "block"
            }else if(!after){
                var style = this.$el.querySelector('.money').style
                style.display = "none"
            }
        }
    },
    methods:{
        showMoneyCode(){
            console.log('code');
        }
    }
}
</script>

<style scoped>
    #asideUser{
        height: 100%;
        width: calc(100% + 22px);
        padding-right:14px;
        overflow-y: scroll;
    }
</style>