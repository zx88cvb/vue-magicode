<template>
  <div class="c_left">
    <div class="post-nav">
      <span class="cat-post current">最新</span>
      <span class="cat-post">商业</span>
      <span class="cat-post">时尚</span>
      <span class="cat-post">短片</span>
      <span class="cat-post">设计</span>
    </div>
    <div class="posts-con">
      <div class="content ajax-load-con posts-default wow">
        <div class="content-box">
          <div class="posts-default-img">
            <a href="#" target="_blank">
              <div class="overlay"></div>
              <img src="https://demo.nicetheme.xyz/grace-style1/wp-content/themes/grace/timthumb.php?src=https://demo.nicetheme.xyz/grace-style1/wp-content/uploads/sites/7/2018/08/2018081115211363.jpg&h=284&w=710&zc=1" />
            </a>
          </div>
          <div class="posts-default-box">
            <div class="posts-default-title">
              <h2>
                <a href="#">60 年代英国嬉皮士们的精神食粮，端看这些“地下杂志”</a>
              </h2>
            </div>
            <div class="posts-default-content">
              <div class="posts-text">整个 1960 年代后半期，正处在“摇摆伦敦”（Swinging London）时期的伦敦城里，具有叛逆精神的时装、音乐、文学、电影如火如荼地交替上演。 作家 Barry Miles 和摄影师、记者 …</div>
              <div class="posts-default-info">
                <ul>
                  <li class="post-author hidden-sm-only hidden-xs-only">
                    <div class="avatar"><img alt="" src="https://secure.gravatar.com/avatar/afa39accf8700cbbe7b13e1d01aa5b17?s=96&amp;d=mm&amp;r=g" data-original="https://secure.gravatar.com/avatar/afa39accf8700cbbe7b13e1d01aa5b17?s=96&amp;d=mm&amp;r=g" srcset="https://secure.gravatar.com/avatar/afa39accf8700cbbe7b13e1d01aa5b17?s=192&amp;d=mm&amp;r=g 2x" class="avatar avatar-96 photo" height="96" width="96" style="display: block;"></div>
                    <a href="#" target="_blank">nicetheme</a>
                  </li>
                  <li class="ico-cat">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-category"></use>
                    </svg>
                    <a href="#">设计</a>
                  </li>
                  <li class="ico-time">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-time"></use>
                    </svg>
                    2019-1-5
                  </li>
                  <li class="ico-eye hidden-sm-only hidden-xs-only">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-eye"></use>
                    </svg>
                    999
                  </li>
                  <li class="ico-like hidden-sm-only hidden-xs-only">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-like"></use>
                    </svg>
                    520
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeLeft'
}
</script>

<style lang="stylus" scoped>
  .c_left
    .post-nav
      margin-bottom: 15px
      span
        position: relative
        // border: 1px solid #eae9e9
        box-shadow: 0 0 10px 0 rgba(146, 146, 146, .1)
    .posts-con
      .posts-default
        visibility: visible
        animation-name: fadeInUp
      .content-box
        .posts-default-box
          .posts-default-title
            h2
              position: relative
              font-size: 20px
              font-weight: 600
              a
                color: #48494d
                cursor: pointer
          .posts-default-content
            .posts-text
              font-size: 14px
              line-height: 1.6
              margin-bottom: 20px
              color: #566573
            .posts-default-info
              ul
                li.post-author
                  padding-left: 30px
                  .avatar
                    position: absolute
                    top: -2px
                    left: 0
                    width: 25px
                    img
                      border: 1px solid #e5e5e5
                      border-radius: 50%
                      padding: 1px
                      width: 25px
                      height: 25px
</style>
