<template>
  <div class="row mx-0 gap-5 mt-5 justify-content-center">
    <div
      v-for="article in news"
      :key="article.id"
      class="news-card card col-12 border-0 px-0"
      style="max-width: 18rem"
      :style="{
        opacity: 0,
        transform: 'translateY(100px)',
        transition: 'all 0.7s ease',
      }"
    >
      <router-link :to="articleSlug(article)">
        <img :src="article.images[0]" class="card-img-top" alt="..."
      /></router-link>
      <div
        class="card-body rounded-bottom d-flex flex-column justify-content-between bg-red"
      >
        <h5 class="card-title fw-bold text-center">
          {{ article.title }}
        </h5>
        <p class="card-text text-white mt-2">
          {{ strippedHTML(article.text) }}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <span class="text-white">{{ article.date }}</span>
          <router-link
            :to="articleSlug(article)"
            class="circle-btn d-flex justify-content-center align-items-center bg-light-pink rounded-circle"
            style="
              width: 40px;
              height: 40px;
              transition: box-shadow 0.3s ease, transform 0.1s ease;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1),
                0 6px 20px rgba(0, 0, 0, 0.1);
            "
          >
            <svg
              width="22px"
              height="22px"
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
              </g></svg
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted, nextTick } from "vue";
defineProps({
  news: Array,
});

const articleSlug = (article) => {
  return `/news/${article.title
    .toLowerCase()
    .replace(/[?]/g, "")
    .replace(/\s+/g, "-")}${article.id}`;
};

const strippedHTML = (text) => {
  return text.replace(/<[^>]+>/g, "");
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
  { rootMargin: isSmallViewport ? "0px 0px 0px 200px" : "50px" }
);

onMounted(() => {
  nextTick(() => {
    const newsCards = Array.from(document.querySelectorAll(".news-card"));
    const itemsToAnimate = [...newsCards];
    itemsToAnimate.forEach((element, index) => {
      element.style.transitionDelay = `${0.2 * index * 0.3}s`;
      observer.observe(element);
    });
  });
});
</script>

<style scoped>
.card-text {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.scroll-animation {
  opacity: 1 !important;
  transform: translateX(0) !important;
}

.circle-btn:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 12px 25px rgba(0, 0, 0, 0.2) !important;
}

.circle-btn:active {
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2),
    inset 0 6px 20px rgba(0, 0, 0, 0.2) !important;
  transform: translateY(2px) !important;
}
</style>
