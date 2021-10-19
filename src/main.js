if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("/service-worker.js").then(
      function (registration) {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function (err) {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

/* eslint-disable no-new */
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import VueStepWizard from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";

createApp(App)
  .use(store)
  .use(router)
  .use(NProgress)
  .use(VueStepWizard)
  .mount("#app");
