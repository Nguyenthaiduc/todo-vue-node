import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      meta: {
        layout: "default",
      },
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      meta: {
        layout: "auth",
      },

      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
