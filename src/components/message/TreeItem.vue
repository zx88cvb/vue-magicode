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
            <span @click="handleReplyClick">
              回复
            </span>
          </div>
        </div>
      </div>
      <tree-item :child="subitem" v-for="subitem in child.blogCommentList" :key="subitem.id"></tree-item>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'treeItem',
  props: {
    child: {
      type: Object
    }
  },
  methods: {
    handleReplyClick () {
      console.log(12345)
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
