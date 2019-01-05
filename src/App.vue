<template>
  <div id="app">
      <m-header></m-header>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from 'components/header/MHeader'
import MFooter from 'components/footer/MFooter'
export default {
  name: 'App',
  components: {
    MHeader,
    MFooter
  }
}
</script>

<style lang="stylus" scoped>
  @import "../static/css/reset.css";
  @import "~assets/stylus/index.styl";
</style>
