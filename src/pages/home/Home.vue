<template>
  <div class="page-content">
    <home-swiper></home-swiper>
    <main-content></main-content>
  </div>
</template>

<script>
import HomeSwiper from 'pages/home/components/Swiper'
import MainContent from 'pages/home/components/Content'
export default {
  name: 'home',
  components: {
    HomeSwiper,
    MainContent
  }
}
</script>

<style scoped lang="stylus">
</style>
