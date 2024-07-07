<template>
  <TheNavbar />
  <div style="padding: 80px 0px">
    <router-view :key="route.path" />
  </div>
  <TheFooter />
</template>

<script setup>
import TheNavbar from "./components/layouts/TheNavbar.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

:root {
  --red-color: #ec665d;
  --light-pink-color: #f4a39e;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

html,
body {
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  height: 100%;
  background-color: var(--light-pink-color) !important;
}

body a {
  color: unset;
  text-decoration: none;
  cursor: pointer;
}

.bg-red {
  background-color: var(--red-color) !important;
}

.bg-light-pink {
  background-color: var(--light-pink-color) !important;
}

.navbar {
  --bs-navbar-nav-link-padding-x: 1rem !important;
}

.card-title {
  height: 90px;
  max-height: 90px;
}
</style>
