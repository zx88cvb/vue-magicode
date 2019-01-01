<template>
  <div class="page-content">
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeSwiper from 'pages/home/components/Swiper'
export default {
  name: 'home',
  components: {
    HomeSwiper
  }
}
</script>

<style scoped lang="stylus">
  .page-content
    padding: 20px 0
</style>
