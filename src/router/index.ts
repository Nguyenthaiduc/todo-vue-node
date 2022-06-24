import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/register",
      name: "Register",
      meta: {
        layout: "auth",
      },

      component: () => import("@/views/RegisterView.vue"),
    },
    {
      path: "/login",
      name: "Login",
      meta: {
        layout: "auth",
      },

      component: () => import("@/views/LoginView.vue"),
    },
  ],
});

export default router;
