<template>
  <div class="container">
    <div class="request-wrap">
      <form>
        <div class="rate-wrap">
          <div class="origin">
            <h2><u>Where are you shipping from?</u></h2>
            <div class="grid originating">
              <div>
                <div class="user-box">
                  <input
                    type="text"
                    v-model.trim.lazy="v$.form.originatingCountry.$model"
                    required="required"
                  />
                  <label for="">Country:</label>
                </div>
                <div class="pre-icon os-icon os-icon-user-male-circle"></div>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.originatingCountry.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
              <div>
                <div class="user-box">
                  <input
                    type="number"
                    v-model.trim.lazy="v$.form.weight.$model"
                    required="required"
                  />
                  <label for="">Weight (Kg):</label>
                </div>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.weight.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
            <div class="grid">
              <div>
                <div class="user-box">
                  <input
                    type="text"
                    v-model.trim.lazy="v$.form.originatingState.$model"
                    required="required"
                  />
                  <label for="">State:</label>
                </div>
                <div class="pre-icon os-icon os-icon-user-male-circle"></div>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.originatingState.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
              <div>
                <div class="user-box">
                  <input
                    type="number"
                    v-model.trim.lazy="v$.form.originatingCity.$model"
                    required="required"
                  />
                  <label for="">City:</label>
                </div>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.originatingCity.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="destination">
            <h2><u>Where are you shipping to?</u></h2>
            <div>
              <div class="user-box">
                <input
                  type="text"
                  v-model.trim.lazy="v$.form.destinationCountry.$model"
                  required="required"
                />
                <label for="">Country:</label>
              </div>
              <div class="pre-icon os-icon os-icon-user-male-circle"></div>
              <div
                class="input-errors"
                v-for="(error, index) of v$.form.destinationCountry.$errors"
                :key="index"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>

            <div class="grid">
              <div>
                <div class="user-box">
                  <input
                    type="text"
                    v-model.trim.lazy="v$.form.destinationState.$model"
                    required="required"
                  />
                  <label for="">State:</label>
                </div>
                <div class="pre-icon os-icon os-icon-user-male-circle"></div>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.destinationState.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
              <div>
                <div class="user-box">
                  <input
                    type="number"
                    v-model.trim.lazy="v$.form.destinationCity.$model"
                    required="required"
                  />
                  <label for="">City:</label>
                </div>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.destinationCity.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" @click="getRate">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Get shipping rates
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export default {
  name: "Rate",

  data() {
    return {
      v$: useVuelidate(),

      form: {
        originatingCountry: "",
        originatingState: "",
        originatingCity: "",
        destinationCountry: "",
        destinationState: "",
        destinationCity: "",
        weight: "",
      },
      submitted: false,
    };
  },

  methods: {
    getRate() {
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
        originatingCountry: {
          required: helpers.withMessage("Country may not be empty", required),
        },
        weight: {
          required: helpers.withMessage("Weight required", required),
        },
        originatingState: {
          required: helpers.withMessage("State may not be empty", required),
        },
        originatingCity: {
          required: helpers.withMessage("City may not be empty", required),
        },
        destinationCountry: {
          required: helpers.withMessage("Country may not be empty", required),
        },
        destinationState: {
          required: helpers.withMessage("State may not be empty", required),
        },
        destinationCity: {
          required: helpers.withMessage("Weight may not be empty", required),
        },
      },
    };
  },
};
</script>

<style scoped>
.originating {
  grid-template-columns: 2fr 1fr;
}
.origin {
  margin: 0 0 2rem;
}
.request-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100%;
  padding: 0 0.5rem;
  border-radius: 10px;
}

.request-wrap h2 {
  margin: 0 0 0.8rem;
  color: var(--aaj-primary-h);
  font-size: 1rem;
  font-weight: 600;
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

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .request-wrap {
    display: block;
    width: 80%;
    margin: 3rem auto 0;
    border-radius: 10px;
  }

  .origin,
  .destination {
    margin: 0;
    padding: 1rem;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .rate-wrap {
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
    margin: 0 0 1rem;
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
    height: 70vh;
    width: 100%;
  }
  .rate-wrap {
    grid-template-columns: repeat(2, 1fr);
    margin: 3rem 0;
  }
  .request-wrap form button {
    display: block;
    width: 50%;
    margin: 0 auto;
  }
}
</style>
