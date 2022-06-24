import { defineAsyncComponent } from "vue";
import type { App as Application } from "vue";

export function registerGlobalComponent(app: Application ) {
  app.component('auth-layout', defineAsyncComponent(() => import("@/layouts/auth.vue")));
  app.component('default-layout', defineAsyncComponent(() => import("@/layouts/default.vue")));
}
