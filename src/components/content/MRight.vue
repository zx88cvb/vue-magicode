<template>
    <div class="sidebar">
      <div class="widget widget_postlist">
        <h3>
          <span>
            随机文章
          </span>
        </h3>
        <ul class="recent-posts-widget">
          <li v-for="(item, index) of randNews"
            :key="item.id"
            :class="[ index === 0 ? 'one' : 'others']"
            >
            <router-link :to="{name: 'detail', params: { id: item.id}}"
             tag="a"
             v-if="index === 0">
              <div class="overlay"></div>
              <img class="lazy thumbnail"
                width="300"
                height="170"
               v-lazy="$imgPath(item.thumbnail)"
               :alt="item.title"
                style="display: block;">
              <div class="title">
                <span>{{item.postTime}}</span>
                <h4>{{item.title}}</h4>
              </div>
            </router-link>

            <span v-else>
              <div class="image">
                <router-link :to="{name: 'detail', params: { id: item.id}}" tag="a">
                  <img class="lazy thumbnail"
                  height="75"
                  width="100"
                  v-lazy="$imgPath(item.thumbnail)"
                  alt="item.title"
                  style="display: block;">
                </router-link>
              </div>
              <div class="title">
                <router-link :to="`/news/${item.id}`" tag="h4">
                  <a href="#">{{item.title}}</a>
                </router-link>
                <span>{{item.postTime}}</span>
              </div>
            </span>
          </li>
        </ul>
      </div>
      <div class="widget widget_hotpost">
        <h3>
          <span>热评文章</span>
        </h3>
        <ul>
          <li class="item" v-for="item of commentNews" :key="item.id">
            <router-link :to="{name: 'detail', params: { id: item.id}}" tag="a">
              <div class="overlay"></div>
              <img class="lazy thumbnail"
                v-lazy="$imgPath(item.thumbnail)"
                :alt="item.title"
                width="300"
                height="170"
                style="display: block;">
              <div class="title">
                <div class="entry-meta">
                  <span>{{item.postTime}}</span>
                  <span>
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-weibiaoti103"></use>
                    </svg>
                    {{item.commentCount}}
                  </span>
                </div>
                <h4>{{item.title}}</h4>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="widget widget_tag">
        <h3>
          <span>热门标签</span>
        </h3>
        <div class="tags">
          <div class="tag_items">
            <router-link :to="`/tag/${item.id}`" v-for="item of tagList" :key="item.id" tag="span">
              {{item.tagName}}
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'MRight',
  computed: {
    ...mapGetters([
      'randNews',
      'tagList',
      'commentNews'
    ])
  }
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
        li.one,.item
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
              .entry-meta
                margin-bottom: 5px
                span
                  display: inline
                  margin-right: 10px
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
      .tag_items
        span
          display: inline-block
          font-size: 12px
          line-height: 1
          padding: 6px 12px 4px 12px
          margin: 0 8px 8px 0
          cursor: pointer
          border: 1px solid #e0e0e0
          border-radius: 2px
          color: rgba(0, 0, 0, .44)
          background-color: rgba(255, 255, 255, .97)
</style>
