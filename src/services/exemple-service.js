import axios from 'axios'

export default class AlbumService {
  getExample(param) {
    const request = axios.get(`${process.env.VUE_APP_BASE_PATH}=${param}`)
      .then(response => response)
      .catch(e => {
        throw e
      }).finally(() => {

      })
    return request
  }

  postExample(param) {
    const request = axios.post(`${process.env.VUE_APP_BASE_PATH}`, param)
      .then(response => response)
      .catch(e => {
        throw e
      }).finally(() => {

      })
    return request
  }
}