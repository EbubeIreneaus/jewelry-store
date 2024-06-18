<script lang="ts" setup>
import { useCart } from "@/stores/cart";
import { useCurrency } from "@/stores/currency";
import { useWishlist } from "@/stores/wishlist";
import { useCurrencyFormatter } from "~/pages/composables/CurrencyFormatter";

const currency = useCurrency();
const {product} = defineProps(["product"]);

const addToCart = (product: any, e: any) => {
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

const vCurrency = {
    mounted: (el: any, binding: any) =>{
         let amount = binding.value
         let money = useCurrencyFormatter(currency.currency, amount)

         return el.innerText = money
    }
}

const addToWishlist = (product: any, e: any) => {
  e.target.classList.add("!ring-4");
  e.target.classList.add("!ring-orange-500");
  e.target.classList.add("!text-orange-600");

  const wishlist = useWishlist();
  wishlist.addItem(
    product.title,
    product.price,
    product.description,
    product.image,
    product.id
  );
};
</script>

<template>
  <v-card
    class="w-full relative swiper-slide group/slide !bg-slate-950 !text-orange-100"
    rounded="xl"
    elevation="4"
    :href="`/product/${product.id}`"
  >
    <v-card-text class="px-2.5 md:px-5 py-5">
      <div>
        <p class="border w-fit px-2.5 bg-yellow-600 text-white text-sm">new</p>
        <!-- <p
              class="border w-fit px-2.5 bg-red-600 text-white text-xs mb-1 invisible"
              :class="{ '!visible': index % 2 != 0 }"
            >
              -20%
            </p> -->
      </div>
      <div class="">
        <img
          :src="product.image"
          :alt="product.title"
          class="w-32 h-32 object-cover mx-auto py-2.5"
        />
        <div class="text-center">
          <div class="text-center px-3">
            <v-rating
              size="sm"
              readonly
              v-model="product.rating.rate"
              half-increments
              hover
              density="compact"
              active-color="orange"
            ></v-rating>
          </div>
          <nuxt-link to="/" class="text-orange-400 font-bold line-clamp-1">
            {{ product.title }}
          </nuxt-link>
        </div>
      </div>
    </v-card-text>
    <template v-slot:actions>
      <div class="flex justify-between items-center w-full px-2">
        <div>
          <v-btn
            icon="mdi-cart"
            size="small"
            class="!w-fit"
            @click="addToCart(product, $event)"
          ></v-btn>
          <!-- <v-btn
            icon="mdi-heart"
            size="small"
            class="!w-fit"
            @clcik="addToWishlist(product, $event)"
          ></v-btn> -->
          <!-- <v-btn icon="mdi-eye" size="small" class="!w-fit hidden" @click="$router.push(`/product/${product.id}`)"></v-btn> -->
        </div>
        <!-- <p class="font-mono font-semibold" v-if="currency.currency == 'USD'">
          ${{ product.price }}
        </p> -->
        <p class="font-mono font-semibold" v-currency="product.price"></p>
      </div>
    </template>
  </v-card>
</template>
