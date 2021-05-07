import Vue from "vue";
import VueRouter from "vue-router";
import Kata1 from "@/views/Kata1.vue";
import Kata2 from "@/views/Kata2.vue";
import Kata3 from "@/views/Kata3.vue";
import Kata4 from "@/views/Kata4.vue";
import Kata5 from "@/views/Kata5.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/kata1",
    name: "Kata 1",
    component: Kata1,
  },
  {
    path: "/kata2",
    name: "Kata 2",
    component: Kata2,
  },
  {
    path: "/kata3",
    name: "Kata 3",
    component: Kata3,
  },
  {
    path: "/kata4",
    name: "Kata 4",
    component: Kata4,
  },
  {
    path: "/kata5",
    name: "Kata 5",
    component: Kata5,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
