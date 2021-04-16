import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Quotes from "../views/Quotes.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/:username",
    name: "Quotes",
    component: Quotes,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
