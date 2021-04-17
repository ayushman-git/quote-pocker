import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Quotes from "../views/Quotes.vue";

import { auth } from "@/auth/firebase";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user/:username",
    name: "Quotes",
    component: Quotes,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/");
  } else {
    next();
  }
});

export default router;
