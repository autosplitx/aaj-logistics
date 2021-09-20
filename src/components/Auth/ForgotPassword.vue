<template>
  <div class="logo">
    <div class="container">
      <router-link :to="{ name: 'Home' }">
        <img src="/img/aaj/logo.png" alt="AAJ Logistics" />
      </router-link>
    </div>
  </div>
  <div class="container">
    <div class="request-wrap">
      <div class="requests">
        <h2>Reactivate your account...</h2>
        <form>
          <div class="user-box">
            <input
              type="email"
              v-model.lazy="v$.form.email.$model"
              required="required"
              :class="{ 'error-msg': v$.form.email.$error }"
            />
            <label>Email</label>
          </div>
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.email.$errors"
            :key="index"
          >
            <div class="error-msg-text">{{ error.$message }}</div>
          </div>

          <button type="submit" @click="reactivateAccount">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  name: "ForgotPassword",

  data() {
    return {
      v$: useVuelidate(),

      form: {
        email: "",
      },
      submitted: false,
    };
  },

  methods: {
    reactivateAccount() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Form successfully submitted.");
        console.log(this.form);
      } else {
        // alert("Please fill out all the required field..!");
      }
    },
  },

  validations() {
    return {
      form: {
        email: { required, email },
      },
    };
  },
};
</script>

<style scoped>
.logo {
  background: var(--aaj-primary-h10);
  padding: 0.5rem;
}
.logo img {
  display: inline-block;
  width: 80px;
}
.request-wrap {
  width: 100%;
  padding: 0 0.5rem;
  border-radius: 10px;
}

.request-wrap h2 {
  margin: 3rem 0 0.8rem;
  color: var(--aaj-primary-h);
  font-size: 1rem;
  font-weight: 600;
}
.request-wrap p {
  color: var(--aaj-gray-dark);
  font-size: 0.8rem;
  margin: 0 0 1.5rem;
}

.request-wrap .user-box {
  position: relative;
}
.request-wrap .user-box input {
  width: 100%;
  padding: 0.5rem 0;
  font-size: 1rem;
  color: var(--aaj-gray-dark);
  margin-bottom: 1.5rem;
  border: none;
  border-bottom: 1px solid var(--aaj-blue-h1);
  outline: none;
  background: transparent;
}
.request-wrap .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem 0;
  font-size: 1rem;
  color: var(--aaj-gray-dark);
  pointer-events: none;
  transition: 0.5s;
}

.request-wrap .user-box input[type="text"]:focus ~ label,
.request-wrap .user-box input[type="number"]:focus ~ label,
.request-wrap .user-box input[type="text"]:valid ~ label,
.request-wrap .user-box input[type="number"]:valid ~ label {
  top: -15px;
  left: 0;
  color: var(--aaj-yellow-green-h);
  font-size: 0.8rem;
}

.request-wrap form button {
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 0.7rem 1.5rem;
  color: #fff;
  background: var(--aaj-primary-h);
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 1rem;
  letter-spacing: 2px;
}

.request-wrap button:hover {
  color: var(--aaj-gray-light);
  border-radius: 30px;
  box-shadow: 0 0 5px var(--aaj-gray-light), 0 0 25px var(--aaj-gray-light),
    0 0 30px var(--aaj-gray-light), 0 0 80px var(--aaj-gray-light);
}

.request-wrap form button:disabled {
  opacity: 0.5;
}

.forgot-password {
  display: block;
  text-align: center;
  margin-top: 1.5rem;
  color: var(--aaj-primary-h10);
}

.forgot-password:hover {
  text-decoration: underline;
  color: var(--aaj-primary-h);
}

.error-msg {
  border-color: #dc3545 !important;
}
.error-msg-text {
  color: #dc3545;
  font-size: 0.7rem;
}

.input-errors {
  margin-top: -20px;
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .request-wrap {
    display: block;
    width: 80%;
    margin: 3rem auto;
    padding: 1rem;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .request-wrap h2 {
    margin: 0 0 1rem;
    font-size: 1.2rem;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}

@media (min-width: 1025px) {
  .request-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 50%;
    margin: 3rem auto;
  }

  .request-wrap h2 {
    margin: 0 0 1rem;
    font-size: 1.2rem;
  }
  .request-wrap p {
    font-size: 0.9rem;
    margin: 0 0 1.5rem;
  }
}
</style>
