import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import storage from "store";

// create an axios instance
const service = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: process.env.BASEURL,
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (storage.get("token")) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers = { Authorization: `Bearer ${storage.get("token")}` };
    }
    return config;
  },
  error => {
    // do something with request error
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  error => {
    return Promise.reject(error.response.data);
  },
);

export default service;
