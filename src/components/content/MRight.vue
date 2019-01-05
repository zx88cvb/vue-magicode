<template>
    <div class="sidebar">
      <div class="widget widget_postlist">
        <h3>
          <span>
            随机文章
          </span>
        </h3>
        <ul class="recent-posts-widget">
          <li class="one">
            <a href="#">
              <div class="overlay"></div>
              <img class="lazy thumbnail" data-original="https://demo.nicetheme.xyz/grace-style1/wp-content/themes/grace/timthumb.php?src=https://demo.nicetheme.xyz/grace-style1/wp-content/uploads/sites/7/2018/08/2018081115115913.jpg&amp;h=170&amp;w=299.98&amp;zc=1" src="https://demo.nicetheme.xyz/grace-style1/wp-content/themes/grace/timthumb.php?src=https://demo.nicetheme.xyz/grace-style1/wp-content/uploads/sites/7/2018/08/2018081115115913.jpg&amp;h=170&amp;w=299.98&amp;zc=1" alt="为了让人开车不打瞌睡，松下研发了一款预警系统" style="display: block;">
              <div class="title">
                <span>2019-1-5</span>
                <h4>为了让人开车不打瞌睡，松下研发了一款预警系统</h4>
              </div>
            </a>
          </li>
          <li class="others">
            <div class="image">
              <a href="https://demo.nicetheme.xyz/grace-style1/1779.html" title="新 iPhone 换了玻璃后盖，维修的难度成本都变高了">
                <img class="lazy thumbnail" data-original="https://demo.nicetheme.xyz/grace-style1/wp-content/themes/grace/timthumb.php?src=https://demo.nicetheme.xyz/grace-style1/wp-content/uploads/sites/7/2018/08/2018081115212786.jpg&amp;h=75&amp;w=100&amp;zc=1" src="https://demo.nicetheme.xyz/grace-style1/wp-content/themes/grace/timthumb.php?src=https://demo.nicetheme.xyz/grace-style1/wp-content/uploads/sites/7/2018/08/2018081115212786.jpg&amp;h=75&amp;w=100&amp;zc=1" alt="新 iPhone 换了玻璃后盖，维修的难度成本都变高了" style="display: block;">
              </a>
            </div>
            <div class="title">
              <h4>
                <a href="#">新 iPhone 换了玻璃后盖，维修的难度成本都变高了</a>
              </h4>
              <span>2019-1-5</span>
            </div>
          </li>
          <li class="others">
            <div class="image">
              <a href="https://demo.nicetheme.xyz/grace-style1/1779.html" title="新 iPhone 换了玻璃后盖，维修的难度成本都变高了">
                <img class="lazy thumbnail" data-original="https://demo.nicetheme.xyz/grace-style1/wp-content/themes/grace/timthumb.php?src=https://demo.nicetheme.xyz/grace-style1/wp-content/uploads/sites/7/2018/08/2018081115212786.jpg&amp;h=75&amp;w=100&amp;zc=1" src="https://demo.nicetheme.xyz/grace-style1/wp-content/themes/grace/timthumb.php?src=https://demo.nicetheme.xyz/grace-style1/wp-content/uploads/sites/7/2018/08/2018081115212786.jpg&amp;h=75&amp;w=100&amp;zc=1" alt="新 iPhone 换了玻璃后盖，维修的难度成本都变高了" style="display: block;">
              </a>
            </div>
            <div class="title">
              <h4>
                <a href="#">新 iPhone 换了玻璃后盖，维修的难度成本都变高了</a>
              </h4>
              <span>2019-1-5</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MRight'
}
</script>

<style lang="stylus" scoped>
  .sidebar
    position: relative
    padding-left: 15px
    padding-right: 15px
    .widget
      margin-bottom: 20px
      position: relative
      overflow: hidden
      background: #FFF
      -webkit-box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1)
      -moz-box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1)
      box-shadow: 0 2px 5px 0 rgba(146, 146, 146, .1)
      padding: 35px 30px
      h3
        font-size: 18px
        color: #282828
        font-weight: 600
        margin: 0
        text-transform: uppercase
        padding-bottom: 15px
        margin-bottom: 25px
        position: relative
      ul
        li
          position: relative
          margin-top: 20px
          overflow: hidden
        li.one
          a
            position: relative
            overflow: hidden
            display: block
            .overlay
              opacity: .4
            .overlay:hover
              opacity: 0.5
            .thumbnail
              display block
            .title
              position: absolute
              bottom: 0
              left: 0
              right: 0
              padding: 20px
              span
                font-size: 12px
                color: #CCC
                margin-bottom: 5px
                display: block
              h4
                color: #fff
                font-size: 15px
                overflow: hidden
                text-overflow: ellipsis
                -webkit-box-orient: vertical
                display: -webkit-box
                -webkit-line-clamp: 2
        li.others
          height: 75px
          .image
            float: left
            width: 100px
            height: auto
            max-height: 75px
            position: relative
          .title
            margin-left: 115px
            height: 100%
            position: relative
            h4
              font-size: 15px
              overflow: hidden
              text-overflow: ellipsis
              -webkit-box-orient: vertical
              display: -webkit-box
              -webkit-line-clamp: 2
              a
                color: #48494d
            span
              font-size: 12px
              color: #9A9A9A
              position: absolute
              bottom: 0
</style>
