import * as types from './mutation-types'
import { ERR_OK } from 'common/js/config'
import { getBlogArticleById } from 'api/blog/article'

// 文章分页查询
export const news = function ({commit}, {records}) {
  commit(types.SET_NEWS, records)
}

// 文章详情
export const singleNew = function ({commit}, id) {
  getBlogArticleById(id).then((res) => {
    if (res.code === ERR_OK) {
      // 将列表数据放入 vuex actions中
      commit(types.SET_SINGLE_NEW, res.data)
    }
  })
}

// 查询随机文章 commit
export const saveRandNews = function ({commit}, {data}) {
  // getRand().then((res) => {
  //   if (res.code === ERR_OK) {
  //     // 将列表数据放入 vuex actions中
  //     commit(types.SET_RAND_NEWS, data)
  //   }
  // })
  commit(types.SET_RAND_NEWS, data)
}
