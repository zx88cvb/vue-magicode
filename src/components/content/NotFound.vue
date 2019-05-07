<template>
  <div id="page-content">
    <div class="container">
      <div class="box404">
        <div class="page404-title">
          <h4>404</h4>
          <h5>抱歉，没有你要找的文章...</h5>
        </div>
        <div class="buttons">
          <div class="pull2-left">
            <router-link to="/">
              <el-button class="btn-comment pull-center" type="primary" round>返回首页</el-button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notFound'
}
</script>

<style lang="stylus" scoped>
  #page-content
    padding: 105px 0 50px 0
    .container
      .box404
        margin: 120px 0 250px 0
        text-align: center
        .page404-title
          display: block
          h4
            font-family: inherit
            font-size: 148px
            line-height: 150px
            word-wrap: break-word
            -ms-word-wrap: break-word
          h5
            font-size: 14px
            line-height: 1.4
        .buttons
          .pull2-left
            padding: 30px
</style>
