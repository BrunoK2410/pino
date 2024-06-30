<template>
  <nav class="navbar navbar-expand fixed-top bg-red" style="height: 80px">
    <div class="container-fluid overflow-hidden">
      <router-link
        to="/home"
        class="navbar-brand"
        style="width: 150px; height: 70px; transform: translateY(-25px)"
        ><img src="../../assets/logo5.png" alt="Bootstrap" class="img-fluid"
      /></router-link>
      <a
        class="navbar-toggler d-block d-md-none border-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvas"
        aria-controls="offcanvas"
      >
        <span class="navbar-toggler-icon"></span>
      </a>
      <div class="navbar-nav d-none d-md-flex align-items-center">
        <router-link
          to="/home"
          class="nav-link text-center"
          :class="{ active: route.path === '/home' }"
          >Početna</router-link
        >
        <router-link
          to="/dogs"
          class="nav-link text-center"
          :class="{ active: route.path === '/dogs' }"
          >Udomi psa!</router-link
        >
        <router-link
          to="/cats"
          class="nav-link text-center"
          :class="{ active: route.path === '/cats' }"
          >Udomi mačku!</router-link
        ><router-link
          to="/news"
          class="nav-link text-center"
          :class="{ active: route.path === '/news' }"
          >Novosti</router-link
        >
        <router-link
          to="/about"
          class="nav-link text-center"
          :class="{ active: route.path === '/about' }"
          >O nama</router-link
        >
        <router-link
          to="/contact"
          class="nav-link text-center"
          :class="{ active: route.path === '/contact' }"
          >Kontakt</router-link
        >
      </div>
    </div>
  </nav>
  <div
    class="offcanvas offcanvas-start"
    tabindex="-1"
    id="offcanvas"
    aria-labelledby="offcanvasLabel"
  >
    <div class="offcanvas-header">
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <a
      class="d-flex align-items-center justify-content-center position-sticky top-0 logo"
    >
      <img
        src="../../assets/logo5.png"
        style="width: 220px; height: fit-content"
      />
    </a>

    <ul class="navbar-nav align-items-center">
      <li class="nav-item mb-3" data-bs-dismiss="offcanvas">
        <router-link
          to="/home"
          class="nav-link py-2 px-4"
          :class="{ active: route.path === '/home' }"
          >Početna</router-link
        >
      </li>
      <li class="nav-item mb-3" data-bs-dismiss="offcanvas">
        <router-link
          to="/dogs"
          class="nav-link py-2 px-4"
          :class="{ active: route.path === '/dogs' }"
          >Udomi psa!</router-link
        >
      </li>
      <li class="nav-item mb-3" data-bs-dismiss="offcanvas">
        <router-link
          to="/cats"
          class="nav-link py-2 px-4"
          :class="{ active: route.path === '/cats' }"
          >Udomi mačku!</router-link
        >
      </li>
      <li class="nav-item mb-3" data-bs-dismiss="offcanvas">
        <router-link
          to="/about"
          class="nav-link py-2 px-4"
          :class="{ active: route.path === '/about' }"
          >O nama</router-link
        >
      </li>
      <li class="nav-item mb-3" data-bs-dismiss="offcanvas">
        <router-link
          to="/contact"
          class="nav-link py-2 px-4"
          :class="{ active: route.path === '/contact' }"
          >Kontakt</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<style scoped>
.navbar {
  --bs-navbar-toggler-icon-bg: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 1%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e");
  --bs-navbar-toggler-border-color: #ffffff;
}

.nav-link {
  border-bottom: 2px solid transparent;
}

.nav-link.active,
.nav-link:focus,
.nav-link:hover {
  color: #ffffff !important;
  border-color: #ffffff;
}

#offcanvas {
  width: 300px;
  background-color: var(--red-color);
}

.btn-close {
  --bs-btn-close-color: #ffffff;
}

a,
li {
  color: #ffffff;
}
</style>
