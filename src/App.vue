<template>
  <TheNavbar />
  <!-- <div class="background-image"></div> -->
  <div style="padding: 80px 0px"><router-view /></div>
  <TheFooter />
</template>

<script setup>
import TheNavbar from "./components/layouts/TheNavbar.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

:root {
  --red-color: #ec665d;
  --light-pink-color: #f4a39e;
}

#app {
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html,
body {
  font-family: "Playfair Display", serif;
  font-optical-sizing: auto;
  height: 100%;
  background-color: var(--light-pink-color) !important;
}

/* .background-image {
  background-image: url("./assets/background-image.jpg");
  background-repeat: no-repeat;
  background-position: 45% -40%;
  background-size: cover;
  height: 100vh;
  width: 100%;
  opacity: 0.7;
  filter: blur(3px);
  -webkit-filter: blur(3px);
  position: fixed;
  z-index: -1;
} */

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
