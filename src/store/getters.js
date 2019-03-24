import * as types from './mutation-types'

export const news = (state) => {
  if (!state.news) {
    state.news = JSON.parse(localStorage.getItem(types.SET_NEWS)) ? JSON.parse(localStorage.getItem(types.SET_NEWS)) : {}
  }
  return state.news
}

export const singleNew = (state) => {
  return state.singleNew
}
