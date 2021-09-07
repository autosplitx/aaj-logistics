<template>
  <Logo />

  <div class="tabs effect-homesidebar">
    <input
      type="radio"
      id="tab-login"
      name="tab-effect-homesidebar"
      checked="checked"
    />
    <span>Login</span>

    <input type="radio" id="tab-reg" name="tab-effect-homesidebar" />
    <span>Register</span>

    <div class="line ease"></div>

    <div class="tab-content">
      <section id="tab-item-login">
        <Login />
      </section>

      <section id="tab-item-reg">
        <Signup />
      </section>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import Login from "../components/Auth/Login.vue";
import Signup from "../components/Auth/Signup.vue";

export default {
  name: "Registration",
  components: { Logo, Login, Signup },
};
</script>

<style scoped>
.tabs {
  /* background: var(--aaj-primary-h10); */
  position: relative;
}

.tabs > input[type="radio"],
.tabs > span {
  width: 50%;
  height: 45px;
  line-height: 45px;
  position: absolute;
  top: 0;
}

.tabs > input[type="radio"] {
  cursor: pointer;
  filter: alpha(opacity=0);
  opacity: 0;
  position: absolute;
  z-index: 99;
}

.tabs > span {
  text-align: center;
  overflow: hidden;
}

.tabs > span i,
.tabs > span {
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
}

.tabs > input[type="radio"]:hover + span {
  background: var(--aaj-primary-h1);
  color: var(--aaj-gray-light);
}

.effect-homesidebar .line {
  background: var(--aaj-primary-h);
  width: 50%;
  height: 4px;
  border-radius: 10px;
  position: absolute;
  top: 41px;
}

#tab-login,
#tab-login + span {
  left: 0;
}

#tab-reg,
#tab-reg + span {
  right: 0;
}

#tab-login:checked ~ .line {
  left: 0;
}

.tab-content {
  padding: 2rem 1rem 1rem;
  width: 100%;
  height: 100vh;
}

.tab-content section {
  display: none;
}

.tab-content section h1 {
  margin-top: 15px;
  font-size: 1rem;
  font-weight: 100;
  text-align: center;
}

#tab-login:checked ~ .tab-content #tab-item-login {
  display: block;
}

#tab-reg:checked ~ .line {
  right: 0;
}

#tab-reg:checked ~ .tab-content #tab-item-reg {
  display: block;
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}

@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
  .tabs > input[type="radio"],
  .tabs > span {
    display: none;
  }

  .effect-homesidebar .line {
    display: none;
  }

  .tab-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    padding: 0 1rem 1rem;
    height: auto;
  }

  .tab-content section {
    display: block;
  }
  
}
</style>
