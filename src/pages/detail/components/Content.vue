<template>
  <div class="main-content">
    <div class="container">
      <el-row>
        <!-- 左侧内容 -->
        <el-col :xs="24" :sm="16" :md="16" :span="24">
          <detail-left></detail-left>
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
import DetailLeft from 'pages/detail/components/left/DetailLeft'
import MRight from 'components/content/MRight'
export default {
  name: 'DetailContent',
  components: {
    MRight,
    DetailLeft
  }
}
</script>

<style lang="stylus" scoped>

</style>
