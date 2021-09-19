import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost/web_app/public/api",
});

Api.withCredentials = true;

export default Api;
