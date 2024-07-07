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
  <template v-else
    ><div class="d-flex justify-content-center align-items-center px-2 pt-5">
      <div class="card mb-3 border-0" style="width: 800px">
        <img :src="article.images[0]" class="card-img-top" alt="..." />
        <div
          class="card-body text-white bg-red"
          style="font-family: 'Bellota', system-ui"
        >
          <h2 class="card-title text-center">{{ article.title }}</h2>
          <p class="card-text">
            {{ article.text }}
          </p>
        </div>
        <div class="card-footer bg-red">
          <div class="row mt-4" data-masonry="{'percentPosition': true }">
            <div
              class="col-sm-6 col-lg-4 mb-4"
              v-for="(image, index) in article.images"
              :key="index"
            >
              <img :src="image" class="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column align-items-center gap-5 flex-md-row gap-sm-0 mx-5"
      :class="
        !prevArticle ? 'justify-content-sm-end' : 'justify-content-sm-between'
      "
    >
      <news-card v-if="prevArticle" :news="[prevArticle]"></news-card>
      <news-card v-if="nextArticle" :news="[nextArticle]"></news-card></div
  ></template>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import { useRoute } from "vue-router";
import apiRequests from "../services/apiRequests.js";
import NewsCard from "../components/shared/NewsCard.vue";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";

const route = useRoute();

const isLoading = ref(true);

const article = ref({});

const prevArticle = ref({});

const nextArticle = ref({});

const getArticlesById = async () => {
  const id = route.params.slug.match(/-(.{19})$/);
  console.log(id);
  try {
    const { currentArticle, prev, next } = await apiRequests.getNewsById(id[0]);
    article.value = currentArticle;
    prevArticle.value = prev;
    nextArticle.value = next;
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await getArticlesById();
  isLoading.value = false;
  nextTick(() => {
    const imgContainers = document.querySelectorAll("[data-masonry] div");
    console.log(imgContainers);
    imagesLoaded(imgContainers, () => {
      const row = document.querySelector("[data-masonry]");
      if (row) {
        new Masonry(row, {
          percentPosition: true,
        });
      }
    });
  });
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bellota:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap");
</style>
