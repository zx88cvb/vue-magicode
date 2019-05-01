<template>
  <span class="to-top hidden-xs-only" v-if="btnFlag" @click="backTop">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-top"></use>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'topScroll',
  data () {
    return {
      btnFlag: false
    }
  },
  // vue的两个生命钩子，这里不多解释。
  // window对象，所有浏览器都支持window对象。它表示浏览器窗口，监听滚动事件
  mounted () {
    window.addEventListener('scroll', this.scrollToTop)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollToTop)
  },
  methods: {
    backTop () {
      let that = this
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
        if (that.scrollTop === 0) {
          clearInterval(timer)
        }
      }, 16)
    },
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollToTop () {
      let that = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      that.scrollTop = scrollTop
      if (that.scrollTop > 60) {
        that.btnFlag = true
      } else {
        that.btnFlag = false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .to-top
    cursor: pointer;
    position: fixed;
    right: 50px;
    bottom: 50px;
    display: block;
</style>
