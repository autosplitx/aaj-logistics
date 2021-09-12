<template>
  <div>
    <PageLoader />
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
    <NotificationsList />
  </div>
</template>

<script>
import PageLoader from "./components/PageLoader.vue";
import NotificationsList from "./components/NotificationsList.vue";

export default {
  name: "App",
  components: { PageLoader, NotificationsList },

  data() {
    return {};
  },

  mounted() {
    this.$Progress.finish();
  },

  created() {
    this.$Progress.start();
    this.$router.beforeEach((to, from, next) => {
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        this.$Progress.parseMeta(meta);
      }
      this.$Progress.start();
      next();
    });
    // eslint-disable-next-line no-unused-vars
    this.$router.afterEach((to, from) => {
      this.$Progress.finish();
    });
  },
};
</script>

<style>
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
</style>
