import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { auth } from "@/auth/firebase";
import "@/styles/global.css";
import handleLocalStorage from "@/helpers/handleLocalStorage";

let app;
auth.onAuthStateChanged((user) => {
  handleLocalStorage(user);
  if (!app) {
    app = createApp(App)
      .use(store)
      .use(router)
      .mount("#app");
  }
});
