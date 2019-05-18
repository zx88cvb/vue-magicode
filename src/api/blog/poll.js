import axios from 'axios'
import qs from 'qs'

// 新增喜欢
export function addPoll (form) {
  const url = `/api/blogapi/blog/poll/add`

  const data = qs.stringify(form)
  return axios.post(url, data).then((res) => {
    return Promise.resolve(res.data)
  }).catch(function (response) {
    console.log(response)
  })
}
