import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/initialPage/HomeView.vue"),
  },
  {
    path: "/auth",
    name: "login",
    component: () => import("../views/login/Auth.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/initialPage/Dashboard.vue"),
  },
  {
    path: "/mng-projects",
    name: "mng-projects",
    component: () => import("../views/initialPage/ManageProjects.vue"),
  },
  {
    path: "/cloud-services",
    name: "cloud-services",
    component: () => import("../views/initialPage/CloudServices.vue"),
  },
  {
    path: "/contrib",
    name: "contrib",
    component: () => import("../views/initialPage/Contribute.vue"),
  },
  {
    path: "/mng-data",
    name: "mng-data",
    component: () => import("../views/initialPage/ManageDatasets.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
