<template>
  <div class="page-single">
    <page-title></page-title>
    <link-content :linkList="linkList"></link-content>
  </div>
</template>

<script>
import PageTitle from 'components/header/PageTitle'
import LinkContent from 'pages/links/components/Content'
import { ERR_OK } from 'common/js/config'
import { getAdLink } from 'api/ad/content'
export default {
  name: 'links',
  components: {
    PageTitle,
    LinkContent
  },
  data () {
    return {
      linkList: []
    }
  },
  created () {
    this.getLinkList()
  },
  methods: {
    // 获取友情链接
    // 查询广告内容
    getLinkList () {
      const _this = this
      getAdLink().then((res) => {
        if (res.code === ERR_OK) {
          // 将列表数据放入 vuex actions中
          _this.linkList = res.data
        }
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .page-single
    padding-top: 81px
</style>
