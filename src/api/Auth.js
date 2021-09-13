import Api from "./Api";

const END_POINT = "v1/auth";

export default {
  all() {
    return Api.get(END_POINT);
  },

  store(data) {
    return Api.post(END_POINT, data);
  },

  show(uId) {
    return Api.get(`${END_POINT}/${uId}`);
  },

  update(data) {
    return Api.put(`${END_POINT}/${data.id}`, data);
  },

  delete(uId) {
    return Api.delete(`${END_POINT}/${uId}`);
  },

  async register(data) {
    console.log(data);
    return Api.post("process_api.php", data);
  },

  async login(data) {
    return Api.post(`${END_POINT}/login.php`, data);
  },

  async logout() {
    return Api.post(`${END_POINT}/logout.php`);
  },

  // async login(data) {
  //   // return Api.post("/v1/users/login-api.php", data);
  //   // return Api.post("v1/login", data);
  //   return Api.post("login_api.php", data);
  // },

  // async logout(data) {
  //   return Api.post("process_api.php", data);
  // },

  // auth() {
  //   return Api.get("v1/user");
  // },

  pagination(page) {
    return Api.get(`${END_POINT}?page=${page}`);
  },

  userSearch(params) {
    return Api.get("v1/userSearch", { params });
  },
};
