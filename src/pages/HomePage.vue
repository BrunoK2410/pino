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
      id="carousel"
      class="carousel carousel-dark slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div
        class="carousel-inner py-5"
        style="background-color: rgba(236, 102, 93, 0.3)"
      >
        <div
          v-for="(article, index) in news.slice(0, 3)"
          :key="article.title"
          class="carousel-item"
          :class="index === 0 ? 'active' : ''"
          data-bs-interval="10000"
        >
          <router-link :to="articleSlug(article)">
            <div
              class="image-container position-relative mx-auto"
              style="max-width: 800px"
            >
              <img
                :src="article.images[0]"
                class="d-block w-100"
                alt="..."
                style="max-width: 800px"
              />
              <div
                class="carousel-caption start-0 end-0 bottom-0 w-100 d-none d-md-block"
                style="
                  background-color: rgba(255, 255, 255, 0.7);
                  padding-bottom: 2.25rem;
                "
              >
                <h5>{{ article.title }}</h5>
                <p>{{ article.date }}</p>
              </div>
            </div></router-link
          >
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="container-fluid p-4 mt-5">
      <div class="d-flex justify-content-between">
        <h1 class="m-0 text-center">
          PSI
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M55 196.076C213.97 162.425 328.5 179.5 344.217 163.629C356.262 151.465 347.5 115.501 340.587 111.591C332.881 107.232 302.935 102.413 281 101.629M266.5 75.5C232.987 143.859 249.995 254.767 246.007 323"
                stroke="#000000"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M49 150.74C61.5 214.941 69 259.146 69 323.347"
                stroke="#000000"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M69 323C113.955 213.209 226.212 186.011 244 321.792"
                stroke="#000000"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </h1>
        <div class="to-all-container border-bottom border-2 border-dark">
          <h2 class="m-0" @click="router.push('/dogs')">
            Svi
            <svg
              width="32px"
              height="32px"
              viewBox="0 -6.5 38 38"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>right-arrow</title>
                <desc>Created with Sketch.</desc>
                <g
                  id="icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="ui-gambling-website-lined-icnos-casinoshunter"
                    transform="translate(-1511.000000, -158.000000)"
                    fill="#000000"
                    fill-rule="nonzero"
                  >
                    <g id="1" transform="translate(1350.000000, 120.000000)">
                      <path
                        d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z"
                        id="right-arrow"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </h2>
        </div>
      </div>
      <hr />
      <animal-card :animals="dogs" :animalType="'dog'" />
      <hr />
    </div>
    <div class="container-fluid p-4 mt-5">
      <div class="d-flex justify-content-between">
        <h1 class="m-0 text-center">
          MAČKE
          <svg
            width="32px"
            height="32px"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M245.2 134.289C294.12 73.9855 219.025 82.2174 208.126 76.763C204.296 74.849 200.528 56.3705 192.005 60.6375C178.88 67.2036 179.995 101.383 178.571 112.785C177.798 118.991 169.133 127.877 166.285 134.289C161.739 144.521 156.744 156.692 148.393 169.402C140.043 182.113 122.592 191.967 113.857 201.681C76.682 243.002 92.6204 291.579 133.435 322.992C174.716 354.764 347.131 342.906 298.399 269.769"
                stroke="#000000"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M225.903 162.283C238.018 206.627 220.627 252.936 220.627 296.357C220.627 301.354 230.543 296.532 235.401 297.425"
                stroke="#000000"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M162.667 208.879C172.419 210.315 181.319 217.474 188.222 224.166C222.582 257.481 178.688 279.87 176.257 291.647C175.708 294.311 187.035 296.145 189.31 296.389"
                stroke="#000000"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M211.536 62.994C218.161 56.7795 219.425 67.6568 220.627 73.6378"
                stroke="#000000"
                stroke-opacity="0.9"
                stroke-width="16"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
        </h1>
        <div class="to-all-container border-bottom border-2 border-dark">
          <h2 class="m-0" @click="router.push('/cats')">
            Sve
            <svg
              width="32px"
              height="32px"
              viewBox="0 -6.5 38 38"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>right-arrow</title>
                <desc>Created with Sketch.</desc>
                <g
                  id="icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="ui-gambling-website-lined-icnos-casinoshunter"
                    transform="translate(-1511.000000, -158.000000)"
                    fill="#000000"
                    fill-rule="nonzero"
                  >
                    <g id="1" transform="translate(1350.000000, 120.000000)">
                      <path
                        d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z"
                        id="right-arrow"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </h2>
        </div>
      </div>
      <hr />
      <animal-card :animals="cats" :animalType="'cat'" />
      <hr />
    </div>
    <div class="container-fluid p-4 mt-5">
      <div class="d-flex justify-content-between">
        <h1 class="m-0 text-center">
          NOVOSTI
          <svg
            fill="#000000"
            width="32px"
            height="32px"
            viewBox="0 0 256 256"
            id="Flat"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M180,112a4.0002,4.0002,0,0,1-4,4H96a4,4,0,0,1,0-8h80A4.0002,4.0002,0,0,1,180,112Zm-4,28H96a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8Zm52-76V184a20.02229,20.02229,0,0,1-20,20H32a20.02285,20.02285,0,0,1-20-19.91895V88a4,4,0,0,1,8,0v96a12,12,0,0,0,24,0V64A12.01312,12.01312,0,0,1,56,52H216A12.01312,12.01312,0,0,1,228,64Zm-8,0a4.004,4.004,0,0,0-4-4H56a4.004,4.004,0,0,0-4,4V184a19.89694,19.89694,0,0,1-4.00977,12H208a12.01312,12.01312,0,0,0,12-12Z"
              ></path>
            </g>
          </svg>
        </h1>
        <div class="to-all-container border-bottom border-2 border-dark">
          <h2 class="m-0" @click="router.push('/news')">
            Sve
            <svg
              width="32px"
              height="32px"
              viewBox="0 -6.5 38 38"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>right-arrow</title>
                <desc>Created with Sketch.</desc>
                <g
                  id="icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="ui-gambling-website-lined-icnos-casinoshunter"
                    transform="translate(-1511.000000, -158.000000)"
                    fill="#000000"
                    fill-rule="nonzero"
                  >
                    <g id="1" transform="translate(1350.000000, 120.000000)">
                      <path
                        d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z"
                        id="right-arrow"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </h2>
        </div>
      </div>
      <hr />
      <news-card :news="news" /></div
  ></template>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import apiRequests from "../services/apiRequests.js";
import AnimalCard from "../components/shared/AnimalCard.vue";
import NewsCard from "../components/shared/NewsCard.vue";

const router = useRouter();

const dogs = ref([]);
const cats = ref([]);

const isLoading = ref(true);

const getAnimals = async () => {
  try {
    const [dogsResponse, catsResponse] = await Promise.all([
      apiRequests.getAnimals("dogs", 6),
      apiRequests.getAnimals("cats", 6),
    ]);

    dogs.value = dogsResponse;
    cats.value = catsResponse;
  } catch (error) {
    console.error(error);
  }
};

const news = ref([]);

const getNews = async () => {
  try {
    news.value = Object.values(await apiRequests.getNews(4));
  } catch (error) {
    console.error(error);
  }
};

const articleSlug = (article) => {
  return `/news/${article.title
    .toLowerCase()
    .replace(/[?]/g, "")
    .replace(/\s+/g, "-")}${article.id}`;
};

onMounted(async () => {
  Promise.all([await getAnimals(), await getNews()]);
  isLoading.value = false;
});
</script>

<style scoped>
.to-all-container:hover {
  border-bottom: 2px transparent !important;
}

h2 {
  cursor: pointer;
}

.active {
  color: transparent !important;
  border-color: unset !important;
}
</style>
