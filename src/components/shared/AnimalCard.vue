<template>
  <div
    class="row gap-5 mx-0 gap-sm-0 justify-content-center justify-content-sm-start"
  >
    <div
      class="animal-card-container col-6 my-sm-5 col-md-4 col-xl-2 d-flex justify-content-center"
      :style="{
        opacity: 0,
        transform: 'translateY(100px)',
        transition: 'all 0.7s ease',
      }"
      v-for="animal in animals"
      :key="animal.id"
    >
      <div
        class="position-relative animal-card d-flex align-items-center justify-content-center"
      >
        <router-link
          :to="
            animalType === 'dog'
              ? {
                  path: `/dogs/${animal.name}${animal.id}`,
                  params: { id: animal.id },
                }
              : {
                  path: `/cats/${animal.name}${animal.id}`,
                  props: { id: animal.id },
                }
          "
        >
          <img
            :src="animal.images[0]"
            class="img-fluid animal-image"
            alt="..."
            style="max-height: 150px; min-width: 200px"
          />
          <div class="text position-absolute animal-card-text">
            <p>{{ animal.name }} ({{ animal.gender }})</p>
            <p>{{ animal.breed }}</p>
          </div></router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, nextTick } from "vue";

defineProps({
  animals: Array,
  animalType: String,
});

const isSmallViewport = window.innerWidth < 362;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-animation");
        observer.unobserve(entry.target);
      }
    });
  },
  { rootMargin: isSmallViewport ? "0px 0px 0px 200px" : "100px" }
);

onMounted(() => {
  nextTick(() => {
    const animalCards = Array.from(
      document.querySelectorAll(".animal-card-container")
    );

    animalCards.forEach((element, index) => {
      element.style.transitionDelay = `${0.2 * index * 0.3}s`;
      observer.observe(element);
    });
  });
});
</script>

<style scoped>
.animal-card-container {
  min-width: 230px;
  filter: drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.5));
  overflow: hidden;
}

.scroll-animation {
  opacity: 1 !important;
  transform: translateX(0) !important;
}

.animal-card {
  clip-path: circle(42%);
  background-color: var(--red-color);
}

.animal-image {
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  backface-visibility: hidden;
  clip-path: circle(40%);
  object-fit: contain;
}

.animal-card-text {
  color: #ffffff;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  z-index: 2;
  overflow: hidden;
}

.animal-card-text p {
  margin-bottom: 0.5rem;
}

.animal-card:hover .animal-card-text {
  opacity: 1;
}

.animal-card:hover .animal-image {
  transform: scale(1.1);

  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.animal-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 12px;
  width: calc(100% - 24px);
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  clip-path: circle(42%);
  transition: background-color 0.5s ease, transform 0.5s ease;
  z-index: 1;
  pointer-events: none;
}
.animal-card:hover::before {
  background-color: rgba(0, 0, 0, 0.5);
  transform: scale(1.1);
}
</style>
