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
  }
}

export default mutations
