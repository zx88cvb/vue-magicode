import * as types from './mutation-types'

const mutations = {
  [types.SET_NEWS] (state, news) {
    state.news = news
    try {
      localStorage.setItem(types.SET_NEWS, JSON.stringify(news))
    } catch (e) {
      console.log(e)
    }
  }
}

export default mutations
