<template>
  <footer>
    <div class="footer-box">
      <div class="container">
        <div class="nav-footer">
            <!-- <a href="#">留言</a> -->
        </div>
        <div class="copyright-footer">
          <p>Copyright © 2019 Angelive
            · Powered By Vue · Theme By Angel
          </p>
          <a href="http://www.beian.miit.gov.cn" target="view_window">鄂ICP备19006922号-1</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MFooter'
}
</script>

<style lang="stylus" scoped>
  footer
    .footer-box
      background-color: #282828
      padding: 35px 0 25px 0
      .nav-footer
        margin-bottom: 15px
        a
          color: #e0e0e0
          margin-right: 10px
      .copyright-footer
        p, a
          color: #828282
          font-size: 12px
</style>
