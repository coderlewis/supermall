import axios from "axios";

// export default是默认导出单个，export function可以导出多个
export function request(config) { // instance的返回值是Promise
  const instance = axios.create({ // 创建axios实例
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // axios的拦截器
  // request拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  // response拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 发送真正的网络请求
  return instance(config)
}

