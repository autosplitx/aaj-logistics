import axios from "axios";
import NProgress from "nprogress";

const Api = axios.create({
  baseURL: "https://www.aajexpress.org/web/public/api",
  // baseURL: "http://localhost/web_app/public/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

Api.interceptors.request.use(
  (config) => {
    NProgress.start();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

Api.interceptors.response.use(
  (response) => {
    NProgress.done();
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Api;
