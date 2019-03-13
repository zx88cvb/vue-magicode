import * as types from './mutation-types'

export const news = function ({commit, state}, {list, index}) {
  commit(types.SET_NEWS, list)
}
