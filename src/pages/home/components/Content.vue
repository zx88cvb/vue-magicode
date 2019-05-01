<template>
  <div class="main-content">
    <div class="container">
      <el-row>
        <!-- 左侧内容 -->
        <el-col :xs="24" :sm="16" :md="16" :span="24">
          <!-- <home-left></home-left> -->
          <div class="c_left">
            <div class="post-nav">
              <span class="cat-post current">最新</span>
              <span class="cat-post">商业</span>
              <span class="cat-post">时尚</span>
              <span class="cat-post">短片</span>
              <span class="cat-post">设计</span>
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
// import HomeLeft from 'pages/home/components/left/CLeft'
import MRight from 'components/content/MRight'
import MList from 'components/content/MList'
export default {
  name: 'MainContent',
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
  .c_left
    .post-nav
      margin-bottom: 15px
      span
        position: relative
        // border: 1px solid #eae9e9
        box-shadow: 0 0 10px 0 rgba(146, 146, 146, .1)
</style>
