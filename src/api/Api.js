import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost/api-jwt",
});

Api.defaults.withCredentials = true;

export default Api;
