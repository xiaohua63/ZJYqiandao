/**
 * www.52pojie.cn  
 * by：Burial0
 */
const axios = require('axios');
const querystring = require('querystring')
const md5 = require('md5-node')

let appVersion;

const request = axios.create({
  baseURL: 'https://zjyapp.icve.com.cn/newMobileAPI',
  headers: {
    'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
    'host': 'zjyapp.icve.com.cn',
  }
});

request.interceptors.request.use(config => {
  config.headers.emit = getTime()
  appVersion = querystring.parse(config.data).appVersion
  config.headers.device = getDevice()
  return config;
}, error => {
  return Promise.reject(error);
});

request.interceptors.response.use(response => {
  return response.data;
}, error => {
  return Promise.reject(error);
});

const getTime = () => Date.parse(new Date()).toString().substr(0, 10) + '000';

function getDevice () {
  let device = md5('iPhone 13 pro');
  device = md5(device + '15.0')
  device = md5(device + appVersion)
  device = md5(device + getTime())
  return device
}

module.exports = request