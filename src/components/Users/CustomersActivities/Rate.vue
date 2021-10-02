<template>
  <div class="container">
    <Modal :open="isOpen">
      <template v-slot:modalHeader>
        <img src="/img/aaj/logo.png" class="logo" />
        <button type="button" class="close" @click="close">×</button>
      </template>

      <template v-slot:default v-if="rate != null">
        <h3 class="text-center">
          <span>{{ rate.weight }} Kg</span> @
          <span>₦{{ new Intl.NumberFormat().format(rate.price) }}</span>
        </h3>
        <h5 class="modal-title text-center">
          The above rates presented are estimates and may be adjusted when the
          package is picked up
        </h5>
      </template>

      <template v-slot:modalFooter>
        <button type="button" class="btn bg-blue" @click="close">Close</button>
      </template>
    </Modal>

    <div class="request-wrap">
      <form @submit.prevent="rateForm">
        <div class="rate-wrap">
          <div class="origin">
            <div class="grid mt-2">
              <div>
                <div class="user-box">
                  <select
                    v-model.trim.lazy="v$.form.serviceType.$model"
                    required="required"
                    :class="{ 'error-msg': v$.form.serviceType.$error }"
                  >
                    <option value="" disabled selected>
                      -select service type-
                    </option>
                    <option value="1">Office Drop-off</option>
                    <option value="2">Pick-up &amp; Delivery</option>
                  </select>
                </div>
                <div class="pre-icon os-icon os-icon-user-male-circle"></div>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.serviceType.$errors"
                  :key="index"
                >
                  <div class="error-msg-text">{{ error.$message }}</div>
                </div>
              </div>

              <div>
                <div class="user-box">
                  <select v-model.trim.lazy="form.priority">
                    <option value="" disabled selected>-priority-</option>
                    <option value="1">Standard</option>
                    <option value="2">Urgent</option>
                  </select>
                </div>
              </div>
            </div>

            <h2>Where are you shipping from?</h2>

            <div class="grid originating">
              <div>
                <div class="user-box">
                  <select
                    v-model.trim.lazy="v$.form.originatingCountry.$model"
                    required="required"
                    :class="{ 'error-msg': v$.form.originatingCountry.$error }"
                    @change="getCountryId('origin')"
                  >
                    <option value="" disabled selected>-select country-</option>
                    <option
                      :value="country.id"
                      v-for="country in countries.data"
                      :key="country.id"
                    >
                      {{ country.name }}
                    </option>
                  </select>
                </div>
                <div class="pre-icon os-icon os-icon-user-male-circle"></div>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.originatingCountry.$errors"
                  :key="index"
                >
                  <div class="error-msg-text">{{ error.$message }}</div>
                </div>
              </div>

              <div>
                <div class="user-box">
                  <input
                    type="text"
                    v-model.trim.lazy="v$.form.weight.$model"
                    required="required"
                    :class="{ 'error-msg': v$.form.weight.$error }"
                  />
                  <label for="">Weight (Kg):</label>
                </div>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.weight.$errors"
                  :key="index"
                >
                  <div class="error-msg-text">{{ error.$message }}</div>
                </div>
              </div>
            </div>

            <div class="grid">
              <div>
                <div class="user-box">
                  <select
                    v-model.trim.lazy="v$.form.originatingState.$model"
                    required="required"
                    :class="{ 'error-msg': v$.form.originatingState.$error }"
                    @change="getStateId('origin')"
                  >
                    <option value="" disabled selected>-select state-</option>
                    <template v-if="isOriginCountryChanged">
                      <option
                        :value="state.id"
                        v-for="state in states.data"
                        :key="state.id"
                      >
                        {{ state.name }}
                      </option>
                    </template>
                  </select>
                </div>
                <div class="pre-icon os-icon os-icon-user-male-circle"></div>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.originatingState.$errors"
                  :key="index"
                >
                  <div class="error-msg-text">{{ error.$message }}</div>
                </div>
              </div>

              <div>
                <div class="user-box">
                  <select v-model.trim.lazy="form.originatingCity">
                    <option value="" disabled selected>-select city-</option>
                    <template v-if="isOriginStateChanged">
                      <option
                        :value="city.id"
                        v-for="city in cities.data"
                        :key="city.id"
                      >
                        {{ city.name }}
                      </option>
                    </template>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div class="destination">
            <h2>Where are you shipping to?</h2>
            <div>
              <div class="user-box">
                <select
                  v-model.trim.lazy="v$.form.destinationCountry.$model"
                  required="required"
                  :class="{ 'error-msg': v$.form.destinationCountry.$error }"
                  @change="getCountryId('dest')"
                >
                  <option value="" disabled selected>-select country-</option>
                  <option
                    :value="`${country.id}`"
                    v-for="country in countries.data"
                    :key="country.id"
                  >
                    {{ country.name }}
                  </option>
                </select>
              </div>
              <div class="pre-icon os-icon os-icon-user-male-circle"></div>
              <div
                class="input-errors"
                v-for="(error, index) of v$.form.destinationCountry.$errors"
                :key="index"
              >
                <div class="error-msg-text">{{ error.$message }}</div>
              </div>
            </div>

            <div class="grid">
              <div>
                <div class="user-box">
                  <select
                    v-model.trim.lazy="v$.form.destinationState.$model"
                    required="required"
                    :class="{ 'error-msg': v$.form.destinationState.$error }"
                    @change="getStateId('dest')"
                  >
                    <option value="" disabled selected>-select state-</option>
                    <template v-if="isDestCountryChanged">
                      <option
                        :value="state.id"
                        v-for="state in destStates.data"
                        :key="state.id"
                      >
                        {{ state.name }}
                      </option>
                    </template>
                  </select>
                </div>
                <div class="pre-icon os-icon os-icon-user-male-circle"></div>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.destinationState.$errors"
                  :key="index"
                >
                  <div class="error-msg-text">{{ error.$message }}</div>
                </div>
              </div>

              <div>
                <div class="user-box">
                  <select v-model.trim.lazy="form.destinationCity">
                    <option value="" disabled selected>-select city-</option>
                    <template v-if="isDestStateChanged">
                      <option
                        :value="city.id"
                        v-for="city in destCities.data"
                        :key="city.id"
                      >
                        {{ city.name }}
                      </option>
                    </template>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="submit">
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
import Modal from "../../ModalComp.vue";
import { mapGetters, mapActions } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

