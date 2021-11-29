import axios from 'axios'
import storage from 'store'
// create an axios instance
const service = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: "http://localhost:3001", // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (storage.get('token')) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers.Authorization = `Bearer ${storage.get('token')}`
    }
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    console.log(response.data.head.msg)
    return response.data
  },
  error => {
    console.log(error)
  }
)

export default service
