<template>
  <div class="container">
    <div class="request-wrap">
      <h2>Who is this payment for?</h2>
      <p>
        Please note that all payments will be received in your local currency
      </p>

      <form>
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
      </form>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export default {
  name: "RequestPayment",

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
        alert("Please fill out all the requred field..!");
      }
    },

    submitSend() {
      this.v$.$validate();
      // console.log("This is working", this.v$);
      if (!this.v$.$error) {
        alert("Form successfully submitted.");
        console.log(this.form);
      } else {
        alert("Please fill out all the requred field..!");
      }
    },
  },

  validations() {
    return {
      form: {
        userdetail: {
          required: helpers.withMessage(
            "This field field cannot be empty",
            required
          ),
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
  border-bottom: 1px solid var(--aaj-blue-h10);
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
  border-color: #dc3545;
  color: #dc3545;
  font-size: 0.7rem;
}

.input-errors {
  margin-top: -20px;
}

@media (min-width: 1025px) {
  .request-wrap {
    width: 100%;
    padding: 0 0.5rem;
    border-radius: 10px;
  }

  .request-wrap h2 {
    margin: 3rem 0 0.8rem;
    color: var(--aaj-primary-h);
    font-size: 1.9rem;
    font-weight: 600;
    text-align: center;
  }
  .request-wrap p {
    color: var(--aaj-gray-dark);
    text-align: center;
    font-size: 0.9rem;
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
    border-bottom: 1px solid var(--aaj-blue-h10);
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
  .request-wrap .user-box input[type="numer"]:valid ~ label {
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
    border-color: #dc3545;
    color: #dc3545;
    font-size: 0.7rem;
  }

  .input-errors {
    margin-top: -20px;
  }
}
</style>
