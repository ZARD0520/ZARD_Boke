//核心模块引入
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

//样式与图标引入
import './assets/css/common.css'
import './assets/icon/icon.css'

//懒加载引入
import VueLazyload from 'vue-lazyload'

Vue.use(ElementUI)
Vue.use(VueLazyload,{
  loading:require('@/assets/icon/loading.svg')
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
