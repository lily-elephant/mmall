import axios from 'axios'
import qs from 'qs'
// import {Modal} from 'antd'

const baseUrl = ''
//axios.create()根据指定配置创建一个新的axios，也就是每个新axios都有自己的配置
//设计该语法原因？
//需求：项目中有部分接口需要的配置和另一部分接口需要的配置不太一样，如何处理？
//解决：创建2个新的axios，每个都有自己的配置，分别用到不同的接口中去
const request = axios.create({
  timeout: 30000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true
})
//拦截器
request.interceptors.request.use(config => {
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

request.interceptors.response.use(data => {
    return data;
  },
  err => {
    return Promise.reject(err.response);
  }
);

function checkStatus(response) {
  // console.log(response, 'checkStatus')
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    if (response.data.status === 10) {
      alert("登录超时，请重新登录！")
      // Modal.error({
      //   title: "登录超时，请重新登录！"
      // });
      // return false;
    }
    return response;
  }
  // 500等情况
  alert("网络异常!")
  // Modal.error({
  //   title: "网络异常!"
  // });
  return {
    status: 404,
    msg: '网络异常!'
  }
}

function checkCode(response) {
  console.log(response, 'response')
  if (response.status === 404) {
    alert('404'+response.statusText)
    // Modal.error({
    //   title: '404'+response.statusText
    // });
  }
  // if (response.data && response.data.code !== 200) {
  //   Modal.error({
  //     title: response.data.message
  //   });
  // }
  return response
}

export function post(url, data) {
  return request({
    method: 'post',
    data: qs.stringify(data),
    timeout: 30000,
    url: baseUrl + url
  }).then(res => {
    return checkStatus(res)
  }).catch(res => {
    return checkCode(res)
  })
}

export function get(url, params) {
  return request({
    method: 'get',
    url: baseUrl + url,
    params
  }).then(res => {
    return checkStatus(res)
  }).catch(res => {
    return checkCode(res)
  })
}
//自定义请求类型
export function http(type, url, data) {
  return request({
    method: type,
    url: baseUrl + url,
    data
  }).then(res => {
    return checkStatus(res)
  }).catch(res => {
    return checkCode(res)
  })
}