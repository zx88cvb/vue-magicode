<template>
  <div class="comments">
    <div class="comments-box">
      <h3 class="comments-title">
        全部评论:
        <span class="comments-num">{{commentList.total}}条</span>
      </h3>
      <ul class="commentlist">
        <li class="comment even depth-1" v-for="item of commentList.records" :key="item.id">
          <div class="comment-1">
            <div class="comment-avatar">
              <img alt="" src="https://secure.gravatar.com/avatar/a4f83c9094bcb014c4d3db146eec0b0e?s=96&amp;d=mm&amp;r=g" data-original="https://secure.gravatar.com/avatar/a4f83c9094bcb014c4d3db146eec0b0e?s=96&amp;d=mm&amp;r=g" srcset="https://secure.gravatar.com/avatar/a4f83c9094bcb014c4d3db146eec0b0e?s=192&amp;d=mm&amp;r=g 2x" class="avatar avatar-96 photo" height="96" width="96" style="display: inline;">
            </div>
            <div class="comment-body">
              <div class="comment_author">
                <span class="name">{{item.nickname}}</span>
                <em>{{item.createTime}}</em>
              </div>
              <div class="comment_text">
                <p>{{item.content}}</p>
              </div>
              <div class="comment_reply">
                <span @click="handleReplyClick">
                  回复
                </span>
              </div>
            </div>
          </div>
          <respond v-if="isRespond"></respond>
          <!-- <ul class="children" v-for="child of item.blogCommentList" :key="child.id">
            <li class="comment byuser">
              <div class="comment-1">
                <div class="comment-avatar">
                  <img alt="" src="https://secure.gravatar.com/avatar/a4f83c9094bcb014c4d3db146eec0b0e?s=96&amp;d=mm&amp;r=g" data-original="https://secure.gravatar.com/avatar/a4f83c9094bcb014c4d3db146eec0b0e?s=96&amp;d=mm&amp;r=g" srcset="https://secure.gravatar.com/avatar/a4f83c9094bcb014c4d3db146eec0b0e?s=192&amp;d=mm&amp;r=g 2x" class="avatar avatar-96 photo" height="96" width="96" style="display: inline;">
                </div>
                <div class="comment-body">
                  <div class="comment_author">
                    <span class="name">{{child.nickname}}</span>
                    <em>{{child.createTime}}</em>
                  </div>
                  <div class="comment_text">
                    <p>{{child.content}}</p>
                  </div>
                  <div class="comment_reply">
                    <span @click="handleReplyClick">
                      回复
                    </span>
                  </div>
                </div>
              </div>
              <tree-item :child="child"></tree-item>
            </li>
          </ul> -->
          <ul class="children" v-for="child of item.blogCommentList" :key="child.id">
            <tree-item :child="child"></tree-item>
          </ul>
        </li>
        <!-- <li class="comment odd alt depth-1"></li> -->
      </ul>
    </div>
    <respond></respond>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Respond from 'components/message/Respond'
import TreeItem from 'components/message/TreeItem'
export default {
  name: 'message',
  data () {
    return {
      isRespond: false
    }
  },
  components: {
    Respond,
    TreeItem
  },
  computed: {
    ...mapGetters([
      'commentList'
    ])
    // singleNew () {
    //   return this.$store.getters.singleNew
    // }
  },
  methods: {
    // 点击回复按钮
    handleReplyClick () {
      this.isRespond = !this.isRespond
    }
  }
}
</script>

<style lang="stylus" scoped>
  .comments
    position: relative
    .comments-box
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
        .comments-num
          color: #666
      .commentlist
        padding: 0 0 20px 0
        clear: both
      >>> li
          clear: both
          margin: 15px 0
          border-bottom: 1px solid #eceef1
          margin-left: 65px
          position: relative
          padding-bottom: 5px
          margin-bottom: 20px
          .comment-avatar
            position: absolute
            left: -65px
            .avatar
              border-radius: 3px
              -moz-border-radius: 3px
              -webkit-border-radius: 3px
              width: 50px
              height: 50px
          .comment-body
            .comment_author
              position: relative
              em
                padding-left: 6px
                color: #A8A8A8
                font-size: 12px
                font-style: normal
            .comment_text
              padding: 10px 0
              color: #282828
              p
                color: #3d464d
                font-size: 14px
                line-height: 1.6
            .comment_reply
              display: block
              text-align: right
              margin: 0
              font-size: 12px
              color: #757e91
              span
                color: #48494d
                text-decoration: none
                -webkit-transition: all .3s ease
                -moz-transition: all .3s ease
                -ms-transition: all .3s ease
                -o-transition: all .3s ease
                transition: all .3s ease
                cursor: pointer
          >>> .respond-box
            padding: 15px
            background: #f5f6f9
            margin: 10px 0
            box-shadow: none
          ul.children
            padding: 10px 0 0 0
            li
              margin-left: 0
              padding: 12px
              border-bottom-width: 0
              border: 1px solid #E4E4E4
              border-radius: 2px
              background-color: #fbfbfb
              margin-bottom: 10px
              margin-top: 0
              .comment-avatar
                position: relative
                left: initial
                float: left
                .avatar
                  width: 40px
                  height: 40px
              .comment-body
                border-bottom-width: 0
                margin: 0 0 0 55px
                padding: 0 0 10px
                position: relative
                .comment-text
                  padding: 10px 0 0 0
                .comment_reply
                  position: absolute
                  right: 0
                  top: 0
</style>
