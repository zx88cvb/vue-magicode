import * as types from './mutation-types'

export const news = (state) => {
  if (!state.news) {
    return JSON.parse(localStorage.getItem(types.SET_NEWS)) ? JSON.parse(localStorage.getItem(types.SET_NEWS)) : {}
  }
  return state.news
}

export const singleNew = (state) => {
  if (!state.singleNew) {
    return JSON.parse(localStorage.getItem(types.SET_SINGLE_NEW)) ? JSON.parse(localStorage.getItem(types.SET_SINGLE_NEW)) : {}
  }
  return state.singleNew
}

export const randNews = (state) => {
  if (!state.randNews) {
    return JSON.parse(localStorage.getItem(types.SET_RAND_NEWS)) ? JSON.parse(localStorage.getItem(types.SET_RAND_NEWS)) : {}
  }
  return state.randNews
}