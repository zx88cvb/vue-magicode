<template>
  <div class="page-content">
      <div class="main-content">
        <div class="container">
          <el-row>
            <!-- 左侧内容 -->
            <el-col :xs="24" :sm="16" :md="16" :span="24">
              <detail-left :isLike='isLike'
               @handleLikeClick='handleLikeClick'
               @handleMenuClick='handleMenuClick'>
               </detail-left>
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
import { mapActions } from 'vuex'
import DetailLeft from 'pages/detail/components/left/DetailLeft'
import MRight from 'components/content/MRight'
import { addPoll } from 'api/blog/poll'
import { ERR_OK } from 'common/js/config'
import { createPollEmpty } from 'common/form/blog/pollForm'
export default {
  name: 'detail',
  props: {
    id: {
      required: true
    }
  },
  data () {
    return {
      isLike: false,
      form: {
        id: null,
        articleId: 0,
        userId: null,
        isPositive: 1
      }
    }
  },
  components: {
    MRight,
    DetailLeft
  },
  activated () {
    this.singleNew(this.id)
    this.getComment({articleId: this.id})
    this.getLike(this.id)
  },
  methods: {
    // 通过localstorage 判断是否点赞
    getLike (id) {
      this.isLike = parseInt(localStorage.getItem(this.CONSTANT.BLOG.LIKE.ARTICLE_LIKE(id))) === parseInt(id)
    },
    // 点击喜欢
    handleLikeClick (articleId) {
      if (!this.isLike) {
        const _this = this
        this.form.articleId = articleId
        addPoll(this.form).then((res) => {
          if (ERR_OK !== res.code) {
            _this.$message.error(res.message)
          } else {
            _this.$message.success(res.message)
            _this.form = createPollEmpty()
            localStorage.setItem(this.CONSTANT.BLOG.LIKE.ARTICLE_LIKE(articleId), articleId)
            _this.isLike = true
            // 通过vuex 改变state 中 点赞数字
            _this.setArticleLike()
          }
        }).catch(function (response) {
          _this.$message.error(response.message)
        })
      } else {
        this.$message.info('您已经点过赞啦~')
      }
    },
    /** 点击菜单 */
    handleMenuClick (categoryId) {
      // 跳转
      this.$router.push({
        path: `/category/${categoryId}`
      })
    },
    ...mapActions([
      'singleNew',
      'getComment',
      'setArticleLike'
    ])
  },
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
    // 如果路由有变化，会再次执行该方法
    // 查询文章
    this.singleNew(to.params.id)
    // 查询评论
    this.getComment({articleId: to.params.id})
    // 查询是否点赞
    this.getLike(to.params.id)

    next()
  }
  // watch: {
  //   // 如果路由有变化，会再次执行该方法
  //   '$route' () {
  //     // 查询文章
  //     this.singleNew(this.id)
  //     // 查询评论
  //     this.getComment({articleId: this.id})
  //     // 查询是否点赞
  //     this.getLike(this.id)
  //   }
  // }
  // 路由导航守卫
  // beforeRouteUpdate (to, from, next) {
  //   console.log(123)
  // }
}
</script>

<style lang="stylus" scoped>

</style>
