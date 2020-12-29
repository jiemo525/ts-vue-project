/**
 * @description 请求
 */
import axios from "axios";

axios.defaults.headers = {
  "Content-Type": "application/json;charset=utf8"
};

axios.defaults.baseURL = "";

axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * GET请求方法
 * @param {String} url 请求地址
 */
export function getData(url: string) {
  return axios.get(url)
    .then(res => res.data)
    .catch(error => error.response);
}
/**
 * GET请求方法
 * @param {String} url 请求地址
 * @param {Object} data 请求参数
 */
export function postData(url: string, data?: object) {
  return axios.post(url, data)
    .then(res => res.data)
    .catch(error => error.response);
}