<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="min-height: 100vh"
    v-if="isLoading"
  >
    <div
      class="spinner-grow"
      style="width: 3rem; height: 3rem; color: var(--red-color)"
      role="status"
    >
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <template v-else>
    <div
      id="categories"
      class="py-3 d-flex justify-content-around flex-wrap bg-red text-white fw-bold fs-5 gap-3"
      style="filter: brightness(120%); font-family: 'Bellota', system-ui"
    >
      <router-link
        v-if="isDogsPath"
        :to="{ path: '/dogs', query: { category: 'puppy' } }"
        :class="{ active: route.query.category === 'puppy' }"
        >Štenci</router-link
      ><router-link
        v-else
        :to="{ path: '/cats', query: { category: 'kitten' } }"
        :class="{ active: route.query.category === 'kitten' }"
        >Mačići</router-link
      >
      <router-link
        :to="{
          path: isDogsPath ? '/dogs' : '/cats',
          query: { category: 'young' },
        }"
        :class="{ active: route.query.category === 'young' }"
        >Mladi</router-link
      ><router-link
        :to="{
          path: isDogsPath ? '/dogs' : '/cats',
          query: { category: 'adult' },
        }"
        :class="{ active: route.query.category === 'adult' }"
        >Odrasli</router-link
      ><router-link
        :to="{
          path: isDogsPath ? '/dogs' : '/cats',
          query: { category: 'old' },
        }"
        :class="{ active: route.query.category === 'old' }"
        >Stari</router-link
      ><router-link
        :to="{
          path: isDogsPath ? '/dogs' : '/cats',
          query: { category: 'disabled' },
        }"
        :class="{ active: route.query.category === 'disabled' }"
        >Invalidni</router-link
      ><router-link
        :to="{
          path: isDogsPath ? '/dogs' : '/cats',
          query: { category: 'permanent-care' },
        }"
        :class="{ active: route.query.category === 'permanent-care' }"
        >Na trajnom čuvanju</router-link
      ><router-link
        :to="{
          path: isDogsPath ? '/dogs' : '/cats',
          query: { category: 'adopted' },
        }"
        :class="{ active: route.query.category === 'adopted' }"
        >Udomljeni</router-link
      ><router-link
        :to="{
          path: isDogsPath ? '/dogs' : '/cats',
          query: { category: 'in-memoriam' },
        }"
        :class="{ active: route.query.category === 'in-memoriam' }"
        >In memoriam</router-link
      >
    </div>

    <div class="d-flex justify-content-center align-items-center px-2 pt-5">
      <div class="card mb-3 border-0" style="width: 800px">
        <div
          class="image-container d-flex justify-content-center align-items-center position-relative rounded-top"
        >
          <div class="ribbon fs-5">
            {{ animal.name }}
          </div>
          <div
            id="animalImages"
            class="carousel slide bg-red"
            data-bs-theme="dark"
          >
            <div class="carousel-inner">
              <div
                class="carousel-item"
                v-for="(image, index) in animal.images"
                :class="index === 0 ? 'active' : ''"
                :key="index"
              >
                <img :src="image" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#animalImages"
              data-bs-slide="prev"
              v-if="animal.images.length !== 1"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#animalImages"
              data-bs-slide="next"
              v-if="animal.images.length !== 1"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div>
          <div class="card-body text-white bg-red">
            <div
              class="card-text d-flex flex-column align-items-center gap-2 h5"
              style="font-family: 'Bellota', system-ui"
            >
              <span class="text-center">Ime : {{ animal.name }}</span>
              <hr />
              <span class="text-center"
                >Pasmina : {{ animal.breed ? animal.breed : "-" }}</span
              >
              <hr />
              <span class="text-center"
                >Spol : {{ animal.gender === "M" ? "Muško" : "Ženka" }}</span
              >
              <hr />
              <span class="text-center"
                >Rođendan : {{ animal.birthday ? animal.birthday : "-" }}</span
              >
              <hr />
              <span class="text-center"
                >Broj čipa :
                {{ animal.microchip ? animal.microchip : "-" }}</span
              >
              <hr />
              <div class="d-flex w-100 justify-content-evenly">
                <div>
                  <span
                    >Veterinarska obrada :
                    {{ animal.treatment.length === 0 ? "-" : "" }}</span
                  >
                  <ul
                    v-if="animal.treatment.length !== 0"
                    :class="isDogsPath ? 'dog' : 'cat'"
                  >
                    <li
                      v-for="(item, index) in animal.treatment"
                      :key="index"
                      :class="{ 'my-2': index !== animal.treatment.length - 1 }"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div>
                  <span>Kontakt :</span>
                  <ul class="phone">
                    <li class="my-2">091 2622 619</li>
                    <li>091 4214 696</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column align-items-center gap-5 flex-sm-row gap-sm-0"
      :class="
        !prevAnimal ? 'justify-content-sm-end' : 'justify-content-sm-between'
      "
    >
      <animal-card
        v-if="prevAnimal"
        :animals="[prevAnimal]"
        :animalType="isDogsPath ? 'dog' : 'cat'"
      ></animal-card>
      <animal-card
        v-if="nextAnimal"
        :animals="[nextAnimal]"
        :animalType="isDogsPath ? 'dog' : 'cat'"
      ></animal-card></div
  ></template>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import apiRequests from "../services/apiRequests.js";
import AnimalCard from "../components/shared/AnimalCard.vue";

const route = useRoute();

const isLoading = ref(true);

const animal = ref({});

const prevAnimal = ref({});

const nextAnimal = ref({});

const getAnimalsById = async () => {
  const type = route.name === "Dog details" ? "dogs" : "cats";
  const id = route.params.slug.match(/-(.{19})$/);
  try {
    const { currentAnimal, prev, next } =
      await apiRequests.getPrevCurrentNextAnimalById(type, id[0]);
    animal.value = currentAnimal;
    prevAnimal.value = prev;
    nextAnimal.value = next;
  } catch (error) {
    console.error(error);
  }
};

const isDogsPath = computed(() => {
  return route.path.includes("dogs") ? true : false;
});

onMounted(async () => {
  await getAnimalsById();
  isLoading.value = false;
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bellota:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");
.image-container {
  width: 100%;
  max-width: 800px;
  height: 0;
  padding-bottom: 75%;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}

.carousel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

hr {
  width: 100%;
}

ul.phone li::marker {
  content: "📞 ";
}

ul.dog li::marker {
  content: "🐕 ";
}

ul.cat li::marker {
  content: "🐈 ";
}

.ribbon {
  font-family: "Bellota", system-ui;
  font-weight: bold;
  color: #fff;
  --f: 0.5em;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  line-height: 1.8;
  padding-inline: 1lh;
  padding-bottom: var(--f);
  border-image: conic-gradient(#0008 0 0) 51% / var(--f);
  clip-path: polygon(
    100% calc(100% - var(--f)),
    100% 100%,
    calc(100% - var(--f)) calc(100% - var(--f)),
    var(--f) calc(100% - var(--f)),
    0 100%,
    0 calc(100% - var(--f)),
    999px calc(100% - var(--f) - 999px),
    calc(100% - 999px) calc(100% - var(--f) - 999px)
  );

  transform: translate(calc((cos(45deg) - 1) * 100%), -100%) rotate(-45deg);
  transform-origin: 100% 100%;
  background-color: var(--red-color);
}
</style>
