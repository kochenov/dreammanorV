import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      layout: "index",
      parent: "home",
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/blogers/top",
    name: "BlogersTop",
    meta: {
      layout: "index",
      parent: "home",
      breadcrumbs: [
        {
          name: "Блогеры",
          url: "/blogers",
        },
        {
          name: "Топ деревенских блогеров",
          url: "/blogers/top",
        },
      ],
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/video/top",
    name: "VideoTop",
    meta: {
      layout: "index",
      parent: "home",
      breadcrumbs: [
        {
          name: "Видеоролики",
          url: "/video",
        },
        {
          name: "Топ деревенских блогеров",
          url: "/video/top",
        },
      ],
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/communities",
    name: "Communities",
    meta: {
      layout: "index",
      parent: "home",
      breadcrumbs: [
        {
          name: "Список сообществ",
          url: "/сommunities",
        },
      ],
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/authors/register",
    name: "AuthorRegister",
    meta: {
      layout: "index",
      parent: "home",
      breadcrumbs: [
        {
          name: "Список авторов",
          url: "/authors",
        },
        {
          name: "Регистранция нового автора / Заявка ",
          url: "/authors/register",
        },
      ],
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/news",
    name: "news",
    meta: {
      layout: "index",
      parent: "news",
      breadcrumbs: [
        {
          name: "Новости",
          url: "/news",
        },
        {
          name: "Все новости",
          url: "/news/action",
        },
      ],
    },
    component: () => import("../views/News.vue"),
  },
  {
    path: "/news/action",
    name: "newsAction",
    meta: {
      layout: "index",
      parent: "news",
      breadcrumbs: [
        {
          name: "Новости",
          url: "/news",
        },
        {
          name: "События",
          url: "/news/action",
        },
      ],
    },
    component: () => import("../views/News.vue"),
  },
  {
    name: "newUsers",
    path: "/users/new",
    meta: {
      layout: "index",
      parent: "news",
      breadcrumbs: [
        {
          name: "Новости",
          url: "/news",
        },
        {
          name: "События",
          url: "/news/action",
        },
      ],
    },
    component: () => import("../views/News.vue"),
  },
  {
    path: "/records",
    name: "AuthorRecords",
    meta: {
      layout: "index",
      parent: "news",
      breadcrumbs: [
        {
          name: "Рекорды сайта",
          url: "/authors/records",
        },
      ],
    },
    component: () => import("../views/Home.vue"),
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
      parent: "seeding",
      breadcrumbs: [
        {
          name: "Расчёты",
          url: "/seeding",
        },
        {
          name: "Калькулятор посева томатов / выращивание томатов по технологии",
          url: "/seeding",
        },
      ],
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
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: {
      layout: "index",
    },
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
