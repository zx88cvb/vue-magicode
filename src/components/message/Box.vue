<template>
  <div class="comments-box">
    <h3 class="comments-title">
      全部评论:
      <span class="comments-num">3条</span>
    </h3>
    <ul class="commentlist">
      <li class="comment even depth-1">
        <div class="comment-1">
          <div class="comment-avatar">
            <img alt="" src="https://secure.gravatar.com/avatar/a4f83c9094bcb014c4d3db146eec0b0e?s=96&amp;d=mm&amp;r=g" data-original="https://secure.gravatar.com/avatar/a4f83c9094bcb014c4d3db146eec0b0e?s=96&amp;d=mm&amp;r=g" srcset="https://secure.gravatar.com/avatar/a4f83c9094bcb014c4d3db146eec0b0e?s=192&amp;d=mm&amp;r=g 2x" class="avatar avatar-96 photo" height="96" width="96" style="display: inline;">
          </div>
          <div class="comment-body">
            <div class="comment_author">
              <span class="name">Angel</span>
              <em>2019-1-9 22:42:04</em>
            </div>
            <div class="comment_text">
              <p>这个展览将一直持续到 11 月 4 日，如果你在伦敦的话，不妨可以去看看。而《六十年代英国地下媒体》一书由英国出版公司 Rokect88 出版，预计于 10 月发售。</p>
            </div>
            <div class="comment_reply">
              <span>
                <a href="#" title="回复">回复</a>
              </span>
            </div>
          </div>
        </div>
      </li>
      <li class="comment odd alt depth-1"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'commentBox'
}
</script>

<style lang="stylus" scoped>
  .comments-box
    position: relative
    background-color: #fff
    margin-bottom: 20px
    border-color: #ebedf1
    padding: 50px 38px 40px
    background: #fff
    -webkit-box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1)
    -moz-box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1)
    box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1)
    .comments-title
      font-size: 20px
      color: #282828
      font-weight: 600
      margin: 0
      margin-bottom: 30px
      text-transform: uppercase
      padding-bottom: 20px
      position: relative
      .comments-num
        color: #666
    .commentlist
      padding: 0 0 20px 0
      clear: both
      li
        clear: both
        margin: 15px 0
        border-bottom: 1px solid #eceef1
        margin-left: 65px
        position: relative
        padding-bottom: 5px
        margin-bottom: 20px
        .comment-avatar
          position: absolute
          left: -65px
          .avatar
            border-radius: 3px
            -moz-border-radius: 3px
            -webkit-border-radius: 3px
            width: 50px
            height: 50px
        .comment-body
          .comment_author
            position: relative
            em
              padding-left: 6px
              color: #A8A8A8
              font-size: 12px
              font-style: normal
          .comment_text
            padding: 10px 0
            color: #282828
            p
              color: #3d464d
              font-size: 14px
              line-height: 1.6
          .comment_reply
            display: block
            text-align: right
            margin: 0
            font-size: 12px
            color: #757e91
            a
              color: #48494d
              text-decoration: none
              -webkit-transition: all .3s ease
              -moz-transition: all .3s ease
              -ms-transition: all .3s ease
              -o-transition: all .3s ease
              transition: all .3s ease
              cursor: pointer
</style>
