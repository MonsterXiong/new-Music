import axios from 'axios'

const BaseURL = 'http://localhost:3000'
const http = axios.create({
  baseURL: BaseURL, //所有异步请求都加上、api，nginx转发到后端
  withCredentials: true,
  crossDomain: true,
  timeout: 5000 //request timeout
})

// 请求拦截
http.interceptors.request.use(
  (resquest) => {
    return resquest
  },
  (error) => {}
)
// 响应拦截
http.interceptors.response.use((response) => {
  //   console.log('响应', response)
  return new Promise((resolve, reject) => {
    const { status, data } = response
    if (status === 200) {
      resolve(data)
    } else {
      console.log('出错了')
      reject(data)
    }
  })
})

export default http
