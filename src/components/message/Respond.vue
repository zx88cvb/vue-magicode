<template>
  <div class="respond">
    <div class="respond-box">
      <h3 class="comments-title">
        发表评论
        <span id="cancel-comment-reply">
          <a rel="nofollow" id="cancel-comment-reply-link" href="/grace-style1/1913.html#respond" style="display: none;">取消回复</a>
        </span>
      </h3>
      <el-form action="/" id="commentform">
        <el-row id="comment-author-info" class="clearfix" :gutter="20">
          <el-col :span="8">
            <el-form-item label="昵称">
              <el-input placeholder="昵称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="邮箱">
              <el-input placeholder="邮箱"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="网址">
              <el-input placeholder="网址"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="clearfix">
          <el-col :span="24">
            <el-form-item>
              <el-input type="textarea"
               :autosize="{ minRows: 6, maxRows: 12}"
               placeholder="说的什么吧…"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="form-submit">
          <el-col :span="24">
            <el-form-item>
              <el-button class="btn-comment pull-right" type="primary">发表评论</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'respond'
}
</script>

<style lang="stylus" scoped>
  .respond-box
    position: relative
    background-color: #fff
    margin-bottom: 20px
    border-color: #ebedf1
    padding: 50px 38px 40px
    background: #fff
    -webkit-box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1)
    -moz-box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1)
    box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1)
    .comments-title
      font-size: 20px
      color: #282828
      font-weight: 600
      margin: 0
      margin-bottom: 30px
      text-transform: uppercase
      padding-bottom: 20px
      position: relative
      #cancel-comment-reply
        margin-left: 10px
        font-size: 14px
        color: #ddd
    .commentform
      margin-top: 20px
      .form-submit
        position: relative
</style>
