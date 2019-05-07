import axios from 'axios'

// 查询广告内容
export function getContentByTypeAndGroup (typeKey, adKey) {
  const url = `/adapi/api/adgroup/${typeKey}/${adKey}/content`

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

// 查询主页广告内容
export function getAdIndex () {
  const url = '/adapi/api/adgroup/index/content'

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

// 查询头部广告内容
export function getAdHead () {
  const url = '/adapi/api/adgroup/header/content'

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

// 查询头部广告内容
export function getAdLink () {
  const url = '/adapi/api/adgroup/link/content'

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
