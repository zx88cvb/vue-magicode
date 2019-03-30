<template>
  <div class="page-content">
    <home-swiper :swiperList='swiperList' @handleLoopClick='handleLoopClick'></home-swiper>
    <main-content></main-content>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HomeSwiper from 'pages/home/components/Swiper'
import MainContent from 'pages/home/components/Content'
import { ERR_OK } from 'common/js/config'
import { getBlogArticlePage, getRand } from 'api/blog/article'
import { getContentByTypeAndGroup } from 'api/ad/content'
export default {
  name: 'home',
  components: {
    HomeSwiper,
    MainContent
  },
  data () {
    return {
      swiperList: []
    }
  },
  created () {
    // 获取新闻数据
    this._getBlogArticlePage()

    this._getRand()

    this.getIndexLoop()
  },
  methods: {
    _getBlogArticlePage () {
      let _this = this
      getBlogArticlePage().then((res) => {
        if (res.code === ERR_OK) {
          // 将列表数据放入 vuex actions中
          _this.news(res.data)
        }
      })
    },
    _getRand () {
      getRand().then((res) => {
        if (res.code === ERR_OK) {
          // 将列表数据放入 vuex actions中
          this.saveRandNews(res)
        }
      })
      // this.saveRandNews('{a: 1, b: 2}')
    },
    // 获取轮播图
    // 查询广告内容
    getIndexLoop () {
      const _this = this
      getContentByTypeAndGroup(this.CONSTANT.AD.TYPE_KEY.PC_INDEX(), this.CONSTANT.AD.AD_KEY.PC_INDEX_LOOP()).then((res) => {
        if (res.code === ERR_OK) {
          // 将列表数据放入 vuex actions中
          _this.swiperList = res.data
        }
      })
    },
    // 获取轮播图点击事件
    handleLoopClick (item) {
      this.$router.push({
        path: item.adGroupContextVo.linkUrl
      })
    },
    ...mapActions([
      'news',
      'saveRandNews'
    ])
  }
}
</script>

<style scoped lang="stylus">
</style>
