<template>
  <ul class="children">
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
            <span @click="handleReplyClick(child.id)">
              回复
            </span>
          </div>
        </div>
      </div>
      <respond v-if="child.id === showKey"
           :pId='pId'
          :articleId='child.articleId'
          @reloadComment='reloadComment'></respond>
      <tree-item :child="subitem"
        v-for="subitem in child.blogCommentList"
        :key="subitem.id"
        @handleReplyClick="handleReplyClick"
        @reloadComment='reloadComment'>
        </tree-item>
    </li>
  </ul>
</template>

<script>
import Respond from 'components/message/Respond'
export default {
  name: 'treeItem',
  props: {
    child: {
      type: Object
    }
  },
  data () {
    return {
      pId: 0,
      showKey: 0
    }
  },
  components: {
    Respond
  },
  methods: {
    handleReplyClick (id) {
      this.showKey = id
      this.pId = id
      this.$emit('handleReplyClick', id)
    },
    reloadComment (articleId) {
      this.$emit('reloadComment', articleId)
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
        li
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
          .respond-box
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
