<template>
  <div class="container">
    <div class="request-wrap">
      <div class="requests">
        <form>
          <div v-show="step === 1">
            <h2>Pickup From</h2>

            <div>
              <div class="user-box">
                <input
                  type="text"
                  v-model.trim.lazy="v$.form.senderName.$model"
                  required="required"
                  :class="{ 'error-msg': v$.form.senderName.$error }"
                />
                <label for="">Name of sender:</label>
              </div>
              <div class="pre-icon os-icon os-icon-user-male-circle"></div>
              <div
                class="input-errors"
                v-for="(error, index) of v$.form.senderName.$errors"
                :key="index"
              >
                <div class="error-msg-text">{{ error.$message }}</div>
              </div>
            </div>

            <div class="grid">
              <div class="user-box">
                <input
                  type="tel"
                  v-model.trim.lazy="v$.form.senderPhone.$model"
                  required="required"
                  :class="{ 'error-msg': v$.form.senderPhone.$error }"
                />
                <label for=""> Phone number:</label>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.senderPhone.$errors"
                  :key="index"
                >
                  <div class="error-msg-text">{{ error.$message }}</div>
                </div>
              </div>

              <div class="user-box">
                <input
                  type="email"
                  v-model.trim.lazy="v$.form.senderEmail.$model"
                  required="required"
                  :class="{ 'error-msg': v$.form.senderEmail.$error }"
                />
                <label for=""> Email address</label>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.senderEmail.$errors"
                  :key="index"
                >
                  <div class="error-msg-text">{{ error.$message }}</div>
                </div>
              </div>
            </div>

            <div class="user-box">
              <input
                type="text"
                v-model.trim.lazy="v$.form.originatingStreet.$model"
                required="required"
              />
              <label for=""> Address:</label>
              <div
                class="input-errors"
                v-for="(error, index) of v$.form.originatingStreet.$errors"
                :key="index"
              >
                <div class="error-msg-text">{{ error.$message }}</div>
              </div>
            </div>

            <div class="grid grid-3">
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

            <button @click.prevent="next()">Next</button>
          </div>

          <div v-show="step === 2">
            <h2>Deliver To</h2>

            <div>
              <div class="user-box">
                <input
                  type="text"
                  v-model.trim.lazy="v$.form.receiverName.$model"
                  required="required"
                  :class="{ 'error-msg': v$.form.receiverName.$error }"
                />
                <label for="">Name of recipient:</label>
              </div>
              <div class="pre-icon os-icon os-icon-user-male-circle"></div>
              <div
                class="input-errors"
                v-for="(error, index) of v$.form.receiverName.$errors"
                :key="index"
              >
                <div class="error-msg-text">{{ error.$message }}</div>
              </div>
            </div>

            <div class="grid">
              <div class="user-box">
                <input
                  type="tel"
                  v-model.trim.lazy="v$.form.receiverPhone.$model"
                  required="required"
                  :class="{ 'error-msg': v$.form.receiverPhone.$error }"
                />
                <label for=""> Phone number:</label>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.receiverPhone.$errors"
                  :key="index"
                >
                  <div class="error-msg-text">{{ error.$message }}</div>
                </div>
              </div>

              <div class="user-box">
                <input
                  type="email"
                  v-model.trim.lazy="v$.form.receiverEmail.$model"
                  required="required"
                  :class="{ 'error-msg': v$.form.receiverEmail.$error }"
                />
                <label for=""> Email address</label>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.receiverEmail.$errors"
                  :key="index"
                >
                  <div class="error-msg-text">{{ error.$message }}</div>
                </div>
              </div>
            </div>

            <div class="user-box">
              <input
                type="text"
                v-model.trim.lazy="v$.form.destinationStreet.$model"
                required="required"
              />
              <label for=""> Address:</label>
              <div
                class="input-errors"
                v-for="(error, index) of v$.form.destinationStreet.$errors"
                :key="index"
              >
                <div class="error-msg-text">{{ error.$message }}</div>
              </div>
            </div>

            <div class="grid grid-3">
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

            <div class="grid">
              <button @click.prevent="prev()">Previous</button>
              <button @click.prevent="next()">Next</button>
            </div>
          </div>

          <div v-show="step === 3">
            <h2>Description</h2>

            <div
              v-for="(row, index) in form.descriptions"
              :key="index"
              class="table-row"
            >
              <div class="user-box">
                <input type="text" v-model.trim.lazy="row.category" />
                <label for="">Category:</label>
              </div>
              <div class="user-box">
                <input type="text" v-model.trim.lazy="row.description" />
                <label for="">Description:</label>
              </div>
              <div class="user-box">
                <input type="number" v-model.trim.lazy="row.quantity" />
                <label for="">Quantity:</label>
              </div>

              <div>
                <div class="user-box">
                  <input type="number" v-model.trim.lazy="row.weight" />
                  <label for="">Weight (Kg):</label>
                </div>
              </div>
              <div class="removed">
                <div class="user-box">
                  <input type="number" v-model.trim.number.lazy="row.amount" />
                  <label for="">Item Value:</label>
                </div>
                <a class="btn btn-primary" @click="removeRow(row)"
                  ><i class="fa fa-trash"></i
                ></a>
              </div>
            </div>

            <button type="button" class="btn btn-primary" @click="addRow">
              Add another item
            </button>

            <div class="grid">
              <button @click.prevent="prev()">Previous</button>
              <button @click.prevent="next()">Next</button>
            </div>
          </div>

          <div v-show="step === 4">
            <div class="mt-1">
              <div>
                <h3 class="mt-1">Enter discount code</h3>
                <p>
                  Provide a valid discount code to use with your transaction.
                </p>
                <div class="grid">
                  <div class="user-box">
                    <input type="text" v-model.trim.lazy="form.discount" />
                    <label for="">Discount Code:</label>
                  </div>

                  <div class="mb-2">
                    <h3>Priority</h3>
                    <div class="flex justify-content-between">
                      <div class="user-radio">
                        <label>
                          <input
                            type="radio"
                            name="priority"
                            value="1"
                            v-model.trim.lazy="v$.form.priority.$model"
                            required="required"
                          />
                          Standard
                        </label>
                        <div
                          class="input-errors"
                          v-for="(error, index) of v$.form.priority.$errors"
                          :key="index"
                        >
                          <div class="error-msg-text">{{ error.$message }}</div>
                        </div>
                      </div>

                      <div class="user-radio">
                        <label>
                          <input
                            type="radio"
                            name="priority"
                            value="2"
                            v-model.trim.lazy="v$.form.priority.$model"
                            required="required"
                          />
                          Urgent
                        </label>
                        <div
                          class="input-errors"
                          v-for="(error, index) of v$.form.priority.$errors"
                          :key="index"
                        >
                          <div class="error-msg-text">{{ error.$message }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 class="mt-1">Apply Insurance</h3>
            <div class="insurance">
              <div class="user-radio">
                <label>
                  <input
                    type="radio"
                    value="1"
                    v-model.trim.lazy="form.insured"
                  />
                  Standard
                </label>
                <p>
                  Insures your eligible shipments at a value of N10,000 for no
                  additional cost
                </p>

                <label>
                  <input
                    type="radio"
                    value="0"
                    v-model.trim.lazy="form.insured"
                  />
                  None
                </label>
              </div>
              <div class="user-radio">
                <label>
                  <input
                    type="radio"
                    value="2"
                    v-model.trim.lazy="form.insured"
                  />
                  Extended
                </label>
                <p>
                  Eligible shipments valued up to N200,000 for N1,500. Shipments
                  valued above N200,000 are limited to an insurance cover of
                  N200,000 or shipped entirely at the sender's risk
                </p>
              </div>
            </div>

            <div class="grid">
              <button @click.prevent="prev()">Previous</button>
              <button @click.prevent="next('requestRate')">Next</button>
            </div>
          </div>

          <div v-show="step === 5">
            <h2>Quote</h2>

            <div v-if="rate != null">
              <div class="quote-header card">
                <h4>
                  {{ rate.originCountry[0] }} ({{ rate.originCountry[1] }}) |
                  {{ rate.originState[0] }} ({{ rate.originState[1] }})
                </h4>
                <span class="mx-3">to</span>
                <h4>
                  {{ rate.destCountry[0] }} ({{ rate.destCountry[1] }}) |
                  {{ rate.destState[0] }} ({{ rate.destState[1] }})
                </h4>
              </div>

              <div class="card">
                <div class="text-center">
                  <h1>₦{{ new Intl.NumberFormat().format(rate.price) }}</h1>
                  <h6>{{ rate.weight }}KG</h6>
                  <p>
                    Rates and courier availablilty are based on your specified
                    route and estimated weight
                  </p>
                </div>
              </div>
            </div>

            <div class="grid">
              <button @click.prevent="prev()">Previous</button>
              <button @click.prevent="next()" :disabled="rate == null">
                Next
              </button>
            </div>
          </div>

          <div v-show="step === 6">
            <h2>Summary & Payment</h2>

            <div class="summary grid-sm grid-md mb-1">
              <details>
                <summary>Origin</summary>
                <p>
                  <strong>Sender Name:</strong>
                  <samp>{{ form.senderName }}</samp>
                </p>
                <p>
                  <strong>Sender Phone:</strong>
                  <samp>{{ form.senderPhone }}</samp>
                </p>
                <p>
                  <strong>Sender Email:</strong>
                  <samp>{{ form.senderEmail }}</samp>
                </p>
                <p>
                  <strong>Originating Country:</strong>
                  <samp v-if="rate != null">{{ rate.originCountry[0] }}</samp>
                </p>
                <p>
                  <strong>Address:</strong>
                  <samp>{{ form.originatingStreet }}</samp>
                </p>
                <p>
                  <strong>Originating State:</strong>
                  <samp v-if="rate != null">{{ rate.originState[0] }}</samp>
                </p>
              </details>

              <details>
                <summary>Destination</summary>
                <p>
                  <strong>Receiver Name:</strong>
                  <samp>{{ form.receiverName }}</samp>
                </p>
                <p>
                  <strong>Receiver Phone:</strong>
                  <samp>{{ form.receiverPhone }}</samp>
                </p>
                <p>
                  <strong>Receiver Email:</strong>
                  <samp>{{ form.receiverEmail }}</samp>
                </p>
                <p>
                  <strong>Destination Country:</strong>
                  <samp v-if="rate != null">{{ rate.destCountry[0] }}</samp>
                </p>
                <p>
                  <strong>Address:</strong>
                  <samp>{{ form.destinationStreet }}</samp>
                </p>
                <p>
                  <strong>Destination State:</strong>
                  <samp v-if="rate != null">{{ rate.destState[0] }}</samp>
                </p>
              </details>
            </div>

            <h3>Select Service Type</h3>
            <div class="grid">
              <div class="user-radio">
                <label>
                  <input
                    type="radio"
                    name="service-type"
                    value="1"
                    v-model.trim.lazy="v$.form.serviceType.$model"
                    required="required"
                  />
                  Drop-off
                </label>
                <p>
                  The shipper will drop off the item at one of our locations
                </p>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.serviceType.$errors"
                  :key="index"
                >
                  <div class="error-msg-text">{{ error.$message }}</div>
                </div>
              </div>

              <div class="user-radio">
                <label>
                  <input
                    type="radio"
                    name="service-type"
                    value="2"
                    v-model.trim.lazy="v$.form.serviceType.$model"
                    required="required"
                  />
                  Pickup
                </label>
                <p>
                  This item should be picked up by a courier from the origin
                </p>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.serviceType.$errors"
                  :key="index"
                >
                  <div class="error-msg-text">{{ error.$message }}</div>
                </div>
              </div>
            </div>

            <div class="user-radio">
              <label>
                <input
                  type="checkbox"
                  value="1"
                  v-model.trim.lazy="v$.form.policy.$model"
                  required="required"
                />
                I represent I have read, understand, and agree to the Sendbox's
                Privacy Policy and Terms of Service
              </label>
              <div
                class="input-errors"
                v-for="(error, index) of v$.form.policy.$errors"
                :key="index"
              >
                <div class="error-msg-text">{{ error.$message }}</div>
              </div>
            </div>

            <div class="grid">
              <button @click.prevent="prev()">Previous</button>
              <button
                type="submit"
                @click.prevent="submitForm"
                class="btn btn-outline"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";

export default {
  name: "RequestShipment",

  data() {
    return {
      v$: useVuelidate(),

      step: 1,
      form: {
        senderName: "",
        senderPhone: "",
        senderEmail: "",

        receiverName: "",
        receiverPhone: "",
        receiverEmail: "",

        originatingCountry: "",
        originatingStreet: "",
        originatingState: "",
        originatingCity: "",

        destinationCountry: "",
        destinationStreet: "",
        destinationState: "",
        destinationCity: "",

        descriptions: [
          {
            category: "",
            description: "",
            quantity: "",
            weight: "",
            amount: "",
          },
        ],

        weight: "",
        priority: "",
        discount: "",
        insured: "",
        serviceType: "",
        policy: "",
      },

      isOriginCountryChanged: false,
      isOriginStateChanged: false,
      isDestCountryChanged: false,
      isDestStateChanged: false,
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
    ...mapGetters({
      rate: "rate/rate",
      user: "auth/user",
    }),
  },

  methods: {
    ...mapActions("location", ["getCountries", "getStates", "getCities"]),
    ...mapActions("rate", ["getRate"]),
    ...mapActions("transaction", ["makeTransaction"]),

    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.form.customerId = this.user.id;
        this.form.price = this.rate.price;
        this.form.weight = this.rate.weight;
        this.makeTransaction(this.form);
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

    prev() {
      this.step--;
    },
    next(req) {
      this.v$.$validate();

      let load = [];
      this.form.descriptions.map((mass) => {
        load.push(parseFloat(mass.weight));
      });

      if (req == "requestRate") {
        let reqRate = {
          inter: "inter",
          originatingCountry: this.form.originatingCountry,
          destinationCountry: this.form.destinationCountry,
          originatingState: this.form.originatingState,
          destinationState: this.form.destinationState,
          priority: this.form.priority,
          weight: load.reduce((returned, current) => returned + current, 0),
        };
        this.getRate(reqRate);
      }
      this.step++;
    },

    addRow: function () {
      this.form.descriptions.push({
        category: "",
        description: "",
        quantity: "",
        weight: "",
        amount: "",
      });
    },
    removeRow: function (row) {
      this.form.descriptions.splice(row, 1);
    },
  },

  // watch: {
  //   rate(val) {
  //     if (val.price != "") {
  //       this.isOpen = true;
  //     } else {
  //       this.isOpen = false;
  //     }
  //   },
  // },

  mounted() {
    this.getCountries();
  },

  validations() {
    return {
      form: {
        senderName: {
          required: helpers.withMessage("Name field cannot be empty", required),
        },
        senderPhone: {
          required: helpers.withMessage(
            "Phone number field cannot be empty",
            required
          ),
          minLength: helpers.withMessage(
            ({ $params }) => `Phone number may not be less than ${$params.min}`,
            minLength(7)
          ),
        },
        senderEmail: { required, email },

        receiverName: {
          required: helpers.withMessage("Name field cannot be empty", required),
        },
        receiverPhone: {
          required: helpers.withMessage(
            "Phone number field cannot be empty",
            required
          ),
          minLength: helpers.withMessage(
            ({ $params }) => `Phone number may not be less than ${$params.min}`,
            minLength(7)
          ),
        },
        receiverEmail: { required, email },

        originatingCountry: {
          required: helpers.withMessage(
            "Country field cannot be empty",
            required
          ),
        },
        destinationCountry: {
          required: helpers.withMessage(
            "Country field cannot be empty",
            required
          ),
        },
        originatingStreet: {
          required: helpers.withMessage(
            "Street field cannot be empty",
            required
          ),
        },
        destinationStreet: {
          required: helpers.withMessage(
            "Street field cannot be empty",
            required
          ),
        },
        originatingState: {
          required: helpers.withMessage(
            "State field cannot be empty",
            required
          ),
        },
        destinationState: {
          required: helpers.withMessage(
            "State field cannot be empty",
            required
          ),
        },

        priority: {
          required: helpers.withMessage("Priority field is required", required),
        },
        serviceType: {
          required: helpers.withMessage("Drop-off field is required", required),
        },
        policy: {
          required: helpers.withMessage("Policy field is required", required),
        },
      },
    };
  },
};
</script>

<style scoped>
.summary {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  gap: 20px;
}
details p {
  margin-bottom: 0.3rem !important;
  background-color: var(--aaj-gray-light);
  padding: 0.3rem;
}
samp {
  float: right;
}
.removed {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.removed input {
  min-width: 290px;
}
.removed .btn {
  padding: 0.5em 1em;
}
.insurance {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.request-wrap {
  margin-bottom: 3rem;
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
.request-wrap .user-box input[type="tel"]:focus ~ label,
.request-wrap .user-box input[type="number"]:focus ~ label,
.request-wrap .user-box input[type="email"]:focus ~ label,
.request-wrap .user-box input[type="password"]:focus ~ label,
.request-wrap .user-box input[type="text"]:valid ~ label,
.request-wrap .user-box input[type="tel"]:valid ~ label,
.request-wrap .user-box input[type="number"]:valid ~ label,
.request-wrap .user-box input[type="email"]:valid ~ label,
.request-wrap .user-box input[type="password"]:valid ~ label {
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

.user-radio .input-errors {
  margin-top: 0 !important;
}

.quote-header {
  text-align: center;
  text-transform: capitalize;
}

@media (min-width: 320px) {
  .grid-sm {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .request-wrap {
    display: block;
    width: 90%;
    margin: 3rem auto;
    padding: 1rem;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .request-wrap h2 {
    margin: 0 0 1rem;
    font-size: 1.2rem;
  }

  .grid-sm {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}

@media (min-width: 1025px) {
  /* .request-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  } */

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
