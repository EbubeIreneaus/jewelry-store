<template>
  <div class="md:px-5">
    <div v-if="pending"></div>
    <v-sheet
      elevation="4"
      class="!flex !flex-col md:!flex-row !gap-x-5 !gap-y-5 !py-10 !px-5 !my-5 !bg-slate-950"
    >
      <div class="w-fit mx-auto">
        <nuxt-img :src="product.image" sizes="200px md:500px" fit="cover" />
      </div>
      <div class="font-semibold text-white/60 w-full px-5">
        <h2 class="text-xl font-bold mb-3">{{ product.title }}</h2>
        <div class="flex items-center gap-3 mb-2">
          <b>Rating ({{ product.rating.count }})</b>
          <v-rating
            v-model="product.rating.rate"
            size="small"
            color="orange"
            readonly
            density="comfortable"
          ></v-rating>
        </div>
        <p class="mb-2"><b>brands</b> &nbsp; codeXtreme</p>
        <p class="mb-3"><b>Availability</b> &nbsp; in stock</p>
        <p class="mb-3">
          <b>Ex Tax</b> &nbsp; <span>{{ money(product.price) }}</span>
        </p>
        <p class="mb-3"><b>Price reward points</b> &nbsp; 200</p>
        <div class="mb-3">
          <b>Size:</b>&nbsp;
          <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn
                color="primary"
                v-bind="props"
                variant="tonal"
                density="comfortable"
                >{{ size }}
              </v-btn>
            </template>
            <v-list class="!bg-slate-950 !text-orange-300 !ring-1">
              <v-list-item
                v-for="(sz, index) in sizes"
                :key="index"
                :value="index"
                @click="size = sz"
              >
                <v-list-item-title>{{ sz }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <div class="flex items-center mb-7">
          <b>Quantity:</b>&nbsp;
          <div class="flex">
            <input
              type="text"
              pattern="{0-9}*"
              v-model="pdt_form.quantity"
              class="outline-none border w-14 text-center invalid:border-red-500"
            />
            <div class="flex flex-col gap-2 font-bold">
              <v-btn
                icon=""
                variant="tonal"
                density="compact"
                @click="pdt_form.quantity++"
              >
                <i class="fa fa-angle-up"></i>
              </v-btn>

              <v-btn
                icon=""
                variant="tonal"
                density="compact"
                class=""
                :disabled="pdt_form.quantity <= 1"
                @click="pdt_form.quantity--"
              >
                <i class="fa fa-angle-down"></i>
              </v-btn>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-3 mb-7">
          <v-btn
            variant="tonal"
            class="py-2.5 px-5"
            @click="addSingleCart($event)"
          >
            Add To Cart
          </v-btn>
          <v-btn icon="mdi-heart" variant="tonal"  @click="addToWishlist($event)"></v-btn>
         </div>
        <div class="flex gap-3">
          <button
            class="fa-brands fa-facebook-f border py-3 px-4 rounded-full bg-blue-500"
          ></button>
          <button
            class="fa-brands fa-twitter border py-3 px-4 rounded-full bg-blue-300"
          ></button>
          <button
            class="fa-brands fa-instagram border py-3 px-4 rounded-full bg-purple-500"
          ></button>
          <button
            class="fa-brands fa-youtube border py-3 px-4 rounded-full bg-red-500"
          ></button>
          <button
            class="fa-brands fa-whatsapp border py-3 px-4 rounded-full bg-green-500"
          ></button>
        </div>
      </div>
    </v-sheet>

    <div>
      <v-tabs
      v-model="comp"
      class="!bg-slate-950"
    >
      <v-tab value="desc">Description</v-tab>
      <v-tab value="specification">Specification</v-tab>
      <v-tab value="reviews">Reviews</v-tab>
    </v-tabs>

    <v-tabs-window v-model="comp" class="md:!p-7 !px-2">
        <v-tabs-window-item value="desc">
          <lazy-product-desc :product="product" />
        </v-tabs-window-item>

        <v-tabs-window-item value="specification">
         <lazy-product-specification />
        </v-tabs-window-item>

        <v-tabs-window-item value="reviews" :product="product">
          <lazy-product-reviews />
        </v-tabs-window-item>
      </v-tabs-window>
    </div>

    <!-- Feature category -->
    <div class="py-7">
      <h2 class="text-3xl font-extrabold text-center my-7 text-white/60">
        Feature Category
      </h2>
      <div class="swiper-container category">
        <div class="swiper-wrapper">
          <product-card v-for="product in cat" :product="product" :key="product.id"></product-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/stores/url";
import { useCart } from "@/stores/cart";
import { useWishlist } from "@/stores/wishlist";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import { LazyProductDesc } from "#components";
import { LazyProductSpecification } from "#components";
import { LazyProductReviews } from "#components";
// import { LazyProductDesc} from '#components'
// import { LazyProductDesc} from '#components'
const { id } = useRoute().params;
const wishlist = useWishlist();

// const comp = [LazyProductDesc, LazyProductSpecification, LazyProductReviews];
const comp = ref('desc');

const {
  data: product,
  pending,
  error,
} = await useFetch(`https://fakestoreapi.com/products/${id}`, {
  method: "get",
});
const pdt_form = reactive({
  product: null,
  quantity: 1,
});
// cat for category
const {
  data: cat,
  pending: cat_pending,
  error: cat_error,
} = await useFetch(
  `https://fakestoreapi.com/products/category/${product.value.category}`,
  {
    method: "get",
  }
);
console.log(cat.value);
function money(amount) {
  const formmater = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
  return formmater.format(amount);
}
const addToWishlist = (e) => {
  e.target.classList.add("!bg-slate-400");

  const wishlist = useWishlist();
  wishlist.addItem(
    product.value.title,
    product.value.price,
    product.value.description,
    product.value.image,
    product.value.id
  );
};
onMounted(() => {
  const category_slide = new Swiper(".category", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      // when window width is >= 468px
      468: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1080: {
        slidesPerView: 5,
        spaceBetween: 30,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

const addSingleCart = (e) => {
  useCart().addCart(
    product.value.title,
    product.value.price,
    product.value.description,
    product.value.image,
    product.value.id,
    pdt_form.quantity
  );
  e.target.innerText = "Increase Quantity by 1";
};
const addToCart = (product, e) => {
  e.target.classList.add("!ring-4");
  e.target.classList.add("!ring-orange-500");
  e.target.classList.add("!text-orange-600");

  const cart = useCart();
  cart.addCart(
    product.title,
    product.price,
    product.description,
    product.image,
    product.id
  );
};

let sizes = ["xs", "s", "m", "l", "xl", "xxl"];
let size = ref("m");
</script>

<style lang="scss" scoped></style>
