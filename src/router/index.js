import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      layout: "index",
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/news",
    name: "news",
    meta: {
      layout: "index",
    },
    component: () => import("../views/News.vue"),
  },
  {
    path: "/about",
    name: "about",
    meta: {
      layout: "index",
    },
    component: () => import("../views/About.vue"),
  },
  {
    path: "/bulletin-board",
    name: "bulletinBoard",
    meta: {
      layout: "index",
    },
    component: () => import("../views/BulletinBoard.vue"),
  },
  {
    path: "/blogs",
    name: "blogs",
    meta: {
      layout: "index",
    },
    component: () => import("../views/Blogs.vue"),
  },
  {
    path: "/articles",
    name: "articles",
    meta: {
      layout: "index",
    },
    component: () => import("../views/Articles.vue"),
  },
  {
    path: "/seeding",
    name: "seeding",
    meta: {
      layout: "index",
    },
    component: () => import("../views/Seeding.vue"),
  },
  {
    path: "/сalendars",
    name: "calendars",
    meta: {
      layout: "index",
    },
    component: () => import("../views/Calendars.vue"),
  },
  {
    path: "/account",
    name: "account",
    meta: {
      layout: "index",
    },
    component: () => import("../views/Account.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
