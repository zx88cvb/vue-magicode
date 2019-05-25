<template>
  <div id="app">
      <m-header></m-header>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <live-to></live-to>
      <top-scrool></top-scrool>
      <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from 'components/header/MHeader'
import MFooter from 'components/footer/MFooter'
import TopScrool from 'components/tool/TopScrool'
import LiveTo from 'components/tool/LiveTo'
export default {
  name: 'App',
  components: {
    MHeader,
    MFooter,
    TopScrool,
    LiveTo
  },
  mounted () {
    this.cnzz()
    this.baiduSeo()
  },
  methods: {
    cnzz () {
      // 创建cnzz统计js
      const script = document.createElement('script')
      script.src = 'https://s96.cnzz.com/z_stat.php?id=1277622426&web_id=1277622426'
      script.language = 'JavaScript'
      document.body.appendChild(script)
    },
    baiduSeo () {
      let bp = document.createElement('script')
      let curProtocol = window.location.protocol.split(':')[0]
      if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js'
      } else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js'
      }
      let s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(bp, s)
    }
  },
  watch: {
    '$route': {
      handler (to, from) {
        // 避免首次获取不到window._czc
        setTimeout(() => {
          if (window._czc) {
            let location = window.location
            let contentUrl = location.pathname + location.hash
            let refererUrl = '/'
            // 用于发送某个URL的PV统计请求，
            window._czc.push(['_trackPageview', contentUrl, refererUrl])
            window._czc.push(['_setAutoPageview', false])
          }
        }, 300)
      },
      // 首次进入页面即执行
      immediate: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../static/css/reset.css";
  @import "~assets/stylus/index.styl";
</style>
