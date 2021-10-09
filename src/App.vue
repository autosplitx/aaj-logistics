<template>
  <div class="app">
    <div class="loader" v-if="loading"></div>
    <PageLoader />
    <router-view></router-view>
    <NotificationsList />

    <div class="snackbar" :class="{ show: updateExists }">
      <h6>Update is available...</h6>
      <button class="btn btn-sm" @click="refreshApp">Update</button>
    </div>
  </div>
</template>

<script>
import update from "./mixins/update";
import PageLoader from "./components/PageLoader.vue";
import NotificationsList from "./components/NotificationsList.vue";

export default {
  name: "App",
  components: { PageLoader, NotificationsList },

  data() {
    return {
      loading: false,
    };
  },

  methods: {},

  mixins: [update],
};
</script>

<style>
.app {
  position: relative;
}

.loader {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  /* background-color: hsla(13, 70%, 70%, 0.5); */
  background-image: url("./assets/loading.gif");
  background-size: 20%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 10000000;
}

#nprogress .bar {
  background: var(--aaj-yellow-green) !important;
  height: 5px !important;
}

#nprogress .peg {
  box-shadow: 0 0 10px var(--aaj-yellow-green), 0 0 5px var(--aaj-yellow);
}

#nprogress .spinner .spinner-icon {
  border-top-color: var(--aaj-yellow-green);
  border-left-color: var(--aaj-yellow);
  width: 2rem;
  height: 2rem;
}

.snackbar {
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  min-width: 250px;
  margin-left: -148px;
  margin-bottom: 3rem;
  background-color: rgba(218, 83, 44, 0.8);
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 1rem;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

.snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

.snackbar h6 {
  color: #fff;
  margin-right: 10px;
  margin-bottom: 0;
}

.snackbar .btn {
  background-color: rgba(218, 83, 44, 0.4);
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

.view-enter-active,
.view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}
.view-enter-active {
  transition-delay: 0.5s;
}
.view-enter {
  opacity: 0;
  transform: translateY(-100px);
}
.view-enter-to {
  opacity: 1;
  transform: translateY(0px);
}
.view-leave {
  opacity: 1;
  transform: translateY(0px);
}
.view-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

@media screen and (min-width: 641px) {
  .loader {
    background-size: 6%;
  }
}
</style>
