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
