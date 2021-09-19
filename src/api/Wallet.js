import Api from "./Api";

const END_POINT = "v1/wallet.php";

export default {
  all(cId) {
    return Api.get(`${END_POINT}?customer_id=${cId}`);
  },

  show(cId) {
    return Api.get(`${END_POINT}?customer_id=${cId}`);
  },

  update(data) {
    return Api.put(`${END_POINT}/${data.id}`, data);
  },

  store(data) {
    return Api.post(END_POINT, data);
  },
};
