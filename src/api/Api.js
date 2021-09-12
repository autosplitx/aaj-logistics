import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost/web_app/public/api",
  // baseURL: "http://127.0.0.1:8000/api",
  // baseURL: "http://localhost/api-jwt",
});

// Api.defaults.withCredentials = true;

export default Api;
