import { axios } from '@/utils/request'

/**
 * 获取验证码接口
 * @param {*} sid 唯一标识
 * 暂不使用
 */
const getCode = (sid) => {
  // axios.request({
  //  method: 'get',
  //  url: '/getCaptcha'
  // })
  return axios.get('/public/getCaptcha', {
    sid: sid
  })
}

/**
 * 找回密码接口
 * @param {} option 用户信息（邮箱，验证码）
 */
const forget = (option) => {
  return axios.post('/login/forget', {
    ...option
  })
}

/**
 * 登录接口
 * @param {*} loginInfo 用户登录信息
 */
const login = (loginInfo) => {
  return axios.post('/login/login', {
    ...loginInfo
  })
}

/**
 * 注册接口
 * @param {*} regInfo 用户注册信息
 */
const reg = (regInfo) => {
  return axios.post('/login/reg', {
    ...regInfo
  })
}

/**
 * 重置密码接口
 * @param {*} info 重置密码信息
 */
const reset = (info) => axios.post('/login/reset', { ...info })

const wxLogin = (data) => axios.post('/login/wxLogin', data)

const getSubIds = () => axios.get('/public/getSubIds')

const testUpload = (file) => axios.post('/content/upload', file)

export { getCode, forget, login, reg, reset, wxLogin, getSubIds, testUpload }
