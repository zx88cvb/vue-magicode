<template>
  <div class="main-content">
    <div class="container">
      <el-row>
        <!-- 左侧内容 -->
        <el-col :xs="24" :sm="16" :md="16" :span="24">
          <!-- <category-left></category-left> -->
          <div class="c_left">
            <div class="breadcrumbs">
              <span>
                <router-link :to="'/'">
                  <span>首页</span>
                </router-link>
                <span class="sep">></span>
                <span class="current">{{menuName}}</span>
              </span>
            </div>
            <m-list @select="selectNews" @handleMoreClick="handleMoreClick"></m-list>
          </div>
        </el-col>
        <!-- 右侧推荐 -->
        <el-col :xs="24" :sm="8" :md="8" :span="24">
          <m-right></m-right>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// import CategoryLeft from 'pages/category/components/left/CategoryLeft'
import MRight from 'components/content/MRight'
import MList from 'components/content/MList'
export default {
  name: 'CategoryContent',
  props: {
    menuName: {
      required: false
    }
  },
  components: {
    MRight,
    MList
  },
  methods: {
    selectNews (item) {
      // this.singleNew(item)
      this.$router.push({
        path: `/news/${item}`
      })
    },
    handleMoreClick (current) {
      this.$emit('handleMoreClick', current)
    }
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
