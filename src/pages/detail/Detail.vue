<template>
  <div class="page-content">
      <detail-content></detail-content>
  </div>
</template>

<script>
import DetailContent from 'pages/detail/components/Content'
// import { ERR_OK } from 'common/js/config'
// import { getBlogArticleById } from 'api/blog/article'
export default {
  name: 'detail',
  props: {
    id: {
      required: true
    }
  },
  components: {
    DetailContent
  }
  // 路由导航守卫
  // beforeRouteUpdate (to, from, next) {
  //   console.log(123)
  // }
}
</script>

<style lang="stylus" scoped>

</style>
