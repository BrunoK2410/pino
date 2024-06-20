import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import ListPage from "./pages/animals/ListPage.vue";

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutUsPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactPage,
  },
  {
    path: "/dogs",
    name: "Dogs",
    component: ListPage,
  },
  {
    path: "/cats",
    name: "Cats",
    component: ListPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
