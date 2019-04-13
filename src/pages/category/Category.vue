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
  props: {
    categoryId: {
      required: false
    },
    tagId: {
      required: false
    }
  },
  data () {
    return {
      page: {
        pageNum: 1,
        pageSize: 10
      }
    }
  },
  components: {
    CategoryContent
  },
  created () {
    // 获取新闻数据
    this._getBlogArticlePage()
  },
  methods: {
    _getBlogArticlePage () {
      const params = {
        categoryId: this.categoryId,
        tagId: this.tagId,
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
    ...mapActions([
      'news'
    ])
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route' () {
      this._getBlogArticlePage()
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
