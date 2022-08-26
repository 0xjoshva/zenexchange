import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/BlogView.vue"),
  },
  {
    path: "/exchange",
    name: "exchange",
    component: () => import("../views/ExchangeView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/DashboardView.vue"),
  },
  {
    path: "/support",
    name: "support",
    component: () => import("../views/SupportView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
