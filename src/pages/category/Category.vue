<template>
  <div class="page-content">
    <category-content></category-content>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CategoryContent from 'pages/category/components/Content'
import { getBlogArticlePage } from 'api/blog/article'
import { ERR_OK } from 'common/js/config'
export default {
  name: 'category',
  components: {
    CategoryContent
  },
  created () {
    // 获取新闻数据
    this._getBlogArticlePage()
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
    ...mapActions([
      'news'
    ])
  }
}
</script>

<style lang="stylus" scoped>

</style>
