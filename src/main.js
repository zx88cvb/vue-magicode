// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// swiper 滑动插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// Element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 基于断点的隐藏类
import 'element-ui/lib/theme-chalk/display.css'
import '../static/css/reset.css'
import 'assets/stylus/main.styl'
import 'assets/css/base.css'
import '../static/styles/iconfont/iconfont.js'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

// elementUI
Vue.use(ElementUI)

// 轮播
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
