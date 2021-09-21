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

import VueProgressBar from "@aacassandra/vue3-progressbar";
// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import VueStepWizard from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";

const options = {
  position: "fixed",
  height: "3px",
  color: "#86c228ff",
  failedColor: "#874b4b",
  thickness: "5px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
};

createApp(App)
  .use(store)
  .use(router)
  .use(VueProgressBar, options)
  .use(VueStepWizard)
  // .use(VueSidebarMenu)
  .mount("#app");
