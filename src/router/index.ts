import { createRouter, createWebHistory } from "vue-router";
import type { RouteLocationNormalized } from "vue-router";
import { projectAuth } from "@/config/firebase";
//Auth Guard
const requireAuth = (to: RouteLocationNormalized, from: RouteLocationNormalized,next: Function) => {
  const user = projectAuth.currentUser;

  console.log("Enter",user)
  if(!user) next({name: 'Login', params: {}})
  else next();
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/HomeView.vue"),
      beforeEnter: requireAuth
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
    {
      path: "/logout",
      name: "Logout",

      component: () => import("@/views/LogoutView.vue"),
    },
  ],
});

export default router;
