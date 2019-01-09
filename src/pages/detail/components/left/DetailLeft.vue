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
              <router-link :to="'/'">商业</router-link>
            </span>
            <span class="sep">></span>
            <span class="current">
              正文
            </span>
          </span>
        </div>
        <h1 class="title">60 年代英国嬉皮士们的精神食粮，端看这些“地下杂志”</h1>
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
            <a href="#" target="_blank">nicetheme</a>
          </span>
          <span class="postcat">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-category"></use>
            </svg>
            <a href="#">设计</a>
          </span>
          <span class="postclock">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-time"></use>
            </svg>
            2019-1-5
          </span>
          <span class="posteye">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-eye"></use>
            </svg>
            999
          </span>
          <span class="postcomment">
            1
          </span>
          <span class="postlike">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-like"></use>
            </svg>
            520
          </span>
        </div>
      </div>
      <div class="post-content">
        作家 Barry Miles 和摄影师、记者 John Hopkins 以及他们的一群朋友先是在 1966 年联合创刊了一本名为 International Times 的报纸，这是欧洲第一个地下媒体。一年后，他们又发布了另一本英国重要的地下杂志 Oz Magazine，那一年，全美国的嬉皮士们奔赴旧金山参加一个名为“爱之夏”的盛会。

这些报纸和杂志往往都在一些音乐节或者社区街角售卖，因而收获了一群稳定的观众群。内容大多都关于另类的音乐、艺术、影像等等。第一刊 International Times 就刊登了关于英国摇滚乐队 Machine 和 Pink Floyd 的报道。而 Oz Magazine 则将一大群迷幻艺术家、善于运用鲜艳色彩的平面设计师、时装设计师和艺术装置介绍给当时的年轻人。
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
          <span class="count num">(520)</span>
        </a>
      </div>
    </div>
    <message></message>
  </div>
</template>

<script>
import Message from 'components/message/Message'
export default {
  name: 'detailLeft',
  components: {
    Message
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
