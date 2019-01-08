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
        <div class="clearfix"></div>
        <div class="post-options">
          <a href="#" title="like">
            <span class="icon s-like">
            </span>
            <span class="count num">520</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailLeft'
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
</style>
