import axios from "axios";

const Api = axios.create({
  baseURL: "https://www.aajexpress.org/web/public/api",
});

// Api.withCredentials = true;

export default Api;
