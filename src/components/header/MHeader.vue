<template>
  <header class="navbar-fixed-top">
    <div class="container">
      <h1 class="logo">
        <router-link tag="a"
               to="/">
        </router-link>
      </h1>

      <div class="site-nav primary-menu">
        <div class="menu-fix-box">
          <nav>
            <ul>
              <li v-for="item of menu"
               :key="item.id"
               @click="handleMenuClick(item)">
               <span>{{item.adGroupContextVo.title}}</span>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="right-nav pull-right">
        <button class="js-toggle-search"
          @click="handleSearchClick">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-search1187938easyiconnet"></use>
          </svg>
        </button>

      </div>
      <div class="navbar-mobile hidden-lg-and-up">
        <button type="button"
         class="navbar-toggle collapsed"
         @click="handleNavBarClick">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-category"></use>
          </svg>
        </button>
        <transition name="slide-fade">
          <div class="navbar-collapse in" id="bs-example-navbar-collapse-1" aria-expanded="true" v-show="getShowBar">
            <ul class="nav navbar-nav">
              <li v-for="item of menu"
               :key="item.id"
               @click="handleMenuClick(item)">
               <span>{{item.adGroupContextVo.title}}</span>
              </li>
            </ul>
          </div>
        </transition>
        <transition name="fade">
          <div class="body-overlay"
          v-show="getShowBar"
          @click="hideSide">
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { getAdHead } from 'api/ad/content'
import { ERR_OK } from 'common/js/config'
export default {
  name: 'MHeader',
  data () {
    return {
      menu: []
    }
  },
  created () {
    this.getIndexTopMenu()
  },
  computed: {
    ...mapGetters([
      'getShowBar'
    ])
  },
  methods: {
    // 获取轮播图
    // 查询头部内容
    getIndexTopMenu () {
      const _this = this
      getAdHead().then((res) => {
        if (res.code === ERR_OK) {
          _this.menu = res.data
        }
      })
    },
    handleMenuClick (item) {
      // 将文字存储vuex
      this.SET_MENU_NAME(item.adGroupContextVo.title)
      // 隐藏侧边栏
      this.SET_SHOW_BAR(false)
      // 跳转
      this.$router.push({
        path: item.adGroupContextVo.linkUrl
      })
    },
    /** 搜索 */
    handleSearchClick () {
      this.$message.error('搜索功能暂未开放～')
    },
    // 移动端侧边栏
    handleNavBarClick () {
      this.SET_SHOW_BAR(true)
    },
    hideSide () {
      this.SET_SHOW_BAR(false)
    },
    ...mapMutations([
      'SET_MENU_NAME',
      'SET_SHOW_BAR'
    ])
  }
}
</script>

<style lang="stylus" scoped>
  @import "~assets/stylus/mixin"
  @import "~assets/stylus/variable"

  header
    background: #fff
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.08)
    top: 0
    .container
      position: relative
      overflow: hidden
      .logo
        position: relative
        float: left
        margin-right: 20px
        a
          bg-image('~assets/logo')
          transition: none
          background-size: contain
          background-position: left center
          background-repeat: no-repeat
          text-indent: -9999px
          display: block
          position: relative
          width: 220px
          height: 80px
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
              span
                height: 80px
                color: $color-text-menu
                line-height: 80px
                cursor: pointer
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
          cursor pointer
      .navbar-mobile
        .navbar-toggle
          position: absolute
          padding: 15px 13px
          background-color: transparent
          background-image: none
          left: 10px
          top: 10px
          float: none
          margin: 0
          border-radius: 0
          border: 0
          display: block
          font-size 20px
        .navbar-collapse
          position: fixed
          padding: 0
          top: 0
          width: calc(100vw - 74px)
          height: 100vh !important
          border: none
          border-right: 1px solid #e7e7e7
          background: #FFF
          z-index: 10000
          .navbar-nav
            li
              border-bottom: 1px solid #f5f5f5
              position: relative
              span
                display: block
                font-size: 16px
                color: #48494d
                padding: 15px 30px 15px 45px
                white-space: nowrap
                overflow: hidden
                text-overflow: ellipsis
  .navbar-fixed-top
    position: fixed
    right: 0
    left: 0
    z-index: 10
@media screen and (max-width: 767px)
  header
    .container
      .logo
        text-align: center
        letter-spacing: 0
        position: relative
        margin: 0 auto
        height: 66px
        line-height: 66px
        float: none
        padding: 0
        a
          display inline-block
          width 150px
          height 66px
          background-position center
      .right-nav
        top: 18px
        right: 10px
        color: #333
        position: absolute
        float: none !important
        line-height: normal
        button
          padding: 10px
          margin: 0
  // 侧边栏动画
  .slide-fade-enter-to,.slide-fade-leave-to
    transition: transform 0.3s
    transform: translate(0px,0px)
  .slide-fade-enter,.slide-fade-leave-to
    opacity: 0
    -webkit-transform: translate(-286px, 0px)
    transform: translate(-286px, 0px)
    -webkit-transition: opacity 0.3s ease-in-out 0.3s,-webkit-transform 0.3s ease-in-out
    transition: opacity 0.3s ease-in-out 0.3s,transform 0.3s ease-in-out
  .fade-enter-to, .fade-leave-to
    transition: opacity 0.3s
  .fade-enter, .fade-leave-to
    -webkit-transition: visibility ease-in-out .3s, opacity ease-in-out .3s
    -o-transition: visibility ease-in-out .3s, opacity ease-in-out .3s
    transition: visibility ease-in-out .3s, opacity ease-in-out .3s
    opacity: 0
</style>
