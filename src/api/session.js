import axios from './config'

// 注册
export let register=(userInfo)=>axios.post('/api/reg',userInfo)

// 登录
export let login=(userInfo)=>axios.post('/api/login',userInfo)
