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
    class="w-full relative swiper-slide group/slide  !text-orange-200 !h-[270px]"
    rounded="xl"
    elevation="12"
    
    :href="`/product/${product.id}`"
    :image="product.image"
  >
  <div class="w-full h-full bg-black/70 absolute"></div>
    <v-card-text class="px-2.5 md:px-5  flex flex-col justify-evenly h-[270px] !absolute !z-50">
      <div>
        <v-btn variant="tonal" density="compact" class="!font-semibold !text-end !w-fit  !font-mono float-end" v-currency="product.price"></v-btn>
      </div>
    
          <p class="text-orange-100 font-bold line-clamp-4">
            {{ product.title }}
          </p>

          <v-btn
            variant="tonal"
          >learn more</v-btn>
        
    </v-card-text>
  
  </v-card>
</template>
