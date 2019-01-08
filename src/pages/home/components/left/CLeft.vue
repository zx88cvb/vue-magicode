<template>
  <div class="c_left">
    <div class="post-nav">
      <span class="cat-post current">最新</span>
      <span class="cat-post">商业</span>
      <span class="cat-post">时尚</span>
      <span class="cat-post">短片</span>
      <span class="cat-post">设计</span>
    </div>
    <m-list></m-list>
  </div>
</template>

<script>
import MList from 'components/content/MList'
export default {
  name: 'HomeLeft',
  components: {
    MList
  }
}
</script>

<style lang="stylus" scoped>
  .c_left
    .post-nav
      margin-bottom: 15px
      span
        position: relative
        // border: 1px solid #eae9e9
        box-shadow: 0 0 10px 0 rgba(146, 146, 146, .1)
</style>
