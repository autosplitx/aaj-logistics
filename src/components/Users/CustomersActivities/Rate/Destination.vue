<template>
  <div class="destination">
    <h2>Where are you shipping to?</h2>
    <div>
      <div class="user-box">
        <select
          v-model.trim.lazy="v$.form.destinationCountry.$model"
          required="required"
          :class="{ 'error-msg': v$.form.destinationCountry.$error }"
          @change="getDestCountryId('dest')"
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
        v-for="(error, index) of v$.form.destinationCountry.$errors"
        :key="index"
      >
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>

    <div class="grid">
      <div>
        <div class="user-box">
          <select
            v-model.trim.lazy="v$.form.destinationState.$model"
            required="required"
            :class="{ 'error-msg': v$.form.destinationState.$error }"
            @change="getDestStateId('dest')"
          >
            <option value="" disabled>-select state-</option>
            <template v-if="isDestCountryChanged">
              <option :value="state.id" v-for="state in states" :key="state.id">
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
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>
      <div>
        <div class="user-box">
          <select
            v-model.trim.lazy="v$.form.destinationCity.$model"
            required="required"
            :class="{ 'error-msg': v$.form.destinationCity.$error }"
          >
            <option value="" disabled>-select city-</option>
            <template v-if="isDestStateChanged">
              <option :value="city.id" v-for="city in cities" :key="city.id">
                {{ city.name }}
              </option>
            </template>
          </select>
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
</template>

<script>
import { mapActions } from "vuex";
import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
export default {
  name: "Destination",
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

      isDestCountryChanged: false,
      isDestStateChanged: false,
    };
  },

  methods: {
    ...mapActions("location", ["getCountries", "getStates", "getCities"]),

    getDestCountryId: function (source) {
      // if (source == "origin") {
      //   this.getStates(this.form.originatingCountry);
      //   this.isOriginCountryChanged = true;
      // }
      if (source == "dest") {
        this.getStates(this.form.destinationCountry);
        this.isDestCountryChanged = true;
      }
    },

    getDestStateId: function (source) {
      // if (source == "origin") {
      //   this.getCities(this.form.originatingState);
      //   this.isOriginStateChanged = true;
      // }
      if (source == "dest") {
        this.getCities(this.form.destinationState);
        this.isDestStateChanged = true;
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

<style scoped></style>
