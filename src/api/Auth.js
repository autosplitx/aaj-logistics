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

  register(data) {
    return Api.post(`${END_POINT}/register.php`, data);
  },

  login(data) {
    return Api.post(`${END_POINT}/login.php`, data);
  },

  logout() {
    return Api.post(`${END_POINT}/logout.php`);
  },

  pagination(page) {
    return Api.get(`${END_POINT}?page=${page}`);
  },

  userSearch(params) {
    return Api.get("v1/userSearch", { params });
  },
};
