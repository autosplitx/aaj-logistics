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
                  v-model.trim.lazy="v$.form.name.$model"
                  required="required"
                />
                <label for="">Name of sender or pickup contact:</label>
              </div>
              <div class="pre-icon os-icon os-icon-user-male-circle"></div>
              <div
                class="input-errors"
                v-for="(error, index) of v$.form.name.$errors"
                :key="index"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>

            <div class="grid">
              <div class="user-box">
                <input
                  type="tel"
                  v-model.trim.lazy="v$.form.phone.$model"
                  required="required"
                />
                <label for=""> Phone number:</label>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.phone.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>

              <div class="user-box">
                <input
                  type="email"
                  v-model.trim.lazy="v$.form.email.$model"
                  required="required"
                />
                <label for=""> Email address</label>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.email.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>

            <div class="user-box">
              <input
                type="text"
                v-model.trim.lazy="v$.form.country.$model"
                required="required"
              />
              <label for=""> Country:</label>
              <div
                class="input-errors"
                v-for="(error, index) of v$.form.country.$errors"
                :key="index"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>

            <div class="user-box">
              <input
                type="text"
                v-model.trim.lazy="v$.form.street.$model"
                required="required"
              />
              <label for=""> Street:</label>
              <div
                class="input-errors"
                v-for="(error, index) of v$.form.street.$errors"
                :key="index"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>

            <div class="grid">
              <div class="user-box">
                <input
                  type="text"
                  v-model.trim.lazy="v$.form.state.$model"
                  required="required"
                />
                <label for=""> State:</label>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.state.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>

              <div class="user-box">
                <input
                  type="text"
                  v-model.trim.lazy="v$.form.city.$model"
                  required="required"
                />
                <label for=""> City:</label>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.city.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
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
                  v-model.trim.lazy="v$.form.name.$model"
                  required="required"
                />
                <label for="">Name of recipient:</label>
              </div>
              <div class="pre-icon os-icon os-icon-user-male-circle"></div>
              <div
                class="input-errors"
                v-for="(error, index) of v$.form.name.$errors"
                :key="index"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>

            <div class="grid">
              <div class="user-box">
                <input
                  type="tel"
                  v-model.trim.lazy="v$.form.phone.$model"
                  required="required"
                />
                <label for=""> Phone number:</label>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.phone.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>

              <div class="user-box">
                <input
                  type="email"
                  v-model.trim.lazy="v$.form.email.$model"
                  required="required"
                />
                <label for=""> Email address</label>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.email.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>
            </div>

            <div class="user-box">
              <input
                type="text"
                v-model.trim.lazy="v$.form.country.$model"
                required="required"
              />
              <label for=""> Country:</label>
              <div
                class="input-errors"
                v-for="(error, index) of v$.form.country.$errors"
                :key="index"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>

            <div class="user-box">
              <input
                type="text"
                v-model.trim.lazy="v$.form.street.$model"
                required="required"
              />
              <label for=""> Street:</label>
              <div
                class="input-errors"
                v-for="(error, index) of v$.form.street.$errors"
                :key="index"
              >
                <div class="error-msg">{{ error.$message }}</div>
              </div>
            </div>

            <div class="grid">
              <div class="user-box">
                <input
                  type="text"
                  v-model.trim.lazy="v$.form.state.$model"
                  required="required"
                />
                <label for=""> State:</label>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.state.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>

              <div class="user-box">
                <input
                  type="text"
                  v-model.trim.lazy="v$.form.city.$model"
                  required="required"
                />
                <label for=""> City:</label>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.city.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
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
                <input type="text" v-model.trim.lazy="row.quantity" />
                <label for="">Quantity:</label>
              </div>
              <div class="user-box">
                <input type="text" v-model.trim.lazy="row.weight" />
                <label for="">Weight (KG):</label>
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
            <h2>Quote</h2>

            <div>
              <div class="quote-header card">
                <h4>Lagos NG</h4>
                <span class="mx-3">to</span>
                <h4>Canada CA</h4>
              </div>

              <div class="card">
                <div class="text-center">
                  <h1>2,600</h1>
                  <h6>2KG</h6>
                  <p>
                    Rates and courier availablilty are based on your specified
                    route and estimated weight
                  </p>
                </div>
                <h3 class="mt-1">Priority</h3>
                <div class="grid">
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
                      <div class="error-msg">{{ error.$message }}</div>
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
                      <div class="error-msg">{{ error.$message }}</div>
                    </div>
                  </div>
                </div>

                <h3 class="mt-1">Enter discount code</h3>
                <p>
                  Provide a valid discount code to use with your transaction.
                </p>
                <div class="user-box">
                  <input type="text" v-model.trim.lazy="form.discount" />
                  <label for="">Discount Code:</label>
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
                      Insures your eligible shipments at a value of N10,000 for
                      no additional cost
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
                      Eligible shipments valued up to N200,000 for N1,500.
                      Shipments valued above N200,000 are limited to an
                      insurance cover of N200,000 or shipped entirely at the
                      sender's risk
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid">
              <button @click.prevent="prev()">Previous</button>
              <button @click.prevent="next()">Next</button>
            </div>
          </div>

          <div v-show="step === 5">
            <h2>Summary & Payment</h2>
            <!-- {{ form }} -->

            <!-- <dl>
              <dt>Origin</dt>
              <dd>{{ form.name }}</dd>
              <dd>{{ form.street }}</dd>
              <h3>Destination</h3>
            </dl> -->

            <h3>Select dropoff option</h3>
            <div class="grid">
              <div class="user-radio">
                <label>
                  <input
                    type="radio"
                    name="dropoff"
                    value="1"
                    v-model.trim.lazy="v$.form.dropoff.$model"
                    required="required"
                  />
                  Dropoff
                </label>
                <p>
                  The shipper will drop off the item at one of our locations
                </p>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.dropoff.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
                </div>
              </div>

              <div class="user-radio">
                <label>
                  <input
                    type="radio"
                    name="dropoff"
                    value="2"
                    v-model.trim.lazy="v$.form.dropoff.$model"
                    required="required"
                  />
                  Pickup
                </label>
                <p>
                  This item should be picked up by a courier from the origin
                </p>
                <div
                  class="input-errors"
                  v-for="(error, index) of v$.form.dropoff.$errors"
                  :key="index"
                >
                  <div class="error-msg">{{ error.$message }}</div>
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
                <div class="error-msg">{{ error.$message }}</div>
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
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
export default {
  name: "RequestShipment",

  data() {
    return {
      v$: useVuelidate(),

      step: 1,

      form: {
        name: "",
        phone: "",
        email: "",
        country: "",
        street: "",
        state: "",
        city: "",
        descriptions: [
          {
            category: "",
            description: "",
            quantity: "",
            weight: "",
            amount: "",
          },
        ],

        priority: "",
        discount: "",
        insured: "",
        dropoff: "",
        policy: "",
      },
    };
  },

  methods: {
    prev() {
      this.step--;
    },
    next() {
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
      console.log(row);
      this.form.descriptions.splice(row, 1);
    },

    submitForm() {
      const formed = this.form;
      console.log(formed);
      this.v$.$validate();
      if (!this.v$.$error) {
        // this.addUser(this.form);
        console.log(formed);
      }
    },
  },

  validations() {
    return {
      form: {
        name: {
          required: helpers.withMessage(
            "First name field cannot be empty",
            required
          ),
        },
        phone: {
          required: helpers.withMessage(
            "Phone number field cannot be empty",
            required
          ),
          minLength: helpers.withMessage(
            ({ $params }) => `Phone number may not be less than ${$params.min}`,
            minLength(7)
          ),
        },
        email: { required, email },
        country: {
          required: helpers.withMessage(
            "Country field cannot be empty",
            required
          ),
        },
        street: {
          required: helpers.withMessage(
            "Street field cannot be empty",
            required
          ),
        },
        state: {
          required: helpers.withMessage(
            "State field cannot be empty",
            required
          ),
        },
        city: {
          required: helpers.withMessage("City field cannot be empty", required),
        },

        priority: {
          required: helpers.withMessage("Priority field is required", required),
        },
        dropoff: {
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
  border-color: #dc3545;
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
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
