import User from "../../../api/Auth";
import router from "../../../router";

export const getUsers = ({ commit }) => {
  User.all()
    .then((response) => {
      commit("SET_USERS", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUser = ({ commit }, uId) => {
  User.show(uId)
    .then((response) => {
      commit("SET_USER", response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

/* ------------------------------------------------------------------------------------------------------------------ */
/*          //TODO: Action is used to create GUEST from application & can later be assigned ROLE by the ADMIN         */
/* ------------------------------------------------------------------------------------------------------------------ */
export const loginUser = ({ commit, dispatch }, formData) => {
  // this.$Progress.start();
  User.login(formData)
    .then((response) => {
      commit("SET_AUTHENTICATED", true);
      commit("SET_AUTH_USER", response.data.data);
      // this.$Progress.finish();
      router.push({ name: "user.dashboard" });
      dispatch(
        "addNotification",
        { type: "success", message: "Welcome to AAJExpress 😊", count: 0 },
        { root: true }
      );
    })
    .catch((error) => {
      if (error.response.status == 404) {
        commit("SET_AUTHENTICATED", false);
        commit("SET_AUTH_USER", null);
        // commit("SET_USER_ERROR", error.response.data.errors);
        // this.$Progress.fail();
        dispatch(
          "addNotification",
          { type: "danger", message: "Login Unsuccessful 😞", count: 0 },
          { root: true }
        );
      }
    });
};

export const logoutUser = ({ commit }) => {
  User.logout()
    .then(() => {
      commit("SET_AUTHENTICATED", false);
      commit("SET_AUTH_USER", null);
      commit("SET_USER_ERROR", []);
      router.push({ name: "Home" });
    })
    .catch((error) => {
      if (error.response.status === 419 || error.response.status == 422) {
        commit("SET_AUTHENTICATED", false);
        commit("SET_AUTH_USER", null);
        router.push({ name: "Login" });
      }
    });
};

export const addUser = ({ commit, dispatch }, formData) => {
  User.register(formData)
    .then((response) => {
      commit("SET_USER_ERROR", []);
      router.push({ name: "Home" });
      dispatch(
        "addNotification",
        { type: "success", message: `${response.data.data} 😊`, count: 0 },
        { root: true }
      );
    })
    .catch((error) => {
      if (error.response.status == 422) {
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

export const updateUser = ({ commit, dispatch }, data) => {
  User.update(data)
    .then(() => {
      commit("SET_USER_ERROR", []);
      dispatch(
        "addNotification",
        { type: "success", message: "User updated successfully 😊", count: 0 },
        { root: true }
      );
      User.all().then((response) => {
        commit("SET_USERS", response.data);
      });
    })
    .catch((error) => {
      if (error.response.status == 422) {
        commit("SET_USER_ERROR", error.response.data.errors);
      }
      if (error.response.status === 419) {
        commit("SET_AUTHENTICATED", false);
        commit("SET_AUTH_USER", null);
        router.push({ name: "Login" });
      }
    });
};

export const deleteUser = ({ commit, dispatch }, uId) => {
  User.delete(uId).then(() => {
    dispatch(
      "addNotification",
      { type: "danger", message: "User deleted successfully 😞", count: 0 },
      { root: true }
    );
    User.all().then((response) => {
      commit("SET_USERS", response.data);
    });
  });
};

export const getPagination = ({ commit }, page) => {
  if (typeof page === "undefined") {
    page = 1;
  }
  User.pagination(page).then((response) => {
    commit("SET_PAGINATION", response.data);
  });
};

export const searchAdminUser = ({ commit }, query) => {
  let params = {
    query,
  };
  User.userSearch(params).then((response) => {
    commit("SET_USERS", response.data);
  });
};
