import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/how",
    name: "How",
    component: () => import("../views/How.vue"),
  },
  {
    path: "/pricing",
    name: "Rates",
    component: () => import("../views/Rates.vue"),
  },
  {
    path: "/articles",
    name: "Articles",
    component: () => import("../views/Articles.vue"),
  },
  {
    path: "/partners",
    name: "Partners",
    component: () => import("../views/Partners.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: "hash",
  routes,
});

export default router;
