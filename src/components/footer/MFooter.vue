<template>
  <footer>
    <div class="footer-box">
      <div class="container">
        <div class="nav-footer">
            <a href="#">留言</a>
            <a href="#">购买主题</a>
        </div>
        <div class="copyright-footer">
          <p>Copyright © 2019 Grace主题演示1站
            · Powered By Vue · Grace Theme By Angel
          </p>
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
        p
          color: #828282
          font-size: 12px
</style>
