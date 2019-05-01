<template>
  <div id="app">
      <m-header></m-header>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <top-scrool></top-scrool>
      <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from 'components/header/MHeader'
import MFooter from 'components/footer/MFooter'
import TopScrool from 'components/tool/TopScrool'
export default {
  name: 'App',
  components: {
    MHeader,
    MFooter,
    TopScrool
  }
}
</script>

<style lang="stylus" scoped>
  @import "../static/css/reset.css";
  @import "~assets/stylus/index.styl";
</style>
