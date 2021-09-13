<template>
  <div class="origin">
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
            <option value="" disabled>-select country-</option>
            <option
              :value="country.id"
              v-for="country in countries"
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
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div>
        <div class="user-box">
          <input
            type="number"
            v-model.trim.number.lazy="v$.form.weight.$model"
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
          <div class="error-msg">{{ error.$message }}</div>
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
            <option value="" disabled>-select state-</option>
            <template v-if="isOriginCountryChanged">
              <option :value="state.id" v-for="state in states" :key="state.id">
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
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div>
        <div class="user-box">
          <select
            v-model.trim.lazy="v$.form.originatingCity.$model"
            required="required"
            :class="{ 'error-msg': v$.form.originatingCity.$error }"
          >
            <option value="" disabled>-select city-</option>
            <template v-if="isOriginStateChanged">
              <option :value="city.id" v-for="city in cities" :key="city.id">
                {{ city.name }}
              </option>
            </template>
          </select>
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
</template>

<script>
import { mapActions } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
export default {
  name: "Origin",
  props: ["countries", "states", "cities"],
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
      
      isOriginCountryChanged: false,
      isOriginStateChanged: false,
    };
  },

  methods: {
    ...mapActions("location", ["getCountries", "getStates", "getCities"]),

    getCountryId: function (source) {
      if (source == "origin") {
        this.getStates(this.form.originatingCountry);
        this.isOriginCountryChanged = true;
      }
      // if (source == "dest") {
      //   this.getStates(this.form.destinationCountry);
      //   this.isDestCountryChanged = true;
      // }
    },

    getStateId: function (source) {
      if (source == "origin") {
        this.getCities(this.form.originatingState);
        this.isOriginStateChanged = true;
      }
      // if (source == "dest") {
      //   this.getCities(this.form.destinationState);
      //   this.isDestStateChanged = true;
      // }
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

<style scoped></style>
