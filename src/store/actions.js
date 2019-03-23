import * as types from './mutation-types'

export const news = function ({commit}, {records}) {
  commit(types.SET_NEWS, records)
}

export const singleNew = function ({commit}, {data}) {
  commit(types.SET_SINGLE_NEW, data)
}
