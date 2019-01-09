<template>
  <div class="comments">
    <comment-box></comment-box>
    <respond></respond>
  </div>
</template>

<script>
import CommentBox from 'components/message/Box'
import Respond from 'components/message/Respond'
export default {
  name: 'message',
  components: {
    CommentBox,
    Respond
  }
}
</script>

<style lang="stylus" scoped>
  .comments
    position: relative
</style>
