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
import { getBlogArticlePage } from 'api/blog/article'
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
      page: {
        pageNum: 1,
        pageSize: 10
      }
    }
  },
  created () {
    // 获取新闻数据
    // this._getBlogArticlePage()

    // this._getRand()

    this.getIndexLoop()

    // 获取标签云
    // this.setTagList()

    // 组合 评论新闻和随机文章 标签云
    this.setArticleRandComment()

    // 根据评论获取新闻
    // this.setArticleComment()
  },
  activated () {
    this._getBlogArticlePage()
  },
  methods: {
    _getBlogArticlePage () {
      const params = {
        categoryId: this.categoryId,
        pageNum: this.page.pageNum,
        pageSize: this.page.pageSize
      }
      let _this = this
      getBlogArticlePage(params).then((res) => {
        if (res.code === ERR_OK) {
          // 将列表数据放入 vuex actions中
          _this.news(res.data)
        }
      })
    },
    // _getRand () {
    //   getRand().then((res) => {
    //     if (res.code === ERR_OK) {
    //       // 将列表数据放入 vuex actions中
    //       this.saveRandNews(res)
    //     }
    //   })
    //   // this.saveRandNews('{a: 1, b: 2}')
    // },
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
