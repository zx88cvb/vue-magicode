import * as types from './mutation-types'
import { ERR_OK } from 'common/js/config'
import {
  getBlogArticlePage,
  getBlogArticleById,
  selectNewsComment,
  selectNewsRandThreeComment
} from 'api/blog/article'
import { recent } from 'api/blog/comment'
import { getTagAll } from 'api/blog/tag'

// 文章分页查询
export const news = function ({commit}, params) {
  getBlogArticlePage(params).then((res) => {
    if (res.code === ERR_OK) {
      if (params.isMore) {
        commit(types.SET_NEWS_MORE, res.data)
      } else {
        // 将列表数据放入 vuex actions中
        commit(types.SET_NEWS, res.data)
      }
    }
  })
}

// 文章详情
export const singleNew = function ({commit}, id) {
  getBlogArticleById(id).then((res) => {
    if (res.code === ERR_OK) {
      // 将列表数据放入 vuex actions中
      commit(types.SET_SINGLE_NEW, res.data)
    }
  })
}

// 查询随机文章 commit
export const saveRandNews = function ({commit}, {data}) {
  // getRand().then((res) => {
  //   if (res.code === ERR_OK) {
  //     // 将列表数据放入 vuex actions中
  //     commit(types.SET_RAND_NEWS, data)
  //   }
  // })
  commit(types.SET_RAND_NEWS, data)
}

// 获取留言数据
export const getComment = function ({commit}, form) {
  recent(form).then((res) => {
    if (res.code === ERR_OK) {
      // 将列表数据放入 vuex actions中
      commit(types.SET_COMMENT_LIST, res.data)
    }
  })
}

// 获取标签云
export const setTagList = function ({commit}) {
  getTagAll().then((res) => {
    if (res.code === ERR_OK) {
      // 将列表数据放入 vuex actions中
      commit(types.SET_TAG_LIST, res.data)
    }
  })
}

// 点击喜欢
export const setArticleLike = function ({commit}) {
  commit(types.SET_ARTICLE_LIKE)
}

// 根据评论个数获取新闻
export const setArticleComment = function ({commit}) {
  selectNewsComment().then((res) => {
    if (res.code === ERR_OK) {
      // 将列表数据放入 vuex actions中
      commit(types.SET_ARTICLE_COMMENT_COUNT, res.data)
    }
  })
}

// 根据评论个数获取新闻和随机文章 标签云(组合)
export const setArticleRandComment = function ({commit}) {
  selectNewsRandThreeComment().then((res) => {
    if (res.code === ERR_OK) {
      // 将列表数据放入 vuex actions中
      commit(types.SET_RAND_NEWS, res.data.randNews)
      commit(types.SET_ARTICLE_COMMENT_COUNT, res.data.commentNews)
      commit(types.SET_TAG_LIST, res.data.tagList)
    }
  })
}
