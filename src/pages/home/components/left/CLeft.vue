<template>
  <div class="c_left">
    <div class="post-nav">
      <span class="cat-post">最新</span>
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
            <div class="posts-default-title"></div>
            <div class="posts-default-content">
              <div class="posts-text"></div>
              <div class="posts-default-info"></div>
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
      margin-bottom: 15px;
    @media screen and (max-width: 767px)
      .cat-post
        position: relative
        padding: 0
        height: 45px
        line-height: 45px
        font-size: 14px
        border-radius: 0
        box-shadow: none
        margin: 0 5px 0 12px
        color: #748594
        border-width: 0
</style>