export default {
  name: "Rate",
  components: { Modal },

  data() {
    return {
      v$: useVuelidate(),

      form: {
        inter: "inter",
        priority: "",
        serviceType: "",
        originatingCountry: "",
        originatingState: "",
        originatingCity: "",
        destinationCountry: "",
        destinationState: "",
        destinationCity: "",
        weight: "",
      },

      isOriginCountryChanged: false,
      isOriginStateChanged: false,
      isDestCountryChanged: false,
      isDestStateChanged: false,

      isOpen: false,
    };
  },

  computed: {
    ...mapGetters("location", [
      "countries",
      "states",
      "cities",
      "destCountries",
      "destStates",
      "destCities",
    ]),
    ...mapGetters("rate", ["rate"]),
  },

  methods: {
    ...mapActions("location", ["getCountries", "getStates", "getCities"]),
    ...mapActions("rate", ["getRate"]),

    rateForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.getRate(this.form);
      }
    },

    getCountryId: function (source) {
      if (source == "origin") {
        this.getStates([this.form.originatingCountry, source]);
        this.isOriginCountryChanged = true;
      } else {
        this.getStates([this.form.destinationCountry, source]);
        this.isDestCountryChanged = true;
      }
    },

    getStateId: function (source) {
      if (source == "origin") {
        this.getCities([this.form.originatingState, source]);
        this.isOriginStateChanged = true;
      } else {
        this.getCities([this.form.destinationState, source]);
        this.isDestStateChanged = true;
      }
    },

    close: function () {
      this.isOpen = !this.isOpen;
    },
  },

  watch: {
    rate(val) {
      if (val.price != "") {
        this.isOpen = true;
      } else {
        this.isOpen = false;
      }
    },
  },

  mounted() {
    this.getCountries();
  },

  validations() {
    return {
      form: {
        serviceType: {
          required: helpers.withMessage(
            "Service type may not be empty",
            required
          ),
        },
        originatingCountry: {
          required: helpers.withMessage("Country may not be empty", required),
        },
        weight: {
          required: helpers.withMessage("Weight required", required),
        },
        originatingState: {
          required: helpers.withMessage("State may not be empty", required),
        },
        destinationCountry: {
          required: helpers.withMessage("Country may not be empty", required),
        },
        destinationState: {
          required: helpers.withMessage("State may not be empty", required),
        },
      },
    };
  },
};
</script>

<style scoped>
.logo {
  width: 50px;
  display: block;
}
.modal h3 {
  font-size: 2rem;
  font-weight: 600;
  text-transform: uppercase;
}
.modal h5 {
  font-size: 1rem;
  color: var(--aaj-blue-h1);
}
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
  width: 100%;
  padding: 0 0.5rem;
  margin: 0 0 3rem;
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
.request-wrap .user-box input,
select {
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
  border-color: #dc3545 !important;
}
.error-msg-text {
  color: #dc3545;
  font-size: 0.7rem;
}

.input-errors {
  margin-top: -20px;
}

@media (min-width: 320px) {
  .modal h3 {
    font-size: 1.5rem;
  }
  .modal h5 {
    font-size: 0.7rem;
  }
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .request-wrap {
    display: block;
    width: 80%;
    margin: 3rem auto;
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
  .modal h3 {
    font-size: 2.5rem;
  }
  .modal h5 {
    font-size: 1.1rem;
  }
  .request-wrap {
    display: flex;
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
