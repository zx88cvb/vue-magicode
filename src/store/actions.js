import * as types from './mutation-types'
import { ERR_OK } from 'common/js/config'
import { getBlogArticleById } from 'api/blog/article'

export const news = function ({commit}, {records}) {
  commit(types.SET_NEWS, records)
}

export const singleNew = function ({commit}, id) {
  getBlogArticleById(id).then((res) => {
    if (res.code === ERR_OK) {
      // 将列表数据放入 vuex actions中
      commit(types.SET_SINGLE_NEW, res.data)
    }
  })
}
