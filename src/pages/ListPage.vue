<template>
  <div
    v-if="route.path !== '/news'"
    id="categories"
    class="py-3 d-flex justify-content-around flex-wrap bg-red text-white fw-bold fs-5 gap-3"
    style="filter: brightness(120%); font-family: 'Bellota', system-ui"
  >
    <router-link
      v-if="route.path === '/dogs'"
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
      :to="{ path: route.path, query: { category: 'young' } }"
      :class="{ active: route.query.category === 'young' }"
      >Mladi</router-link
    ><router-link
      :to="{ path: route.path, query: { category: 'adult' } }"
      :class="{ active: route.query.category === 'adult' }"
      >Odrasli</router-link
    ><router-link
      :to="{ path: route.path, query: { category: 'old' } }"
      :class="{ active: route.query.category === 'old' }"
      >Stari</router-link
    ><router-link
      :to="{ path: route.path, query: { category: 'disabled' } }"
      :class="{ active: route.query.category === 'disabled' }"
      >Invalidni</router-link
    ><router-link
      :to="{ path: route.path, query: { category: 'permanent-care' } }"
      :class="{ active: route.query.category === 'permanent-care' }"
      >Na trajnom čuvanju</router-link
    ><router-link
      :to="{ path: route.path, query: { category: 'adopted' } }"
      :class="{ active: route.query.category === 'adopted' }"
      >Udomljeni</router-link
    ><router-link
      :to="{ path: route.path, query: { category: 'in-memoriam' } }"
      :class="{ active: route.query.category === 'in-memoriam' }"
      >In memoriam</router-link
    >
  </div>
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
      style="min-height: 90vh"
      class="position-relative d-flex flex-column justify-content-between"
    >
      <template v-if="route.path !== '/news'"
        ><h3
          class="text-center text-white my-5"
          v-if="filteredAnimals.length === 0"
        >
          Trenutno nema {{ route.name === "Dogs" ? "pasa" : "mačaka" }} u ovoj
          kategoriji !
        </h3>
        <animal-card
          class="mt-5"
          :key="filteredAnimals"
          :animals="filteredAnimals"
          :animalType="route.path === '/dogs' ? 'dog' : 'cat'"
      /></template>
      <news-card
        v-else
        :news="filteredNews"
        :key="filteredNews"
      /><the-pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @decrement="prev"
        @increment="next"
        @active-page="handleActivePage"
      />
    </div>
  </template>
</template>

<script setup>
import { onMounted, ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import apiRequests from "../services/apiRequests.js";
import AnimalCard from "../components/shared/AnimalCard.vue";
import NewsCard from "../components/shared/NewsCard.vue";
import ThePagination from "../components/shared/ThePagination.vue";

const route = useRoute();

watch(
  () => route.fullPath,
  (newPath, oldPath) => {
    if (newPath !== oldPath) {
      currentPage.value = 1;
    }
  }
);

const animals = ref([]);

const adoptableAnimals = ref([]);

const isLoading = ref(true);

const totalItems = ref("");

const getAnimals = async () => {
  try {
    animals.value = await apiRequests.getAnimals(
      route.path === "/dogs" ? "dogs" : "cats"
    );

    totalItems.value = [...animals.value];
    adoptableAnimals.value = animals.value.filter((animal) => {
      return (
        !animal.category.includes("adopted") &&
        !animal.category.includes("in-memoriam")
      );
    });
  } catch (error) {
    console.error(error);
  }
};

const news = ref([]);

const getNews = async () => {
  try {
    news.value = Object.values(await apiRequests.getNews());
    totalItems.value = [...news.value];
  } catch (error) {
    console.error(error);
  }
};

const itemsPerPage = ref(18);

const currentPage = ref(1);

const totalPages = computed(() => {
  return Math.ceil(totalItems.value.length / itemsPerPage.value);
});

watch(totalPages, (newValue, oldValue) => {
  if (newValue < currentPage.value || oldValue < currentPage.value) {
    currentPage.value = 1;
  }
});

const prev = () => {
  scrollToTop();
  currentPage.value--;
};

const handleActivePage = (page) => {
  scrollToTop();
  currentPage.value = page;
};

const next = () => {
  scrollToTop();
  currentPage.value++;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
};
const filteredAnimals = computed(() => {
  let filtered = [...adoptableAnimals.value];
  if (route.query.category) {
    const category = route.query.category;
    filtered = animals.value.filter((animal) => {
      return animal.category.includes(category);
    });
  }
  getFilteredLength(filtered);
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;

  return filtered.slice(startIndex, endIndex);
});

const filteredNews = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage.value;
  const endIndex = startIndex + itemsPerPage.value;

  return news.value.slice(startIndex, endIndex);
});

const getFilteredLength = (filtered) => {
  totalItems.value = [...filtered];
};
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
onMounted(async () => {
  if (route.path !== "/news") {
    await getAnimals();
  } else {
    await getNews();
  }

  isLoading.value = false;
});
</script>

<style script>
@import url("https://fonts.googleapis.com/css2?family=Bellota:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");

#categories a {
  border-bottom: 2px solid transparent;
}

.active,
#categories a:focus,
#categories a:hover,
#categories a:active {
  color: #ffffff !important;
  border-color: #ffffff !important;
}
</style>
