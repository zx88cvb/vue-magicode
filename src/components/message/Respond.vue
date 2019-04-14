<template>
  <div class="respond">
    <div class="respond-box">
      <h3 class="comments-title">
        发表评论
        <span id="cancel-comment-reply">
          <a rel="nofollow" id="cancel-comment-reply-link" href="#" style="display: none;">取消回复</a>
        </span>
      </h3>
      <el-form id="commentform" ref="form" :rules="rules" :model="form">
        <el-row id="comment-author-info" class="clearfix" :gutter="20">
          <el-col :span="8">
            <el-form-item label="昵称" prop="nickname">
              <el-input v-model="form.nickname" placeholder="昵称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="form.email" placeholder="邮箱"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="网址" prop="website">
              <el-input v-model="form.website" placeholder="网址"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="clearfix">
          <el-col :span="24">
            <el-form-item prop="content">
              <el-input type="textarea"
                v-model="form.content"
               :autosize="{ minRows: 6, maxRows: 12}"
               placeholder="说的什么吧…"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row class="form-submit">
          <el-col :span="24">
            <el-form-item>
              <el-button class="btn-comment pull-right" type="primary" @click="saveAdd('form')">发表评论</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import { insertBlogComment } from 'api/blog/comment'
import { ERR_OK } from 'common/js/config'
import { createCommentEmpty } from 'common/form/blog/comment'
export default {
  name: 'respond',
  props: {
    pId: {
      default: 0
    },
    articleId: {
      required: true
    }
  },
  data () {
    return {
      form: {
        id: -1,
        pId: 0,
        articleId: 0,
        userId: 0,
        nickname: null,
        email: null,
        website: null,
        content: null
      },
      rules: {
        articleId: [
          {required: true, message: '文章id不能为空', trigger: 'blur'}
        ],
        nickname: [
          {required: true, message: '请输入昵称', trigger: 'blur'},
          {min: 1, max: 25, message: '长度在 1 到 25 个字符', trigger: 'blur'}
        ],
        excerpt: [
          {min: 1, max: 100, message: '长度在 1 到 100 个字符', trigger: 'blur'}
        ],
        content: [
          {required: true, message: '请输入内容', trigger: 'blur'},
          {min: 1, max: 500, message: '长度在 1 到 500 个字符', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    saveAdd (formName) {
      this.form.pId = this.pId
      this.form.articleId = this.articleId
      let _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          insertBlogComment(this.form).then((res) => {
            if (ERR_OK !== res.code) {
              _this.$message.error(res.message)
            } else {
              _this.$message.success(res.message)
              _this.form = createCommentEmpty()
              _this.$emit('reloadComment', _this.articleId)
            }
          }).catch(function (response) {
            _this.$message.error(response.message)
          })
        } else {
          _this.$message.error('ILLEGAL_ARGUMENT!!')
          return false
        }
      })
    }
  }
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
