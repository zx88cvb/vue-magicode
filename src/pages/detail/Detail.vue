<template>
  <div class="page-content">
      <div class="main-content">
        <div class="container">
          <el-row>
            <!-- 左侧内容 -->
            <el-col :xs="24" :sm="16" :md="16" :span="24">
              <detail-left></detail-left>
            </el-col>
            <!-- 右侧推荐 -->
            <el-col :xs="24" :sm="8" :md="8" :span="24">
              <m-right></m-right>
            </el-col>
          </el-row>
        </div>
      </div>
  </div>
</template>

<script>
import DetailLeft from 'pages/detail/components/left/DetailLeft'
import MRight from 'components/content/MRight'
import { mapActions } from 'vuex'
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
    MRight,
    DetailLeft
  },
  activated () {
    this.singleNew(this.id)
    this.getComment(this.id)
  },
  methods: {
    ...mapActions([
      'singleNew',
      'getComment'
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
