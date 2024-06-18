<template>
  <div>
    <Breadcrumb :paths="['Home', 'Shop']" />

    <div class="flex flex-col md:px-10 gap-y-10 px-5 my-10 lg:flex-row">
      <div class="lg:max-w-[25%] w-full order-2 lg:!order-1">
        <shop-leftbar></shop-leftbar>
      </div>

      <!-- main section -->
      <div class="w-full py-3 px-5 font-sans lg:order-2 ">
        <!-- top bar -->
        <div
          class="flex flex-col gap-y-5 md:flex-row items-center justify-between text-black/50"
        >
          <div class="flex gap-2">
            <button
              class="px-5 py-2.5 border text-white bg-black/70"
              @click="grid_display = 1"
              :class="{ '!bg-white/70 !text-black/70': grid_display == 1 }"
            >
              1
            </button>
            <button
              class="px-5 py-2.5 border text-white bg-black/70"
              @click="grid_display = 2"
              :class="{ '!bg-white/70 !text-black/70': grid_display == 2 }"
            >
              2
            </button>
            <button
              class="px-5 py-2.5 border text-white bg-black/70 hidden md:block"
              @click="grid_display = 3"
              :class="{ '!bg-white/70 !text-black/70': grid_display == 3 }"
            >
              3
            </button>
            <button
              class="px-5 py-2.5 border text-white bg-black/70 hidden sm:block"
              @click="grid_display = 4"
              :class="{ '!bg-white/70 !text-black/70': grid_display == 4 }"
            >
              4
            </button>
            <button
              class="px-5 py-2.5 border text-white bg-black/70 hidden sm:block"
              @click="grid_display = 5"
              :class="{ '!bg-white/70 !text-black/70': grid_display == 5 }"
            >
              5
            </button>
          </div>
          <div>
            <div class="flex gap-x-10 gap-y-5 flex-col lg:flex-row">
              <div class="flex items-center gap-5">
                <p>Sort By:</p>
                <select name="" id="" class="py-2.5 border w-36 text-center">
                  <option value="" class="!py-2 h-10">Default</option>
                  <option value="">Name, a to z</option>
                  <option value="">Name, z to a</option>
                  <option value="">Price, low to high</option>
                  <option value="">Price, high to low</option>
                  <option value="">Rating, lowest</option>
                  <option value="">Rating, highest</option>
                </select>
              </div>
              <div class="flex items-center gap-5">
                <p>Display:</p>
                <select
                  class="py-2.5 border w-36 text-center"
                  v-model="no_of_display"
                >
                  <option value="6">6</option>
                  <option value="10">10</option>
                  <option value="14">14</option>
                  <option value="18">18</option>
                  <option value="22">22</option>
                  <option value="26">26</option>
                  <option value="30">30</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            class="grid gap-7 py-10"
            :class="{
              '!grid-cols-3': grid_display == 3,
              '!grid-cols-4': grid_display == 4,
              '!grid-cols-5': grid_display == 5,
              '!grid-cols-2': grid_display == 2,
            }"
          >
            <!-- single products -->
            <product-card v-for="product in products" :product="product" :key="product.id"></product-card>
          </div>
        </div>

        <!-- Paggination -->
        <div class="flex gap-2 justify-center">
          <button class="px-5 py-2.5 border text-white bg-black/70">1</button>
          <button
            class="px-5 py-2.5 border text-white bg-black/70 hover:bg-orange-600"
          >
            2
          </button>
          <button
            class="px-5 py-2.5 border text-white bg-black/70 hover:bg-orange-600"
          >
            3
          </button>
          <button
            class="px-5 py-2.5 border text-white bg-black/70 hover:bg-orange-600"
          >
            4
          </button>
          <button
            class="px-5 py-2.5 border text-white bg-black/70 hover:bg-orange-600"
          >
            ...
          </button>
          <button
            class="px-5 py-2.5 border text-white bg-black/70 hover:bg-orange-600"
          >
            56
          </button>
          <button
            class="px-5 py-2.5 border text-white bg-black/70 hover:bg-orange-600"
          >
            57
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/stores/url";
import { useCart } from "@/stores/cart";
import { useCurrency } from "@/stores/currency";
import { useWishlist } from "@/stores/wishlist";

const currency = useCurrency()
// const profileId = useCookie("profileId", { maxAge: 60 * 60 * 24 * 30 })

const grid_display = ref(1);
const no_of_display = ref(20);

const {
  data: products,
  pending: pending,
  error: error,
} = await useFetch("https://fakestoreapi.com/products", {
  query: {
    limit: no_of_display,
  },
  method: "get",
  key: new Date().getTime().toString(),
  watch: [no_of_display],
});

const resizeWin = () => {
  if (window.innerWidth < 462) {
    grid_display.value = 1;
  } else if (window.innerWidth <= 646) {
    grid_display.value = 2;
  } else if (window.innerWidth <= 992) {
    grid_display.value = 3;
  }else{
    grid_display.value = 4;
  }
};

onMounted(() => {
  resizeWin();

  window.addEventListener("resize", () => {
    resizeWin();
  });
});
</script>

<style lang="scss" scoped></style>
