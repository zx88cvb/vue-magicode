<template>
  <span>
    <div class="posts-con">
      <div class="content ajax-load-con posts-default wow" v-for="(item) of news.records" :key="item.id">
        <div class="content-box">
          <div class="posts-default-img">
            <router-link :to="`/news/${item.id}`"
              tag="a">
              <div class="overlay"></div>
              <img
                v-lazy="$imgPath(item.thumbnail)"
                height="300"
              >
            </router-link>
          </div>
          <div class="posts-default-box">
            <div class="posts-default-title" @click="selectItem(item.id)">
              <h2>
                <span>{{item.title}}</span>
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
                        v-lazy="$imgPath(item.thumbnail)"
                        class="avatar avatar-96 photo"
                        height="96"
                        width="96"
                        style="display: block;"
                      >
                    </div>
                    <span target="_blank">{{item.author}}</span>
                  </li>
                  <li class="ico-cat">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-category"></use>
                    </svg>
                    <span href="#">{{item.blogCategoryVo.categoryName}}</span>
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
    <div class="clearfix"></div>
    <div id="ajax-load-posts" v-if="isPageRecent">
      <button class="button button-more" @click="handleMoreClick(news.current)">加载更多</button>
    </div>
  </span>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MList',
  computed: {
    ...mapGetters([
      'news',
      'isPageRecent'
    ])
  },
  methods: {
    selectItem (item) {
      this.$emit('select', item)
    },
    // 加载更多
    handleMoreClick (current) {
      this.$emit('handleMoreClick', current)
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
              span
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
