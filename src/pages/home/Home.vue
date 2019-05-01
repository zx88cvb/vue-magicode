<template>
  <div class="page-content">
    <home-swiper :swiperList='swiperList' @handleLoopClick='handleLoopClick'></home-swiper>
    <main-content @handleMoreClick="handleMoreClick"></main-content>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HomeSwiper from 'pages/home/components/Swiper'
import MainContent from 'pages/home/components/Content'
import { ERR_OK } from 'common/js/config'
import { getContentByTypeAndGroup } from 'api/ad/content'
export default {
  name: 'home',
  components: {
    HomeSwiper,
    MainContent
  },
  data () {
    return {
      swiperList: [],
      params: {
        isMore: false,
        categoryId: null,
        pageNum: 1,
        pageSize: 10
      }
    }
  },
  created () {
    this.getIndexLoop()

    // 组合 评论新闻和随机文章 标签云
    this.setArticleRandComment()
  },
  activated () {
    this._getBlogArticlePage()
  },
  methods: {
    _getBlogArticlePage () {
      this.params.isMore = false
      this.params.pageNum = 1
      this.news(this.params)
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
    // 加载更多
    handleMoreClick (current) {
      this.params.pageNum = current + 1
      this.params.isMore = true
      this.news(this.params)
    },
    ...mapActions([
      'news',
      // 'saveRandNews',
      'setArticleRandComment'
      // 'setTagList'
      // 'setArticleComment'
    ])
  }
}
</script>

<style scoped lang="stylus">
</style>
