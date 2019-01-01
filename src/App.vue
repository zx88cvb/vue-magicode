<template>
  <div id="app">
      <m-header></m-header>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
import MHeader from 'components/header/MHeader'
export default {
  name: 'App',
  components: {
    MHeader
  }
}
</script>

<style lang="stylus" scoped>
  @import "../static/css/reset.css";
  @import "~assets/stylus/index.styl";
</style>
