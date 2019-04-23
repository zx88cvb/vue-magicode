import * as types from './mutation-types'

export const news = (state) => {
  if (!state.news.length) {
    return JSON.parse(localStorage.getItem(types.SET_NEWS)) ? JSON.parse(localStorage.getItem(types.SET_NEWS)) : {}
  }
  return state.news
}

export const getSingleNew = (state) => {
  if (!state.singleNew) {
    return JSON.parse(localStorage.getItem(types.SET_SINGLE_NEW)) ? JSON.parse(localStorage.getItem(types.SET_SINGLE_NEW)) : {}
  }
  return state.singleNew
}

export const randNews = (state) => {
  if (!state.randNews.length) {
    return JSON.parse(localStorage.getItem(types.SET_RAND_NEWS)) ? JSON.parse(localStorage.getItem(types.SET_RAND_NEWS)) : {}
  }
  return state.randNews
}

export const commentList = (state) => {
  if (!state.commentList.length) {
    return JSON.parse(localStorage.getItem(types.SET_COMMENT_LIST)) ? JSON.parse(localStorage.getItem(types.SET_COMMENT_LIST)) : {}
  }
  return state.commentList
}

export const tagList = (state) => {
  if (!state.tagList.length) {
    return JSON.parse(localStorage.getItem(types.SET_TAG_LIST)) ? JSON.parse(localStorage.getItem(types.SET_TAG_LIST)) : {}
  }
  return state.tagList
}

export const commentNews = (state) => {
  if (!state.commentNews.length) {
    return JSON.parse(localStorage.getItem(types.SET_ARTICLE_COMMENT_COUNT)) ? JSON.parse(localStorage.getItem(types.SET_ARTICLE_COMMENT_COUNT)) : {}
  }
  return state.commentNews
}

export const getNewId = (state) => {
  return state.newId
}
