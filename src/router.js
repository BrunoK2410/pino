import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutUsPage from "./pages/AboutUsPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import ListPage from "./pages/ListPage.vue";
import AnimalDetailsPage from "./pages/AnimalDetailsPage.vue";
import ArticleDetailsPage from "./pages/ArticleDetailsPage.vue";

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
  },
  { path: "/news", name: "News", component: ListPage },
  {
    path: "/news/:slug",
    name: "Article details",
    component: ArticleDetailsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
