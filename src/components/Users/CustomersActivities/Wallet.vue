<template>
  <div class="wallet-container">
    <div class="container">
      <div class="balance">
        <div class="wallet-number">
          <h4>Wallet Account</h4>
          <h5>0123456789</h5>
        </div>
        <div class="wallet-balance">
          <h4>Wallet Balance</h4>
          <h5>2,500</h5>
        </div>
      </div>
      <div class="grid grid-3 my-2">
        <div class="">
          <!-- <div class="send">
            <img src="/img/aaj/send1.svg" alt="Send" />
            <h5>Send</h5>
          </div> -->
        </div>
        <div class="card">
          <router-link :to="{ name: 'TopUpWallet' }">
            <div class="top-up">
              <img src="/img/aaj/topup.svg" alt="Top up" />
              <h5>Top Up</h5>
            </div>
          </router-link>
        </div>
        <div class="">
          <!-- <div class="pay">
            <img src="/img/aaj/pay.svg" alt="Pay" />
            <h5>Pay</h5>
          </div> -->
        </div>
      </div>
      <div class="wallet-wrap">
        <div class="wallets">
          <div class="see-all">
            <h3>Last Transactions</h3>
            <a href="#">See all</a>
          </div>
          <div class="card">
            <h6>2021-09-02</h6>
            <div class="accountDetails">
              <h5 class="info">Top up</h5>
              <h5 class="add">+200</h5>
            </div>
            <p>ref-no 010-abc-456</p>
          </div>
          <div class="card">
            <h6>2021-09-06</h6>
            <div class="accountDetails">
              <h5 class="info">Transfer</h5>
              <h5 class="subtract">-250</h5>
            </div>
            <p>ref-no 010-abc-456</p>
          </div>
          <div class="card">
            <h6>2021-09-06</h6>
            <div class="accountDetails">
              <h5 class="info">Transfer</h5>
              <h5 class="subtract">-450</h5>
            </div>
            <p>ref-no 010-abc-456</p>
          </div>
          <div class="card">
            <h6>2021-09-06</h6>
            <div class="accountDetails">
              <h5 class="info">Top Up</h5>
              <h5 class="add">+2,250</h5>
            </div>
            <p>ref-no 010-abc-456</p>
          </div>

          <!-- <form>
            <div class="user-box">
              <input
                type="text"
                v-model.trim.lazy="v$.form.userdetail.$model"
                required="required"
              />
              <label for="">Email Or Phone number:</label>
            </div>
            <div class="pre-icon os-icon os-icon-user-male-circle"></div>
            <div
              class="input-errors"
              v-for="(error, index) of v$.form.userdetail.$errors"
              :key="index"
            >
              <div class="error-msg">{{ error.$message }}</div>
            </div>
            <div class="grid">
              <div>
                <div class="user-box">
                  <input
                    type="text"
                    v-model.trim.lazy="v$.form.country.$model"
                    required="required"
                  />
                  <label for=""> Country:</label>
                </div>
                <div class="pre-icon os-icon os-icon-user-male-circle"></div>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.country.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
              <div>
                <div class="user-box">
                  <input
                    type="number"
                    v-model.trim.lazy="v$.form.amount.$model"
                    required="required"
                  />
                  <label for="">Amount:</label>
                </div>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.amount.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <div class="grid">
              <button type="submit" @click="submitRequest">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Request
              </button>
              <button type="submit" @click="submitSend">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Send
              </button>
            </div>
          </form> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export default {
  name: "Wallet",

  data() {
    return {
      v$: useVuelidate(),

      form: {
        userdetail: "",
        country: "",
        amount: "",
      },
      submitted: false,
    };
  },

  methods: {
    submitRequest() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("Form successfully submitted.");
        console.log(this.form);
      } else {
        // alert("Please fill out all the required field..!");
      }
    },

    submitSend() {
      this.v$.$validate();
      // console.log("This is working", this.v$);
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
        userdetail: {
          required: helpers.withMessage("This field cannot be empty", required),
        },
        country: {
          required: helpers.withMessage(
            "Country field cannot be empty",
            required
          ),
        },
        amount: {
          required: helpers.withMessage(
            "Amount field cannot be empty",
            required
          ),
        },
      },
    };
  },
};
</script>

