<template>
  <div class="posts-con">
    <div class="content ajax-load-con posts-default wow" v-for="(item) of news" :key="item.id">
      <div class="content-box">
        <div class="posts-default-img">
          <a href="#" @click="selectItem(item.id)">
            <div class="overlay"></div>
            <img
              :src="_imgPath(item.thumbnail)"
            >
          </a>
        </div>
        <div class="posts-default-box">
          <div class="posts-default-title" @click="selectItem(item.id)">
            <h2>
              <a href="#">{{item.title}}</a>
            </h2>
          </div>
          <div class="posts-default-content">
            <div
              class="posts-text"
               @click="selectItem(item.id)"
            >{{item.excerpt}}</div>
            <div class="posts-default-info">
              <ul>
                <li class="post-author hidden-sm-only hidden-xs-only">
                  <div class="avatar">
                    <img
                      alt
                      :src="_imgPath(item.thumbnail)"
                      class="avatar avatar-96 photo"
                      height="96"
                      width="96"
                      style="display: block;"
                    >
                  </div>
                  <a href="#" target="_blank">{{item.author}}</a>
                </li>
                <li class="ico-cat">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-category"></use>
                  </svg>
                  <a href="#">{{item.blogCategoryVo.categoryName}}</a>
                </li>
                <li class="ico-time">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-time"></use>
                  </svg>
                  {{item.postTime}}
                </li>
                <li class="ico-eye hidden-sm-only hidden-xs-only">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-eye"></use>
                  </svg>
                  {{item.browseCount}}
                </li>
                <li class="ico-like hidden-sm-only hidden-xs-only">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-like"></use>
                  </svg>
                  {{item.pollCount}}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MList',
  computed: {
    ...mapGetters([
      'news'
    ])
  },
  methods: {
    selectItem (item) {
      this.$emit('select', item)
    },
    _imgPath (img) {
      return `imgPath/${img}`
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~assets/stylus/mixin"
  @import "~assets/stylus/variable"
  .c_left
    .posts-con
      .posts-default
        visibility: visible
        animation-name: fadeInUp
      .content-box
        .posts-default-box
          .posts-default-title
            h2
              position: relative
              font-size: 20px
              font-weight: 600
              a
                color: #48494d
                cursor: pointer
          .posts-default-content
            .posts-text
              font-size: 14px
              line-height: 1.6
              margin-bottom: 20px
              color: #566573
              cursor: pointer
            .posts-default-info
              ul
                li.post-author
                  padding-left: 30px
                  .avatar
                    position: absolute
                    top: -2px
                    left: 0
                    width: 25px
                    img
                      border: 1px solid #e5e5e5
                      border-radius: 50%
                      padding: 1px
                      width: 25px
                      height: 25px
</style>
