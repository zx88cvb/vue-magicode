import * as types from './mutation-types'

const mutations = {
  [types.SET_NEWS] (state, news) {
    try {
      localStorage.setItem(types.SET_NEWS, JSON.stringify(news))
      state.news = news
    } catch (e) {
      console.log(e)
    }
  },
  [types.SET_SINGLE_NEW] (state, singleNew) {
    try {
      localStorage.setItem(types.SET_SINGLE_NEW, JSON.stringify(singleNew))
      state.singleNew = Object.assign({}, singleNew)
      state.newId = singleNew.id
    } catch (e) {
      console.log(e)
    }
  },
  [types.SET_RAND_NEWS] (state, randNews) {
    try {
      localStorage.setItem(types.SET_RAND_NEWS, JSON.stringify(randNews))
      state.randNews = randNews
    } catch (e) {
      console.log(e)
    }
  },
  [types.SET_COMMENT_LIST] (state, commentList) {
    try {
      localStorage.setItem(types.SET_COMMENT_LIST, JSON.stringify(commentList))
      state.commentList = commentList
    } catch (e) {
      console.log(e)
    }
  },
  [types.SET_TAG_LIST] (state, tagList) {
    try {
      localStorage.setItem(types.SET_TAG_LIST, JSON.stringify(tagList))
      state.tagList = tagList
    } catch (e) {
      console.log(e)
    }
  },
  [types.SET_ARTICLE_LIKE] (state) {
    try {
      state.singleNew.pollCount = state.singleNew.pollCount + 1
    } catch (e) {
      console.log(e)
    }
  },
  [types.SET_ARTICLE_COMMENT_COUNT] (state, commentNews) {
    try {
      localStorage.setItem(types.SET_ARTICLE_COMMENT_COUNT, JSON.stringify(commentNews))
      state.commentNews = commentNews
    } catch (e) {
      console.log(e)
    }
  }
}

export default mutations
