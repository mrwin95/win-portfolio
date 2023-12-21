import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChatView from "@/views/ChatView.vue";
import ArticlesView from "@/views/ArticleView.vue";
import { loadLayoutMiddleware } from "./middleware/loadLayoutMiddleware";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      layout: "AppLayoutUser",
    },
  },
  {
    path: "/articles",
    component: ArticlesView,
    meta: {
      layout: "AppLayoutUser",
    },
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatView,
    meta: {
      layout: "AppLayoutUser",
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      layout: "AppLayoutUser",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Before each route changing the layoutLoadMiddleware middleware is executing

router.beforeEach(loadLayoutMiddleware);

export default router;
