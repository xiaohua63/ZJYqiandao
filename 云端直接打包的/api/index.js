/**
 * www.52pojie.cn  
 * by：Burial0
 */
const request = require('../utils/request')
const querystring = require('querystring')
const axios = require('axios')

const getAppVersion = () => axios.get('https://zjy2.icve.com.cn/portal/AppVersion/getLatestVersionInfo')
const login = data => request.post('MobileLogin/newSignIn', querystring.stringify(data))
const getStuFaceTeachList = data => request.post('Faceteach/getStuFaceTeachList', querystring.stringify(data))
const getStuFaceActivityList = data => request.post('faceteach/newGetStuFaceActivityList', querystring.stringify(data))
const isJoinActivities = data => request.post('faceteach/isJoinActivities', querystring.stringify(data))
const saveStuSign = data => request.post('FaceTeach/saveStuSignNew', querystring.stringify(data))

module.exports = {
  login,
  getAppVersion,
  getStuFaceTeachList,
  getStuFaceActivityList,
  isJoinActivities,
  saveStuSign
}