import Vue from "vue";
//import store from "@/store";
import VueRouter from "vue-router";
import Boards from "../views/Boards.vue";
import LogIn from "../views/LogIn"
Vue.use(VueRouter);

const routes = [
  {
    path: "/boards",
    name: "boards",
    component: Boards
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "Log In",
    component: LogIn
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
