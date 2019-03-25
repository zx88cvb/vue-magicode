import * as types from './mutation-types'

const mutations = {
  [types.SET_NEWS] (state, news) {
    state.news = news
    try {
      localStorage.setItem(types.SET_NEWS, JSON.stringify(news))
    } catch (e) {
      console.log(e)
    }
  },
  [types.SET_SINGLE_NEW] (state, singleNew) {
    state.singleNew = singleNew
    try {
      localStorage.setItem(types.SET_SINGLE_NEW, JSON.stringify(singleNew))
    } catch (e) {
      console.log(e)
    }
  },
  [types.SET_RAND_NEWS] (state, randNews) {
    state.randNews = randNews
    try {
      localStorage.setItem(types.SET_RAND_NEWS, JSON.stringify(randNews))
    } catch (e) {
      console.log(e)
    }
  }
}

export default mutations
