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
          <pre
            class="card-text"
            id="article-text"
            style="text-wrap: wrap"
          ></pre>
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

const showText = () => {
  const articleText = document.getElementById("article-text");
  console.log(articleText);
  const tempElement = document.createElement("div");
  tempElement.innerHTML = article.value.text;

  const processNode = (node, isFirstNode, isLastNode) => {
    if (node.nodeType === Node.TEXT_NODE) {
      let textNode = document.createTextNode(node.textContent);
      const formattingTags = {
        B: "STRONG",
        I: "EM",
      };
      const parentNodes = [];
      let parentNode = node.parentNode;
      while (parentNode) {
        if (formattingTags[parentNode.nodeName]) {
          parentNodes.push(parentNode.nodeName);
        }
        parentNode = parentNode.parentNode;
      }
      if (parentNodes.length > 0) {
        let formattedNode = textNode;
        for (const tagName of parentNodes.reverse()) {
          const wrapper = document.createElement(formattingTags[tagName]);
          wrapper.appendChild(formattedNode);
          formattedNode = wrapper;
        }
        if (isFirstNode) {
          formattedNode.textContent = formattedNode.textContent.trimStart();
        }
        if (isLastNode) {
          formattedNode.textContent = formattedNode.textContent.trimEnd();
        }
        articleText.appendChild(formattedNode);
      } else {
        const trimmedText = isFirstNode
          ? textNode.textContent.trimStart()
          : isLastNode
          ? textNode.textContent.trimEnd()
          : textNode.textContent;
        articleText.appendChild(document.createTextNode(trimmedText));
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (node.nodeName === "A") {
        const link = document.createElement("a");
        link.href = node.getAttribute("href");
        link.textContent = node.textContent;
        link.target = "_blank";
        link.style.textDecoration = "underline";
        link.style.fontWeight = "bold";
        articleText.appendChild(link);
      } else if (node.nodeName === "BR") {
        articleText.appendChild(document.createElement("br"));
      } else {
        const childNodes = node.childNodes;
        for (let i = 0; i < childNodes.length; i++) {
          const childNode = childNodes[i];
          processNode(
            childNode,
            isFirstNode && i === 0,
            isLastNode && i === childNodes.length - 1
          );
        }
      }
    }
  };

  const childNodes = tempElement.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    const childNode = childNodes[i];
    processNode(childNode, i === 0, i === childNodes.length - 1);
  }
};

onMounted(async () => {
  await getArticlesById();
  isLoading.value = false;
  nextTick(() => {
    showText();

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
