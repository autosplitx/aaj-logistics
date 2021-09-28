<template>
  <footer>
    <div class="container">
      <div class="flex">
        <router-link :to="{ name: 'Home' }" exact>
          <i class="fa fa-home"></i>
          <p>Home</p>
        </router-link>
        <template v-if="isAuth">
          <router-link :to="{ name: 'user.dashboard' }" exact>
            <i class="fa fa-tachometer-alt"></i>
            <p>Dashboard</p>
          </router-link>
        </template>
        <template v-else>
          <router-link :to="{ name: 'Registration' }" exact>
            <i class="fa fa-sign-in-alt"></i>
          </router-link>
        </template>
        <router-link :to="{ name: 'user.profile' }" exact>
          <i class="fa fa-user-alt"></i>
          <p>Profile</p>
        </router-link>
        <!-- <div class="notification">
          <i class="fa fa-bell"></i>
          <div class="counter">3</div>
        </div> -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "UserFooter",
  props: ["isAuth"],
};
</script>

<style scoped>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  text-align: center;
  box-shadow: 0 3px 1rem rgba(0, 0, 0, 0.2);
  z-index: 2;
}

footer .container {
  padding: 1rem;
}

footer .container .flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer .container .flex p {
  font-size: 0.7rem;
}

.router-link-exact-active {
  color: var(--aaj-primary-h1);
}

/* .flex i {
  color: var(--aaj-blue-h1);
} */

.notification {
  position: relative;
}

.counter {
  position: absolute;
  top: -10px;
  right: -18px;
  color: #fff;
  background: var(--aaj-primary-h1);
  max-width: 50px;
  height: 10px;
  border-radius: 25px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  footer .container {
    padding: 1.5rem 4rem;
  }

  .flex i {
    font-size: 1.5rem;
  }

  /* .counter {
    top: -12px;
    right: -17px;
    padding: 0.8rem;
  } */
}

@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
}
</style>
