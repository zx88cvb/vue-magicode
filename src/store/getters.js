import * as types from './mutation-types'

export const news = (state) => {
  if (!state.news) {
    state.news = JSON.parse(localStorage.getItem(types.SET_NEWS)) ? JSON.parse(localStorage.getItem(types.SET_NEWS)) : {}
  }
  return state.news
}

export const singleNew = (state) => {
  if (!state.singleNew) {
    state.singleNew = JSON.parse(localStorage.getItem(types.SET_SINGLE_NEW)) ? JSON.parse(localStorage.getItem(types.SET_SINGLE_NEW)) : {}
  }
  return state.singleNew
}

export const randNews = (state) => {
  if (!state.randNews) {
    state.randNews = JSON.parse(localStorage.getItem(types.SET_RAND_NEWS)) ? JSON.parse(localStorage.getItem(types.SET_RAND_NEWS)) : {}
  }
  return state.randNews
}
