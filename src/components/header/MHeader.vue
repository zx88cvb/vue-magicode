<template>
  <header>
    <div class="container">
      <h1 class="logo">
        <a href=""></a>
      </h1>

      <div class="site-nav primary-menu">
        <div class="menu-fix-box">
          <nav>
            <ul>
              <li><a href="">首页</a></li>
              <li><a href="">商业</a></li>
              <li><a href="">设计</a></li>
              <li><a href="">时尚</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="right-nav pull-right">
        <div class="toggle-message">
          <button class="js-toggle-message">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-bell"></use>
            </svg>
          </button>
        </div>
        <button class="js-toggle-search">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-search1187938easyiconnet"></use>
          </svg>
        </button>

      </div>
      <div class="navbar-mobile">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MHeader'
}
</script>

<style lang="stylus" scoped>
  @import "~assets/stylus/mixin"
  @import "~assets/stylus/variable"

  header
    background: #fff
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.08)
  .container
    position: relative
    overflow: hidden
    .logo
      position: relative
      width: 60px
      height: 60px
      float: left
      margin-right: 20px
      a
        bg-image('~assets/logo')
    .site-nav
      position: relative
      float: left
      .menu-fix-box
        ul
          margin: 0
          padding: 0
          list-style: none
          display: inline-block
          float: right
          li
            margin: 0 10px
            display: inline-block
            position: relative
            a
              height: 80px
              color: $color-text-menu
              line-height: 80px
    .right-nav
      line-height 80px
      .toggle-message
        display: inline-block
        position: relative
        margin-right: 10px
        .js-toggle-message
           display: inline-block
           font-size: 16px
      .js-toggle-search
        position: relative
        display: inline-block
        background: transparent
        font-size: 16px
</style>
