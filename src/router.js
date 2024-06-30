import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import ListPage from "./pages/ListPage.vue";
import AnimalDetailsPage from "./pages/AnimalDetailsPage.vue";

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
    path: "/dogs/:slug",
    name: "Dog details",
    component: AnimalDetailsPage,
    props: true,
  },
  {
    path: "/cats",
    name: "Cats",
    component: ListPage,
  },
  {
    path: "/cats/:slug",
    name: "Cat details",
    component: AnimalDetailsPage,
    props: true,
  },
  { path: "/news", name: "News", component: ListPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
