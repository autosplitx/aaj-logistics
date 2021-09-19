import Api from "./Api";

const END_POINT = "v1/transaction.php";

export default {
  all(customerId) {
    return Api.get(`${END_POINT}?customer_id=${customerId}`);
  },

  show(waybillNo) {
    return Api.get(`${END_POINT}?waybill_no=${waybillNo}`);
  },

  update(data) {
    return Api.put(`${END_POINT}/${data.id}`, data);
  },

  transact(data) {
    return Api.post(END_POINT, data);
  },
};
