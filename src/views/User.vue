<template>
  <!-- <Sidebar :user="user" :isAuth="authenticated" :openSidebar="openSidebar" /> -->

  <div class="user">
    <div class="container">
      <div class="header">
        <router-link :to="{ name: 'user.dashboard' }">
          <img src="/img/aaj/user1.png" alt="Customer's Avatar" />
        </router-link>

        <!-- <template v-if="!openSidebar">
          <div class="toggle-bars" @click="toggleSidebar">
            <i class="fa fa-bars"></i>
          </div>
          <img src="/img/aaj/user1.png" alt="AAJExpress Logo" />
        </template>
        <template v-else>
          <div class="toggle-bars move" @click="toggleSidebar">
            <i class="fa fa-times"></i>
          </div>
        </template> -->
        <div class="notification">
          <button @click.prevent="logout">
            <i class="fa fa-power-off logout"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <Footer :isAuth="authenticated" />

  <router-view></router-view>
</template>

<script>
import Footer from "@/components/Users/Footer.vue";
import { mapGetters, mapActions } from "vuex";
// import Sidebar from "../components/Users/Sidebar.vue";

export default {
  name: "User",
  components: { Footer },

  data() {
    return { openSidebar: false };
  },

  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
    }),
  },

  methods: {
    ...mapActions("auth", ["logoutUser"]),

    logout() {
      this.logoutUser({ aksi: "logout" });
    },

    toggleSidebar() {
      this.openSidebar = !this.openSidebar;
    },
  },

  // mounted() {
  //   this.getAuthUser();
  // },
};
</script>

<style scoped>
.user {
  background: var(--aaj-primary-h);
  /* padding: 1rem; */
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.8rem 0.5rem;
}
.toggle-bars,
.notification {
  color: var(--aaj-blue-h1);
}

.notification button {
  font-size: 1rem;
  text-decoration: none;
  margin-left: 20px;
  cursor: pointer;
  background: none;
  outline: none;
  border: 0;
}

.notification button i {
  width: 30px;
  height: 30px;
  color: var(--aaj-blue-h1);
  font-size: 1.2rem;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  padding: 0.3rem;
  /* margin-right: 1rem; */
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 50%;
}

.header img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: block;
}

.toggle-bars.move {
  position: absolute;
  top: 15px;
  right: 15px;
  color: #fff;
  z-index: 15;
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
  .toggle-bars {
    display: none;
  }

  .header img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: block;
  }
}

@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
  .user {
    background: var(--aaj-primary-h);
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
