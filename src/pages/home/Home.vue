<template>
  <div class="page-content">
    <home-swiper :swiperList='swiperList'
     @handleLoopClick='handleLoopClick'>
    </home-swiper>
    <main-content
     @handleMoreClick="handleMoreClick"
     @handleCategoryClick="handleCategoryClick"
     :listCategory="listCategory">
    </main-content>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HomeSwiper from 'pages/home/components/Swiper'
import MainContent from 'pages/home/components/Content'
import { ERR_OK } from 'common/js/config'
import { getAdIndex } from 'api/ad/content'
export default {
  name: 'home',
  components: {
    HomeSwiper,
    MainContent
  },
  data () {
    return {
      swiperList: [],
      listCategory: [],
      params: {
        isMore: false,
        categoryId: null,
        blogStatus: 1,
        pageNum: 1,
        pageSize: 10
      }
    }
  },
  created () {
    this._getAdIndex()

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
    // 查询广告内容
    _getAdIndex () {
      const _this = this
      getAdIndex().then((res) => {
        if (res.code === ERR_OK) {
          _this.swiperList = res.data.swiperList
          _this.listCategory = res.data.listCategory
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
    // 点击分类
    handleCategoryClick (categoryId) {
      this.params.categoryId = categoryId
      this._getBlogArticlePage()
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
