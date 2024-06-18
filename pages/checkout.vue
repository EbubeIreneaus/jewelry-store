<template>
  <div>
    <Breadcrumb :paths="['Home', 'Checkout']" />


    <div>
      <div></div>

      <v-sheet
        class="!grid lg:!grid-cols-2 !gap-x-10 !gap-y-7 !font-sans !px-4 md:!px-10 !py-10 !bg-slate-950 !my-7 !mx-5"
        elevation="24"
        rounded="lg"
      >
        <div>
          <h2 class="text-2xl font-bold text-orange-300">Billing Details</h2>
          <form class="text-orange-200">
            <div class="mb-5">
              <label class="font-semibold"
                >Country <span class="text-red-500">*</span></label
              >
              <select
                class="appearance-none py-2.5 w-full outline-none border ps-2"
              >
                <option v-for="(x, index) in countries" :value="x">
                  {{ x }}
                </option>
              </select>
            </div>
            <div class="mb-5">
              <label class="font-semibold">Full Name</label>
              <input
                type="text"
                class="py-2.5 w-full outline-none border ps-2"
                placeholder="full name"
              />
            </div>

            <div class="mb-5">
              <label class="font-semibold">Company Name</label>
              <input
                type="text"
                class="py-2.5 w-full outline-none border ps-2"
                placeholder="company name"
              />
            </div>
            <div class="mb-5">
              <label class="font-semibold"
                >Address<span class="text-red-500">*</span></label
              >
              <input
                type="text"
                class="py-2.5 w-full outline-none border ps-2"
                placeholder="Address"
              />
            </div>
            <div class="mb-5">
              <input
                type="text"
                class="py-2.5 w-full outline-none border ps-2"
                placeholder="Apartment, suite, unit (optional)"
              />
            </div>
            <div class="mb-5">
              <label class="font-semibold"
                >Town / City <span class="text-red-500">*</span></label
              >
              <select
                class="appearance-none py-2.5 w-full outline-none border ps-2"
              >
                <option v-for="(x, index) in countries" :value="x">
                  {{ x }}
                </option>
              </select>
            </div>
            <div class="grid gap-x-5 gap-y-7 md:grid-cols-2 mb-5">
              <div>
                <label class="font-semibold"
                  >State <span class="text-red-500">*</span></label
                >
                <input
                  type="text"
                  class="py-2.5 w-full outline-none border ps-2"
                  placeholder="state"
                />
              </div>
              <div>
                <label class="font-semibold"
                  >Postal / Zip <span class="text-red-500">*</span></label
                >
                <input
                  type="text"
                  class="py-2.5 w-full outline-none border ps-2"
                  placeholder="zip code"
                />
              </div>
              <div>
                <label class="font-semibold"
                  >Email<span class="text-red-500">*</span></label
                >
                <input
                  type="text"
                  class="py-2.5 w-full outline-none border ps-2"
                  placeholder="phone"
                />
              </div>
              <div>
                <label class="font-semibold">Phone</label>
                <input
                  type="text"
                  class="py-2.5 w-full outline-none border ps-2"
                  placeholder="phone"
                />
              </div>
            </div>
          </form>
        </div>
        <div>
          <div class="md:px-7 py-10">
            <h2 class="text-3xl font-bold text-orange-200 py-7">Your Order</h2>
            <div>
              <table class="w-full font-sans">
                <tr class="uppercase border-b border-t text-orange-300">
                  <th class="py-5">Product</th>
                  <th class="py-5">Total</th>
                </tr>
                <tr
                  v-for="(product, index) in cart.items"
                  :key="index"
                  class="text-orange-200 border-t border-b"
                >
                  <td class="py-4">
                    {{ product.title
                    }}<span class="font-mono"> x {{ product.quantity }}</span>
                  </td>
                  <td class="font-mono py-4">
                    {{ money(product.price * product.quantity) }}
                  </td>
                </tr>
                <tr class="text-orange-300 border-t border-b font-bold">
                  <td class="py-4">Cart Totals</td>
                  <td class="font-mono py-4">
                    {{ money(cart.getTotalPrice()) }}
                  </td>
                </tr>
                <tr class="text-orange-300 border-t border-b font-bold text-xl">
                  <td class="py-4">Totals</td>
                  <td class="font-mono py-4">
                    {{ money(cart.getTotalPrice() + 60) }}
                  </td>
                </tr>
              </table>
              <div class="!text-orange-200 my-10">
                <h2 class="text-xl font-bold">Direct Bank Transfer..</h2>
                <p class="my-4">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order won’t be
                  shipped until the funds have cleared in our account.
                </p>
                <h2 class="text-xl font-bold mb-2">Cheque Payment</h2>
                <h2 class="text-xl font-bold">Paypal</h2>
              </div>
              <v-btn variant="tonal" block id="paypal-checkout" size="x-large" class="!bg-orange-300/30"
                >Place Order</v-btn
              >
            </div>
          </div>
        </div>
      </v-sheet>
    </div>
  </div>
</template>

<script setup>
import { useApi } from "@/stores/url";
import { useCart } from "@/stores/cart";

const cart = useCart();
const countries = [
  "Nigeria",
  "Ghana",
  "Cameroon",
  "Niger",
  "Togo",
  "South Africa",
];

function money(amount) {
  const formmater = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });
  return formmater.format(amount);
}
</script>

<style lang="scss" scoped></style>
