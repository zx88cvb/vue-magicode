<template>
  <div class="c_left">
    <div class="breadcrumbs">
      <span>
        <router-link :to="'/'">
          <span>首页</span>
        </router-link>
        <span class="sep">></span>
        <span class="current">商业</span>
      </span>
    </div>
    <m-list></m-list>
  </div>
</template>

<script>
import MList from 'components/content/MList'
export default {
  name: 'categoryLeft',
  components: {
    MList
  }
}
</script>

<style lang="stylus" scoped>
  .breadcrumbs
    background: #fff
    margin-bottom: 15px
    padding: 15px 25px
    border-top: 2px solid #748594
    -webkit-box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1)
    -moz-box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1)
    box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1)
    span
      color: #748594
      font-size: 12px
    span.sep
      margin: 0 5px
    span.current
      color: #a5aeb5
</style>
