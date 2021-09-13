<template>
  <div class="backdrop" :class="{ backdropOpen: openSidebar }"></div>
  <div class="homesidebar" :class="{ sidebarOpen: openSidebar }">
    <div class="sidebar-logo">
      <div class="flex">
        <router-link :to="{ name: 'user.dashboard' }">
          <img src="/img/aaj/user1.png" alt="Customer's Avatar" />
        </router-link>
        <div class="sidebar-text">
          <p>Welcome</p>
          <h5 v-if="user">{{ user.first_name }}</h5>
        </div>
      </div>

      <div class="divider"></div>

      <div class="sidebar-tabs">
        <div class="sidebar-list">
          <ul>
            <li class="sidebar-item">
              <router-link :to="{ name: 'Home' }">
                <i class="fa fa-home"></i> Home
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link :to="{ name: 'user.dashboard' }">
                <i class="fa fa-tachometer"></i> Dashboard
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link :to="{ name: 'user.requestpayment' }">
                <i class="fa fa-money-check-alt"></i> Request Payment
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link :to="{ name: 'user.rate' }">
                <i class="fa fa-percent"></i> Rate
              </router-link>
            </li>
            <li class="sidebar-item">
              <router-link :to="{ name: 'user.wallet' }">
                <i class="fa fa-wallet"></i> Wallet
              </router-link>
            </li>
            <li class="sidebar-item">
              <button @click.prevent="logout">
                <i class="fa fa-power-off logout"></i> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Sidebar",
  props: ["openSidebar", "user", "isAuth"],

  methods: {
    ...mapActions("auth", ["logoutUser"]),

    logout() {
      this.logoutUser({ aksi: "logout" });
    },
  },
};
</script>

<style scoped>
.toggle-bars {
  display: block;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;
  display: none;
}
.backdropOpen {
  display: block;
}

.homesidebar {
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  width: 100%;
  max-width: 18rem;
  height: 100vh;
  /* overflow-y: scroll; */
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  -webkit-backdrop-filter: blur(100px);
  backdrop-filter: blur(100px);
  z-index: 10;
}
.sidebarOpen {
  transform: translateX(0);
}

.homesidebar ul li a.white {
  display: block;
  padding: 0.5rem 0.8rem;
  color: var(--color-gray-darker);
}

.homesidebar::-webkit-scrollbar {
  width: 5px;
  height: 8px;
}

.homesidebar::-webkit-scrollbar-thumb {
  background: linear-gradient(to right, #d9534f, #ff165e, #d9534f);
  border-radius: 10px;
}

.homesidebar::-webkit-scrollbar-track {
  background: var(--color-gray-default);
}

.sidebar-logo .flex {
  justify-content: space-between;
  padding: 0.5rem 2.5rem 0.5rem 0.5rem;
  letter-spacing: 1.5px;
  font-size: 1.5rem;
  font-weight: 400;
  text-align: right;
  text-transform: uppercase;
  color: #fff;
}
.sidebar-logo .flex h5 {
  color: #fff;
}
.sidebar-logo img {
  width: 50px;
  height: 50px;
  display: block;
}
.sidebar-text p {
  font-size: 0.8rem;
  text-transform: capitalize;
  color: #fff;
}
.sidebar-tabs {
  padding: 1rem;
}

/* .sidebar-list {
} */

.sidebar-item {
  padding: 0.8rem 1rem;
  font-size: 0.8rem;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid var(--aaj-primary-h1);
}

.sidebar-item:hover {
  border-bottom: 1px solid var(--color-gray-darker);
}

.sidebar-list:last-child {
  margin-bottom: 3rem;
}

.sidebar-item a,
button {
  width: 100%;
  font-size: 1rem;
  font-weight: 300;
  text-decoration: none;
  display: flex;
  align-items: center;
  line-height: 2rem;
  color: #fff;
  background: none;
  outline: none;
  border: 0;
}

.sidebar-item i {
  width: 40px;
  height: 40px;
  color: var(--aaj-blue-h1);
  font-size: 1.2rem;
  display: inline-flex;
  justify-content: center;
  align-content: center;
  padding: 0.6rem;
  margin-right: 1rem;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
i.logout {
  color: var(--aaj-primary-h1);
}

@supports not (backdrop-filter: blur(15px)) {
  .divider {
    border-bottom: var(--color-gray-darker) !important;
  }
  .homesidebar {
    background-color: var(--color-gray-light);
  }

  .sidebar-logo .flex,
  .sidebar-text p,
  .sidebar-item a,
  .sidebar-logo {
    color: var(--color-gray-darker) !important;
  }
  .sidebar-logo .flex h5 {
    color: var(--aaj-primary-h1);
  }
  .sidebar-item::after {
    background-color: rgba(0, 0, 0, 0.1) !important;
  }

  .sidebar-tabs > span {
    color: var(--color-gray-darker) !important;
  }

  .sidebar-tabs > input:checked + span {
    background: rgba(0, 0, 0, 0.1) !important;
  }
}

@media (min-width: 320px) {
  /* smartphones, iPhone, portrait 480x320 phones */
}

@media (min-width: 481px) {
  /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
}

@media (min-width: 641px) {
  /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
}

@media (min-width: 961px) {
  /* tablet, landscape iPad, lo-res laptops ands desktops */
}

@media (min-width: 1025px) {
  /* big landscape tablets, laptops, and desktops */
  /* .toggle-bars {
    margin-right: 10px;
    cursor: pointer;
    display: none;
  } */
}

@media (min-width: 1281px) {
  /* hi-res laptops and desktops */
}
</style>
