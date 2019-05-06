<template>
  <div class="container">
    <div class="page-content-items">
      <div class="link-title">
        <span>友情传送</span>
      </div>
      <ul class="link-items">
        <li class="link-item" v-for="item of linkList" :key="item.id">
          <a class="link-item-inner effect-apollo"
            :href="item.adGroupContextVo.linkUrl"
            :title="item.adGroupContextVo.content"
            target="_blank">
            <img :alt="item.adGroupContextVo.content"
              v-lazy="$imgPath(item.adGroupContextVo.imgUrl)"
             :title="item.adGroupContextVo.content">
            <span class="sitename">{{item.adGroupContextVo.content}}</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'linkContent',
  props: ['linkList']
}
</script>

<style lang="stylus" scoped>
  .link-title
    border-bottom: 1px solid #eee
    padding-bottom: 15px
    margin-bottom: 15px
    span
      font-size: 20px
      color: #404040
      position: relative
      margin-right: 5px
  .link-items
    padding: 10px 0
    overflow: hidden
    li
      float: left
      width: 33.33333%
      margin-bottom: 20px
      img
        width: 30px
        height: 30px
        -webkit-border-radius: 3px
        -moz-border-radius: 3px
        border-radius: 3px
      span
        margin-left: 10px
        color: #19B5FE
</style>
