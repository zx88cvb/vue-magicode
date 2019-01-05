<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide><img src="https://demo.nicetheme.xyz/grace-style1/wp-content/themes/grace/timthumb.php?src=https://demo.nicetheme.xyz/grace-style1/wp-content/uploads/sites/7/2017/09/2018081117141885.jpg&h=450&w=1170"/></swiper-slide>
      <swiper-slide><img src="https://demo.nicetheme.xyz/grace-style1/wp-content/themes/grace/timthumb.php?src=https://demo.nicetheme.xyz/grace-style1/wp-content/uploads/sites/7/2018/08/2018081116390023.jpg&h=450&w=1170"/></swiper-slide>
      <swiper-slide><img src="https://demo.nicetheme.xyz/grace-style1/wp-content/themes/grace/timthumb.php?src=https://demo.nicetheme.xyz/grace-style1/wp-content/uploads/sites/7/2018/08/2018081116391818-e1533978162780.jpg&h=450&w=1170"/></swiper-slide>
      <swiper-slide><img src="https://demo.nicetheme.xyz/grace-style1/wp-content/themes/grace/timthumb.php?src=https://demo.nicetheme.xyz/grace-style1/wp-content/uploads/sites/7/2018/08/2018081115114442-e1533974263195.jpg&h=450&w=1170"/></swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        loop: true,
        autoplay: true, // 可选选项，自动滑动
        // 设定初始化时slide的索引
        initialSlide: 0,

        // 设定为true时，active slide会居中，而不是默认状态下的居左
        centeredSlides: true,

        // 显示数量
        slidesPerView: 'auto',

        // 设定slide与左边框的预设偏移量（单位px）
        slidesOffsetBefore: 0,

        // 在slide之间设置距离（单位px）
        spaceBetween: 20,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<div class="' + className + '"><span></span><i></i></div>'
          }
        },

        // 左右箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper
    margin-bottom: 25px
    .swiper-slide
      width: 1140px
      transition-timing-function: linear
      img
        width: 100%
        border-radius: 4px
    .swiper-pagination
      .swiper-pagination-bullet
        background: #fff
      .swiper-pagination-bullet-active
        background: #fff
    .swiper-button-prev
      color: #fff
</style>
