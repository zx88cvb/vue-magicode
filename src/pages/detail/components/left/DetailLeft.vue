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
            <span class="current">
              <router-link :to="'/'">{{singleNew.blogCategoryVo.categoryName}}</router-link>
            </span>
            <span class="sep">></span>
            <span class="current">
              正文
            </span>
          </span>
        </div>
        <h1 class="title">{{singleNew.title}}</h1>
        <div class="post_icon">
          <span class="postauthor">
            <img
                alt
                src="https://secure.gravatar.com/avatar/afa39accf8700cbbe7b13e1d01aa5b17?s=96&amp;d=mm&amp;r=g"
                data-original="https://secure.gravatar.com/avatar/afa39accf8700cbbe7b13e1d01aa5b17?s=96&amp;d=mm&amp;r=g"
                srcset="https://secure.gravatar.com/avatar/afa39accf8700cbbe7b13e1d01aa5b17?s=192&amp;d=mm&amp;r=g 2x"
                class="avatar avatar-96 photo"
                height="96"
                width="96"
              >
            <a href="#" target="_blank">{{singleNew.author}}</a>
          </span>
          <span class="postcat">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-category"></use>
            </svg>
            <a href="#">{{singleNew.blogCategoryVo.categoryName}}</a>
          </span>
          <span class="postclock">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-time"></use>
            </svg>
            {{singleNew.postTime}}
          </span>
          <span class="posteye">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-eye"></use>
            </svg>
            {{singleNew.browseCount}}
          </span>
          <span class="postcomment">
            {{singleNew.commentCount}}
          </span>
          <span class="postlike">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-like"></use>
            </svg>
            {{singleNew.pollCount}}
          </span>
        </div>
      </div>
      <div class="post-content" v-html="singleNew.content">
      </div>
      <div class="clearfix"></div>
      <div class="post-options">
        <a href="#" title="like" class="btn-likes like current">
          <span class="s-like">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-like"></use>
            </svg>
            like
          </span>
          <span class="count num">({{singleNew.commentCount}})</span>
        </a>
      </div>
    </div>
    <message></message>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Message from 'components/message/Message'
export default {
  name: 'detailLeft',
  components: {
    Message
  },
  computed: {
    ...mapGetters([
      'singleNew'
    ])
  },
  created () {
    this.singleNew()
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
        span.current
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
