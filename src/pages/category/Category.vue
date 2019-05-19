<template>
  <div class="page-content">
    <category-content
     @handleMoreClick="handleMoreClick"
     :menuName="menuName"
     >
     </category-content>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CategoryContent from 'pages/category/components/Content'
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
      params: {
        isMore: false,
        categoryId: null,
        tagId: null,
        pageNum: 1,
        pageSize: 10
      }
    }
  },
  computed: {
    ...mapGetters([
      'menuName'
    ])
  },
  components: {
    CategoryContent
  },
  activated () {
    // 获取新闻数据
    this._getBlogArticlePage()
  },
  methods: {
    _getBlogArticlePage () {
      this.params.isMore = false
      this.params.pageNum = 1
      this.params.categoryId = this.categoryId
      this.params.tagId = this.tagId
      this.news(this.params)
    },
    // 加载更多
    handleMoreClick (current) {
      this.params.pageNum = current + 1
      this.params.isMore = true
      this.news(this.params)
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
