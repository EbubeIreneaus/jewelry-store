<template>
  <div class="swiper-container group/container product-swipe relative">
    <div class="swiper-wrapper md:px-5">
      <!-- single product -->
      <div class="swiper-slide" v-for="product in products" :key="product.id">
        <product-card
          :product="product"
          class=""
        ></product-card>
      </div>
    </div>
    <v-btn
      icon="mdi-less-than"
      class="swiper-button-prev ms-5 border p-3 !hidden lg:!block !bg-slate-900 !invisible group-hover/container:!visible"
    ></v-btn>
    <v-btn
      icon="mdi-greater-than"
      class="swiper-button-next me-5 px-7 p-3 !hidden lg:!block !bg-slate-900 !invisible group-hover/container:!visible"
    ></v-btn>
  </div>
</template>

<script setup>
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const currency = useCurrency();
const {
  data: products,
  pending,
  error,
} = useFetch("https://fakestoreapi.com/products", {
  params: { imit: 30 },
  watch: false,
});

onMounted(() => {
  const swipper = new Swiper(".product-swipe", {
    direction: "horizontal",
    autoHeight: true,
    height: 300,
    slidesPerView: 2,
    spaceBetween: 10,
    zoom: {
      maxRatio: 5,
    },
    breakpoints: {
      468: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
</script>

<style lang="scss" scoped></style>
