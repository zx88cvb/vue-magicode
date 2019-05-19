import * as types from './mutation-types'

// 文章列表
export const news = (state) => state.news

// 单个文章
export const getSingleNew = (state) => {
  if (!state.singleNew) {
    return JSON.parse(localStorage.getItem(types.SET_SINGLE_NEW)) ? JSON.parse(localStorage.getItem(types.SET_SINGLE_NEW)) : {}
  }
  return state.singleNew
}

// 随机文章
export const randNews = (state) => {
  if (!state.randNews.length) {
    return JSON.parse(localStorage.getItem(types.SET_RAND_NEWS)) ? JSON.parse(localStorage.getItem(types.SET_RAND_NEWS)) : {}
  }
  return state.randNews
}

// 评论
export const commentList = (state) => {
  if (!state.commentList.length) {
    return JSON.parse(localStorage.getItem(types.SET_COMMENT_LIST)) ? JSON.parse(localStorage.getItem(types.SET_COMMENT_LIST)) : {}
  }
  return state.commentList
}

// 标签云
export const tagList = (state) => {
  if (!state.tagList.length) {
    return JSON.parse(localStorage.getItem(types.SET_TAG_LIST)) ? JSON.parse(localStorage.getItem(types.SET_TAG_LIST)) : {}
  }
  return state.tagList
}

// 评论个数文章
export const commentNews = (state) => {
  if (!state.commentNews.length) {
    return JSON.parse(localStorage.getItem(types.SET_ARTICLE_COMMENT_COUNT)) ? JSON.parse(localStorage.getItem(types.SET_ARTICLE_COMMENT_COUNT)) : {}
  }
  return state.commentNews
}

export const getNewId = (state) => {
  return state.newId
}

// 是否显示加载更多
export const isPageRecent = (state) => {
  return !(state.news.current >= state.news.pages)
}

// 评论个数文章
export const menuName = (state) => {
  if (!state.menuName) {
    return JSON.parse(localStorage.getItem(types.SET_MENU_NAME)) ? JSON.parse(localStorage.getItem(types.SET_MENU_NAME)) : {}
  }
  return state.menuName
}
