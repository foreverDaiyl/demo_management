import axios from './config'

// 用户列表
export const getUsers=()=>axios.get('/api/getUserList')