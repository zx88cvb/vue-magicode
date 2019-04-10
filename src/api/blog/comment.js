import axios from 'axios'
import qs from 'qs'

// 新增评论
export function insertBlogComment (form) {
  const url = `/blogapi/blog/comment/add`

  const data = qs.stringify(form)
  return axios.post(url, data).then((res) => {
    return Promise.resolve(res.data)
  }).catch(function (response) {
    console.log(response)
  })
}

// 评论分页查询
export function recent (articleId, pageNum, pageSize) {
  const url = `/blogapi/blog/comment/recent`

  const data = {
    articleId,
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
