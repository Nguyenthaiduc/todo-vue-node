import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

import { registerGlobalComponent } from "@/utils/import";
import { projectAuth } from "@/config/firebase";
import axios from "axios";

axios.defaults.baseURL = "https://api-todo-nest.herokuapp.com/";

let app: unknown;
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(registerGlobalComponent).use(router).mount("#app");

    // app.use(registerGlobalComponent);

    // app.use(router);

    // app.mount("#app");
  }
});
