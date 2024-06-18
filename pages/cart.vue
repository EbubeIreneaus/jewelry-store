<template>
  <div>
    <Breadcrumb :paths="['Home', 'Cart']" />

    <div>
      <div class="overflow-scroll py-7 px-5">
        <table class="w-full text-center text-orange-200" v-auto-animate>
          <tr>
            <th class="px-5 md:py-2.5">Remove</th>
            <th class="px-10">Images</th>
            <th class="px-20">Title</th>
            <th class="px-10">Price</th>
            <th>Quantity</th>
            <th class="px-10">Total Price</th>
          </tr>
          <tr v-for="(product, index) in cart.items" :key="index">
            <td class="px-10">
              <i
                class="fa fa-trash cursor-pointer"
                @click="cart.removeItem(index)"
              ></i>
            </td>
            <td class="p-5">
              <NuxtImg
                format="webp"
                :src="product.image"
                class="mx-auto"
                quality="80"
                width="100"
                height="100"
                fit="cover"
              />
            </td>
            <td class="">{{ product.title }}</td>
            <td class="font-mono">{{ money(product.price) }}</td>
            <td>
              <div class="flex w-full justify-center px-7">
                <button
                  class="px-3 py-2 ring-1 hover:ring-4"
                  @click="product.quantity--"
                >
                  -
                </button>
                <input
                  type="text"
                  class="border inset-52 px-2 py-1 w-16 appearance-none outline-none text-center"
                  :value="product.quantity"
                  @change="cart.increment($event.target.value, index)"
                />
                <button
                  class="px-3 py-2 ring-1 hover:ring-4"
                  @click="product.quantity++"
                >
                  +
                </button>
              </div>
            </td>
            <td class="font-mono">
              {{ money(product.price * product.quantity) }}
            </td>
          </tr>
        </table>
      </div>
      <div class="flex flex-col lg:flex-row justify-between my-7 px-5 gap-y-10">
        <div class="flex items-center gap-1 h-fit">
          <v-text-field
            placeholder="coupon code"
            variant="outlined"
            size="md"
            class="mt-2"
          ></v-text-field>
          <v-btn variant="tonal" class="">Apply</v-btn>
        </div>

        <div class="w-full max-w-md text-left me-7">
          <h2 class="text-2xl font-bold text-orange-300">Cart Totals</h2>
          <div class="w-full text-orange-200 font-bold">
            <div class="border-2 border-black/30 py-3 px-3 my-1">
              <span>Subtotals</span
              ><span class="float-right font-mono">{{
                money(cart.getTotalPrice())
              }}</span>
            </div>
            <div class="border-2 border-black/30 py-3 px-3">
              <span>Totals</span
              ><span class="float-right font-mono">{{
                money(cart.getTotalPrice() + 60)
              }}</span>
            </div>
          </div>
          <NuxtLink
            to="/checkout"
            
            >
            <v-btn variant="tonal" class="!mt-3">checkout</v-btn>
            </NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCart } from "@/stores/cart";
const cart = useCart();

/**@param {number} amount - amount to be formated to currency*/
function money(amount) {
  const formmater = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
  return formmater.format(amount);
}
// function bb(v){
//     alert(v)
// }
</script>

<style scoped>
table,
th,
td {
  border: 1px solid rgba(0, 0, 0, 0.5);
}
</style>
