import axios from 'axios'

/* 分页条件查询 */
export function getBlogArticlePage (params) {
  const url = '/api/blogapi/blog/article/recent'

  const data = params
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
  const url = `/api/blogapi/blog/article/${id}`

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

// 随机查询3篇文章
export function getRand () {
  const url = '/api/blogapi/api/blog/article/rand'

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

// 根据评论数量查询
export function selectNewsComment () {
  const url = '/api/blogapi/api/blog/article/comment/3'

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

// 组合查询评论和随机文章
export function selectNewsRandThreeComment () {
  const url = '/api/blogapi/api/blog/article/three/comment/3'

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
