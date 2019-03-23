import axios from 'axios'

/* 分页条件查询 */
export function getBlogArticlePage (pageNum, pageSize) {
  const url = '/blogapi/blog/article/recent'

  const data = {
    pageNum,
    pageSize
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch(function (response) {
    console.log(response)
  })
}

/* 根据id查询 */
export function getBlogArticleById (id) {
  const url = `/blogapi/blog/article/${id}`

  const data = {
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch(function (response) {
    console.log(response)
  })
}
