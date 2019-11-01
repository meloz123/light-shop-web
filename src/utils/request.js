import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

axios.defaults.withCredentials = true

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 15000 // 请求超时时间
})

export default service