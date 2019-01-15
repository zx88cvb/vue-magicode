<template>
  <div class="page-single">
    <page-title></page-title>
    <link-content></link-content>
  </div>
</template>

<script>
import PageTitle from 'components/header/PageTitle'
import LinkContent from 'pages/links/components/Content'
export default {
  name: 'links',
  components: {
    PageTitle,
    LinkContent
  }
}
</script>

<style lang="stylus" scoped>
  .page-single
    padding-top: 81px
</style>
