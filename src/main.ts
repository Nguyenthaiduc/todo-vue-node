import { createApp } from "vue";
import App from "./App.vue";
import type { App as Application } from "vue";
import router from "./router";
import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";

import { registerGlobalComponent } from "@/utils/import";
import { projectAuth } from "@/config/firebase";

let app : Application;
projectAuth.onAuthStateChanged(() => {
  if (!app) {
    const app = createApp(App);
    
    app.use(registerGlobalComponent);
    
    app.use(router);
    
    app.mount("#app");

  } 
});