<style scoped>
.add {
  color: var(--aaj-add);
}
.subtract {
  color: var(--aaj-subtract);
}
.wallet-container {
  height: 43vh;
  background-color: var(--aaj-primary-h1);
}
.balance {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.8rem;
}
.wallet-number :where(h4, h5) {
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
}
.wallet-balance :where(h4, h5) {
  color: #fff;
  text-align: right;
  font-weight: 500;
  font-size: 1rem;
}
.grid.grid-3 h5 {
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
}
.grid.grid-3 img {
  width: 100%;
  display: block;
  max-height: 40px;
}
.wallet-wrap {
  width: 100%;
  padding: 2rem 1rem 1rem;
  background-color: #fff;
  border-radius: 50px 50px 0 0;
}
.accountDetails {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
}
.wallets .card {
  margin: 1rem 0 0;
}
.wallets .info {
  color: var(--aaj-blue-h1);
}
.wallet-wrap h3 {
  margin: 0 0 0.8rem;
  color: var(--aaj-primary-h);
  font-size: 1rem;
  font-weight: 600;
}
.see-all {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.see-all a {
  display: block;
  font-weight: 600;
  color: var(--aaj-primary-h10);
}
.wallet-wrap p {
  color: var(--aaj-gray-dark);
  font-size: 0.8rem;
}
/*
.wallet-wrap .user-box {
  position: relative;
}
.wallet-wrap .user-box input {
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
.wallet-wrap .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem 0;
  font-size: 1rem;
  color: var(--aaj-gray-dark);
  pointer-events: none;
  transition: 0.5s;
}

.wallet-wrap .user-box input[type="text"]:focus ~ label,
.wallet-wrap .user-box input[type="number"]:focus ~ label,
.wallet-wrap .user-box input[type="text"]:valid ~ label,
.wallet-wrap .user-box input[type="number"]:valid ~ label {
  top: -15px;
  left: 0;
  color: var(--aaj-yellow-green-h);
  font-size: 0.8rem;
}

.wallet-wrap form button {
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
  text-transform: uppercase;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 1rem;
  letter-spacing: 2px;
}

.wallet-wrap button:hover {
  color: var(--aaj-gray-light);
  border-radius: 30px;
  box-shadow: 0 0 5px var(--aaj-gray-light), 0 0 25px var(--aaj-gray-light),
    0 0 30px var(--aaj-gray-light), 0 0 80px var(--aaj-gray-light);
}

.wallet-wrap form button:disabled {
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
  border-color: #dc3545;
  color: #dc3545;
  font-size: 0.7rem;
}

.input-errors {
  margin-top: -20px;
} */

@media (min-width: 320px) {
  /* smartphones, iPhone, portrait 480x320 phones */
  .grid.grid-3 h5 {
    font-size: 0.8rem;
  }
  /* .wallet-container {
    max-height: 100vh;
  } */
}
@media (min-width: 375px) {
  /* smartphones, iPhone, portrait 480x320 phones */
  .wallet-container {
    max-height: 35vh;
  }
}

@media (min-width: 411px) {
  /* smartphones, iPhone, portrait 480x320 phones */
  .wallet-container {
    max-height: 34vh;
  }
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .wallet-container {
    max-height: 30vh;
  }
  .balance {
    padding: 0 1rem;
  }
  .wallet-number :where(h4, h5) {
    font-size: 1.5rem;
    font-weight: 500;
  }
  .wallet-balance :where(h4, h5) {
    font-size: 1.5rem;
  }
  .grid.grid-3 {
    padding: 0 0.8rem;
  }
  .grid.grid-3 h5 {
    font-size: 1.5rem;
  }
  .grid.grid-3 img {
    max-height: 60px;
  }
  .wallet-wrap {
    width: 100%;
    padding: 3rem 1.5rem 1.5rem;
  }
  .wallets .card {
    margin: 1.5rem 0 0;
  }
  .wallets .card h5 {
    font-size: 1rem;
  }

  .wallets .card :where(h6, p) {
    font-size: 1rem;
  }
  .wallet-wrap h3 {
    font-size: 1.5rem;
  }
  .see-all a {
    font-size: 1.5rem;
  }
  .wallet-wrap p {
    font-size: 1rem;
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
  .wallet-container {
    max-height: 28vh;
  }
}

@media (min-width: 1025px) {
  .wallet-container {
    height: 25vh;
  }
  .balance {
    padding: 0 1.5rem;
  }
  .grid.grid-3 img {
    min-height: 50px;
  }
  .wallet-wrap {
    padding: 1rem 1rem 1rem;
    border-radius: 0;
  }
  .wallet-wrap h3 {
    font-size: 1rem;
  }
  .see-all a {
    font-size: 1rem;
  }
  .wallet-wrap p {
    font-size: 1rem;
  }
  .wallet-wrap h6 {
    color: var(--aaj-gray-dark);
    font-weight: 500;
  }
}
</style>
