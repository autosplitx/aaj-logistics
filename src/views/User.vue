<template>
  <!-- <Logo /> -->
  <!-- <Sidebar :userName="userName" /> -->

  <div class="user">
    <div class="container">
      <div class="header">
        <div class="toggle-bars">
          <router-link :to="{ name: 'user.dashboard' }"
            ><img src="/img/aaj/user1.png" alt="Bars"
          /></router-link>
        </div>
        <div class="notification">
          <img src="/img/aaj/bell.svg" alt="Notification" />
          <!-- <div class="counter">2</div> -->
        </div>
      </div>
    </div>
  </div>

  <router-view></router-view>

  <!-- <Customer :userName="userName" :greetings="greetings" /> -->
</template>

<script>
// import Sidebar from "../components/Customer/Sidebar.vue";

// eslint-disable-next-line no-unused-vars
export default {
  name: "User",

  data() {
    return {};
  },
};
</script>

<style scoped>
.user {
  background: var(--aaj-primary-h);
  padding: 1rem;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.toggle-bars img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--aaj-primary-h10);
}
.notification img {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}

.notification {
  position: relative;
}

/* .counter {
  display: inline-block;
  position: fixed;
  top: 5px;
  right: 5px;
  color: #fff;
  background: var(--aaj-primary-h10);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
} */

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
}

@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
  .user {
    background: var(--aaj-primary-h);
    padding: 1rem;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .notification img {
    width: 20px;
    height: 20px;
  }

  .notification {
    position: relative;
  }

  /* .counter {
    top: 5px;
    right: 95px;
    color: #fff;
    background: var(--aaj-primary-h10);
    width: 10px;
    height: 10px;
  } */
}
</style>
