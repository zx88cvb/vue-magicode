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
import VueLazyload from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css'
// 基于断点的隐藏类
import 'element-ui/lib/theme-chalk/display.css'
import '../static/css/reset.css'
import 'assets/stylus/main.styl'
import 'assets/css/base.css'
import '../static/styles/iconfont/iconfont.js'

// require styles
import 'swiper/dist/css/swiper.css'

// 常量
import * as constant from './common/js/constant'

Vue.config.productionTip = false

// elementUI
Vue.use(ElementUI)

// 轮播
Vue.use(VueAwesomeSwiper)

/* Vue懒加载图片 */
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: require('./assets/image/loading.jpg'),
  loading: require('./assets/image/loading.jpg'),
  attempt: 1
})

// 常量
Vue.prototype.CONSTANT = constant

// 全局图片
Vue.prototype.$imgPath = (url) => (`imgPath/${url}`)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
