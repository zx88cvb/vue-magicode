<template>
  <div class="c_left">
    <div class="post">
      <div class="post-title">
        <div class="breadcrumbs">
          <span>
            <router-link :to="'/'">
              <span>首页</span>
            </router-link>
            <span class="sep">></span>
            <span class="current"
              v-if="getSingleNew.blogCategoryVo"
              @click="handleMenuClick(getSingleNew.blogCategoryVo.id)">
              {{getSingleNew.blogCategoryVo.categoryName}}
            </span>
            <span class="sep">></span>
            <span class="current">
              正文
            </span>
          </span>
        </div>
        <h1 class="title">{{getSingleNew.title}}</h1>
        <div class="post_icon">
          <span class="postauthor">
            <img
                alt
                v-lazy='$imgPath(getSingleNew.thumbnail)'
                class="avatar avatar-96 photo"
                height="96"
                width="96"
              >
            <span target="_blank">{{getSingleNew.author}}</span>
          </span>
          <span class="postcat">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-category"></use>
            </svg>
            <span v-if="getSingleNew.blogCategoryVo">{{getSingleNew.blogCategoryVo.categoryName}}</span>
          </span>
          <span class="postclock">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-time"></use>
            </svg>
            {{getSingleNew.postTime}}
          </span>
          <span class="posteye">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-eye"></use>
            </svg>
            {{getSingleNew.browseCount}}
          </span>
          <span class="postcomment">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-weibiaoti103"></use>
            </svg>
            {{getSingleNew.commentCount}}
          </span>
          <span class="postlike">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-like"></use>
            </svg>
            {{getSingleNew.pollCount}}
          </span>
        </div>
      </div>
      <div class="post-content" v-html="getSingleNew.content">
      </div>
      <div class="clearfix"></div>
      <div class="post-link" v-if="getSingleNew.linkUrl">
        <div class="link">本文转自: {{getSingleNew.linkUrl}}</div>
        <div class="source">来源: {{getSingleNew.source}}</div>
      </div>
      <div class="post-options">
        <span title="like"
         class="btn-likes like"
         :class="{current: isLike}"
         @click="handleLikeClick(getSingleNew.id)">
          <span class="s-like">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-like"></use>
            </svg>
            like
          </span>
          <span class="count num">({{getSingleNew.pollCount}})</span>
        </span>
      </div>
    </div>
    <message :commentCount='getSingleNew.commentCount'></message>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Message from 'components/message/Message'
export default {
  name: 'detailLeft',
  props: {
    isLike: {
      default: false
    }
  },
  components: {
    Message
  },
  computed: {
    ...mapGetters([
      'getSingleNew'
    ])
  },
  methods: {
    handleLikeClick (articleId) {
      this.$emit('handleLikeClick', articleId)
    },
    /** 菜单点击 */
    handleMenuClick (categoryId) {
      this.$emit('handleMenuClick', categoryId)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .post
    .post-title
      .breadcrumbs
        margin-bottom: 25px
        span
          color: #748594
          font-size: 12px
        span.sep
          margin: 0 5px
        .current
          cursor pointer
          &:last-child
            color: #a5aeb5
      .post_icon
        color: #748594
        font-size: 12px
        display: block
        span
          margin-right: 10px
          display: inline-block
          position: relative
        .postauthor
          img
            display: inline-block
            width: 30px
            height: 30px
            border-radius: 50%
            -moz-border-radius: 50%
            -webkit-border-radius: 50%
            border: 1px solid rgba(216, 216, 216, 0.81)
            margin-right: 10px
    .post-content >>> p
        margin-bottom: 22px
        line-height: 2.4
        font-size: 16px
    .post-link
      font-size: 16px
      color: #3d464d
      .link
        padding-bottom: 10px
    .post-options
      .btn-likes
        width: 130px
        height: 40px
        line-height: 40px
        border: 1px solid #F74840
        box-shadow: none
        background: #fff
        display: inline-block
        text-align: center
        cursor: pointer
        margin: 0 2px
        color: #F74840
        font-size: 14px
        text-decoration: none
        border-radius: 0
        -webkit-transition: all .3s ease
        -o-transition: all .3s ease
        transition: all .3s ease
        border-radius: 2px
        -moz-border-radius: 2px
        -webkit-border-radius: 2px
      .btn-likes.current
        background-color: #F74840
        color: #fff
        border-color: #F74840
</style>
