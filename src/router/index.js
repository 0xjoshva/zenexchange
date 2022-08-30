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
    path: "/market-overview",
    name: "markets",
    component: () => import("../views/MarketsView.vue"),
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
  {
    path: "/register",
    name: "register",
    component: () => import("../views/RegisterView.vue"),
  },
  {
    path: "/users",
    name: "users",
    component: () => import("../views/UsersView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
