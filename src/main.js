import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import VueProgressBar from "@aacassandra/vue3-progressbar";

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
  .mount("#app");
