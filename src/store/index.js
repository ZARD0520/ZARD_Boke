import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = {
    state:{
        //二维码
        codeShow:false,
        moneyShow:false,

        //滑到顶部
        scroll:false,

        //移动端更多功能、侧拉栏
        mobileMore:false,
        mobileAside:false,

        //用户登录状态
        isLogin:false,

        //当前文章id
        articleId:0
    },
    getters:{
        getUser(state){
            return state.user
        }
    },
    mutations:{
        //处理登录
        changeLogin(state,value){
            state.isLogin = value
        },

        //处理二维码函数
        changeMoneyCode(state){
            state.moneyShow = true
        },
        showCode(state){
            state.codeShow = true
        },
        closeCode(state){
            state.codeShow = false
            state.moneyShow = false
        },
        closeMoneyCode(state){
            state.moneyShow = false
        },
        closeWechatCode(state){
            state.codeShow = false
        },

        //处理滑到顶部
        scrollTop(state){
            state.scroll = true
        },
        scrollStop(state){
            state.scroll = false
        },

        //处理移动端更多功能
        showMore(state){
            state.mobileMore = true
        },
        closeMore(state){
            state.mobileMore = false
        },

        //处理移动端侧拉栏
        showAside(state){
            state.mobileAside = true
        },
        closeAside(state){
            state.mobileAside = false
        },

        //处理当前文章id
        articleId(state,value){
            state.articleId = value
        }

    },
    actions:{
        async checkLogin({commit},value){
            //将token保存到会话级存储
            sessionStorage.setItem('token',value.token)
            sessionStorage.setItem('user',value.user)
            commit('changeLogin',true)
        }
    },
    modules:{}
}

export default new Vuex.Store(store)