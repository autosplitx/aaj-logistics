import Wallet from "../../../api/Wallet";
import router from "../../../router";

export const getWallet = ({ commit }, cId) => {
  Wallet.show(cId)
    .then((response) => {
      commit("SET_WALLETS", response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const topUp = ({ commit, dispatch }, formData) => {
  Wallet.store(formData)
    .then((response) => {
      commit("SET_WALLET", response.data);
      router.push({ name: "user.wallet" });
      console.log(response.data);
      dispatch(
        "addNotification",
        { type: "success", message: `${response.data.data} 😊`, count: 0 },
        { root: true }
      );
    })
    .catch((error) => {
      console.log(error);
      if (
        error.response.status == 401 ||
        error.response.status == 422 ||
        error.response.status == 404
      ) {
        dispatch(
          "addNotification",
          {
            type: "danger",
            message: `${error.response.data.errors} 😞`,
            count: 0,
          },
          { root: true }
        );
      }
    });
};
