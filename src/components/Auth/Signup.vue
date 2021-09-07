<template>
  <div class="login-box">
    <h2>Create your Account</h2>
    <p>
      Welcome to the AAJEpress family. Your shipping problems are about to fade
      away
    </p>

    <form @submit.prevent="submitForm">
      <div class="grid">
        <div>
          <div class="user-box">
            <input
              type="text"
              v-model.lazy="v$.form.firstName.$model"
              required="required"
            />
            <label for=""> First Name:</label>
          </div>
          <div class="pre-icon os-icon os-icon-user-male-circle"></div>
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.firstName.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>

        <div>
          <div class="user-box">
            <input
              type="text"
              v-model.lazy="v$.form.lastName.$model"
              required="required"
            />
            <label for="">Last Name:</label>
          </div>
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.lastName.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <div class="user-box">
        <input
          type="text"
          v-model.lazy="v$.form.country.$model"
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

      <div class="user-box">
        <input
          type="tel"
          v-model.lazy="v$.form.phone.$model"
          required="required"
        />
        <label for=""> Phone number:</label>
      </div>
      <div class="pre-icon os-icon os-icon-user-male-circle"></div>
      <div
        class="input-errors"
        v-for="(error, index) of v$.form.phone.$errors"
        :key="index"
      >
        <div class="error-msg">{{ error.$message }}</div>
      </div>

      <div class="user-box">
        <input
          type="email"
          v-model.lazy="v$.form.email.$model"
          required="required"
        />
        <label for=""> Email address</label>
        <div class="pre-icon os-icon os-icon-email-2-at2"></div>
        <div
          class="input-errors"
          v-for="(error, index) of v$.form.email.$errors"
          :key="index"
        >
          <div class="error-msg">{{ error.$message }}</div>
        </div>
      </div>

      <div class="grid">
        <div class="user-box">
          <input
            type="password"
            v-model.lazy="v$.form.password.$model"
            required="required"
          />
          <label for=""> Password</label>
          <div class="pre-icon os-icon os-icon-fingerprint"></div>
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.password.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>

        <div class="user-box">
          <input
            type="password"
            v-model.lazy="v$.form.confirmPassword.$model"
            required="required"
          />
          <label for="">Confirm Password</label>
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.confirmPassword.$errors"
            :key="index"
          >
            <div class="error-msg">{{ error.$message }}</div>
          </div>
        </div>
      </div>

      <div class="user-box">
        <input type="text" v-model.lazy="v$.form.refcode" optional />
        <label for=""> Reference code:</label>
      </div>
      <div class="pre-icon os-icon os-icon-user-male-circle"></div>

      <!-- Submit Button -->
      <button type="submit">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Create my account
      </button>
    </form>

    <!-- <button @click="submitForm" :disabled="$v.$invalid" class="btn">
      Create my account
    </button> -->
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  sameAs,
  helpers,
} from "@vuelidate/validators";

export default {
  data() {
    return {
      v$: useVuelidate(),

      form: {
        firstName: "",
        lastName: "",
        country: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        refcode: "",
      },
      submitted: false,
    };
  },

  methods: {
    submitForm() {
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
        firstName: {
          required: helpers.withMessage(
            "First name field cannot be empty",
            required
          ),
          minLength: helpers.withMessage(
            ({ $params }) => `First name may not be less than ${$params.min}`,
            minLength(4)
          ),
        },
        lastName: {
          required: helpers.withMessage(
            "Last name field cannot be empty",
            required
          ),
          minLength: helpers.withMessage(
            ({ $params }) => `Last name may not be less than ${$params.min}`,
            minLength(4)
          ),
        },
        country: {
          required: helpers.withMessage(
            "Country field cannot be empty",
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
        password: {
          required: helpers.withMessage(
            "Password field cannot be empty",
            required
          ),
          minLength: helpers.withMessage(
            ({ $params }) => `Password may not be less than ${$params.min}`,
            minLength(6)
          ),
        },
        confirmPassword: {
          required: helpers.withMessage(
            "Confirm password field cannot be empty",
            required
          ),
          sameAs: helpers.withMessage(
            "Password not matched..!",
            sameAs(this.form.password)
          ),
        },
      },
    };
  },
};
</script>

<style scoped>
.login-box {
  width: 100%;
  border-radius: 10px;
}

.login-box h2 {
  margin: 3rem 0 0.8rem;
  color: var(--aaj-primary-h);
  font-size: 1.9rem;
  font-weight: 600;
  text-align: center;
}
.login-box p {
  color: var(--aaj-gray-dark);
  text-align: center;
  font-size: 0.9rem;
  margin: 0 0 1.5rem;
}

.login-box .user-box {
  position: relative;
}
.login-box .user-box input {
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
/* .login-box .user-box input:required {
  border-bottom: 1px solid var(--aaj-orange-red-h);
} */
/* .login-box .user-box input:optional {
  border-bottom: 1px solid var(--aaj-primary-h);
} */
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5rem 0;
  font-size: 1rem;
  color: var(--aaj-gray-dark);
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input[type="text"]:focus ~ label,
.login-box .user-box input[type="tel"]:focus ~ label,
.login-box .user-box input[type="email"]:focus ~ label,
.login-box .user-box input[type="password"]:focus ~ label,
.login-box .user-box input[type="text"]:valid ~ label,
.login-box .user-box input[type="tel"]:valid ~ label,
.login-box .user-box input[type="email"]:valid ~ label,
.login-box .user-box input[type="password"]:valid ~ label {
  top: -15px;
  left: 0;
  color: var(--aaj-yellow-green-h);
  font-size: 0.8rem;
}

.login-box form button {
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

.login-box button:hover {
  color: var(--aaj-gray-light);
  border-radius: 30px;
  box-shadow: 0 0 5px var(--aaj-gray-light), 0 0 25px var(--aaj-gray-light),
    0 0 30px var(--aaj-gray-light), 0 0 80px var(--aaj-gray-light);
}

.login-box form button:disabled {
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
  .login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
  }

  .login-box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
  }

  .login-box .user-box {
    position: relative;
  }

  .login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 1rem;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
  }
  .login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 1rem;
    color: #fff;
    pointer-events: none;
    transition: 0.5s;
  }

  .login-box .user-box input:focus ~ label,
  .login-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: var(--aaj-primary-h);
    font-size: 12px;
  }

  .login-box form button {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    font-size: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 2px;
  }

  .login-box a:hover {
    background: var(--aaj-primary-h);
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px var(--aaj-primary-h), 0 0 25px var(--aaj-primary-h),
      0 0 50px var(--aaj-primary-h), 0 0 100px var(--aaj-primary-h);
  }

  .login-box a span {
    position: absolute;
    display: block;
  }

  .login-box a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--aaj-blue-h));
    animation: btn-anim1 1s linear infinite;
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  .login-box a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, var(--aaj-blue-h));
    animation: btn-anim2 1s linear infinite;
    animation-delay: 0.25s;
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  .login-box a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, var(--aaj-blue-h));
    animation: btn-anim3 1s linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  .login-box a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, var(--aaj-blue-h));
    animation: btn-anim4 1s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
}
</style>
