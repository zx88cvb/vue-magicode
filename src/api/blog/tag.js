import axios from 'axios'

// 查询全部标签
export function getTagAll () {
  const url = '/blogapi/blog/tag/all'

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
