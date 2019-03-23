<template>
  <div class="page-content">
      <detail-content></detail-content>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import DetailContent from 'pages/detail/components/Content'
import { ERR_OK } from 'common/js/config'
import { getBlogArticleById } from 'api/blog/article'
export default {
  name: 'detail',
  props: {
    id: {
      required: true
    }
  },
  components: {
    DetailContent
  },
  created () {
    this._getBlogArticleById()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': '_getBlogArticleById'
  },
  methods: {
    _getBlogArticleById () {
      let _this = this
      getBlogArticleById(this.id).then((res) => {
        if (res.code === ERR_OK) {
          // 将列表数据放入 vuex actions中
          _this.singleNew(res)
        }
      }).catch(function (response) {
        _this.$message.error(response.message)
      })
    },
    ...mapActions([
      'singleNew'
    ])
  }
  // 路由导航守卫
  // beforeRouteUpdate (to, from, next) {
  //   console.log(123)
  // }
}
</script>

<style lang="stylus" scoped>

</style>
