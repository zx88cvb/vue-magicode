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
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
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
      // 跳转
      this.$router.push({
        path: item.adGroupContextVo.linkUrl
      })
    },
    /** 搜索 */
    handleSearchClick () {
      this.$message.error('搜索功能暂未开放～')
    },
    ...mapMutations([
      'SET_MENU_NAME'
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
  .navbar-fixed-top
    position: fixed
    right: 0
    left: 0
    z-index: 10
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
</style>
