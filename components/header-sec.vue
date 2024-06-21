<script setup>
import { useCart } from "@/stores/cart";
import { useCurrency } from "~/stores/currency";

const cart = useCart();
let currency = useCurrency();
const sbc_content = ref(false); // serach by category
const mobile = ref(false);
const sidebar = reactive({
  cartbar: false,
  memu: false,
});

const navLinks = [
  { title: "Home", href: "/", icon: "mdi-home", subLinks: [] },
  { title: "Shop", href: "/shop", icon: "mdi-store", subLinks: [] },
  { title: "wishlist", href: "/wishlist", icon: "mdi-hand-heart", sublinks: [] },
  { title: "About", href: "/about", icon: "mdi-information", sublinks: [] },
  { title: "Contact", href: "/contact", icon: "mdi-account-box", sublinks: [] },
  { title: "Blog", href: "/blog", icon: "mdi-post", sublinks: [] },
];

let currencies = [{ title: "NGN" }, { title: "USD" }];

if (process.client) {
  const dpd = document.getElementsByClassName("drop-down-btn");
  const dp = document.getElementsByClassName("dropdown-cont");
  for (let index = 0; index < dpd.length; index++) {
    dpd[index].addEventListener("click", () => {
      dpd[index].nextElementSibling.classList.toggle("drop-open");
      dpd[index].lastChild.classList.toggle("fa-angle-down");
    });
  }
}
const nav_scroll = () => {
  if (window.scrollY > 100) {
    document.getElementsByClassName("nav")[0].classList.add("nav-slide");
  } else {
    document.getElementsByClassName("nav")[0].classList.remove("nav-slide");
  }
};
/** @param {number} amount */
function formatNumber(amount) {
  const formater = new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: 2,
    style: "currency",
  });
  return formater.format(amount);
}
onMounted(() => {
  window.addEventListener("scroll", nav_scroll);
});
</script>

<template>
  <v-sheet
    class="!bg-slate-950/90 text-white w-screen border border-transparent"
  >
    <div
      class="nav h-16 w-screen flex lg:justify-between justify-end z-20 transition-all duration-500 ease-in-out"
    >
      <nav class="font-sans h-full lg:flex hidden items-center w-full">
        <v-list class="flex bg-transparent">
          <nuxt-link :to="link.href" v-for="link in navLinks">
            <v-list-item
              :title="link.title"
              class="!uppercase font-semibold"
            ></v-list-item>
          </nuxt-link>
        </v-list>
      </nav>

      <div class="flex py-3 px-10">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn variant="tonal" v-bind="props">
              {{ currency.currency }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in currencies"
              :key="index"
              :value="index"
            >
              <v-list-item-title @click="currency.currency = item.title">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>

    <!-- middle header content -->
    <div class="">
      <nuxt-link to="/" class="w-full lg:hidden block my-5">
        <div
          class="logo text-3xl italic text-center font-extrabold bg-gradient-to-r from-orange-300 to-orange-900 bg-clip-text text-transparent"
        >
          OKIS STORE
        </div>
      </nuxt-link>

      <div
        class="flex lg:h-28 h-20 items-center justify-between lg:px-10 px-5 gap-7"
      >
        <nuxt-link to="/" class="lg:block hidden">
          <div
            class="w-48 text-3xl font-extrabold bg-gradient-to-r from-orange-300 to-orange-900 bg-clip-text text-transparent"
          >
            OKIS STORE
          </div>
        </nuxt-link>

        <div
          class="flex lg:justify-end justify-between items-center lg:gap-5 w-full flex-grow"
        >
          <v-btn
            icon="mdi-menu"
            variant="tonal"
            class="lg:!hidden !block me-10"
            @click="sidebar.memu = !sidebar.memu"
          >
          </v-btn>

          <!-- cart bar button -->
          <v-btn
            class="flex gap-3"
            variant="tonal"
            elevation="4"
            @click="sidebar.cartbar = !sidebar.cartbar"
          >
            <v-badge :content="cart.items.length">
              <v-icon icon="mdi-cart"></v-icon>
            </v-badge>
            &nbsp;&nbsp;cart
          </v-btn>

          <button class="border px-24 py-4 rounded-2xl md:block hidden">
            <i class="fa-solid fa-phone"></i>
            <span class="ms-2">+234 808 541 9653</span>
          </button>
        </div>
      </div>
    </div>

    <!-- bottom header content -->
    <div class="py-5 flex items-center justify-center">
      <div class="px-5 relative w-fit">
        <div
          class="border flex gap-7 justify-between py-3.5 px-5 w-[250px] cursor-default"
          @click="sbc_content = !sbc_content"
        >
          <i class="fa fa-bars font-bold text-2xl"></i>
          <small>Shop by Categories</small>
          <i class="fa fa-caret-down"></i>
        </div>

        <div
          class="sbc-content w-full block absolute top-full left-0 px-5 h-0 opacity-0 overflow-hidden z-50 transition-all duration-700 ease-in-out"
          :class="{ '!h-[380px] opacity-100': sbc_content == true }"
        >
          <ul
            class="text-black border px-3 shadow-md bg-white font-semibold text-black/50"
          >
            <nuxt-link to="" v-for="x in 10" class="hover:text-orange-600">
              <li class="py-1.5 border-b cursor-pointer">Category {{ x }}</li>
            </nuxt-link>
          </ul>
        </div>
      </div>

      <div
        class="searchbar lg:flex hidden w-full items-center me-10 border rounded-md"
      >
        <div class="w-32 mx-3">
          <small>All category </small> &nbsp;<i class="fa fa-caret-down"></i>
        </div>
        <div class="flex-grow w-full">
          <input
            type="search"
            placeholder="Enter search key"
            class="w-full py-3.5 outline-none text-black/70 ps-5"
          />
        </div>
        <div>
          <button class="px-10 py-3.5 bg-orange-600 rounded-e-md">
            Search
          </button>
        </div>
      </div>
    </div>

    <!-- cart side bar -->
    <div
      class="fixed h-screen max-w-md w-full bg-slate-950 text-white/80 top-0 -right-[100vw] z-50 ring-1 shadow-md transition-all duration-500"
      :class="{ '!right-0 !opacity-100': sidebar.cartbar }"
    >
      <button
        class="float-right px-3 py-1.5 me-3 mt-3 block"
        @click="sidebar.cartbar = false"
      >
        <i class="fa fa-close"></i>
      </button>
      <div class="mt-16 px-8">
        <h3 class="font-bold text-2xl">Shooping Cart</h3>
        <!-- Cart Items Grid -->
        <ul class="flex flex-col gap-y-5 my-7 ms-2" v-auto-animate>
          <!-- cart item -->
          <li
            class="grid grid-cols-6 w-full"
            v-for="(product, index) in cart.items.slice(0, 3)"
            :key="index"
          >
            <div class="p-1 bg-white w-fit">
              <NuxtImg
                :src="product.image"
                quality="80"
                format="webp"
                width="70"
                height="70"
                fit="cover"
              />
            </div>
            <div class="col-span-4 text-white/50 font-semibold px-7 text-sm">
              <P class="mt-0.5 mb-2.5 line-clamp-1">{{ product.title }}</P>
              <p class="font-mono">
                {{ product.quantity }} x {{ formatNumber(product.price) }}
              </p>
            </div>
            <div
              @click="cart.removeItem(index)"
              class="border px-2.5 py-1.5 group h-fit w-fit"
            >
              <i
                class="fa fa-close text-slate-500 transition-all ease-in-out duration-300 group-hover:rotate-180"
              ></i>
            </div>
          </li>
          <!-- xx cart item xx -->
          <p v-if="cart.items.length > 3">.............</p>
        </ul>

        <!-- xx art Item Grid -->
        <div class="text-black/50 font-semibold px-2 text-sm">
          <p class="float-left">SubTotal</p>
          <p class="float-right font-mono">
            {{ formatNumber(cart.getTotalPrice()) }}
          </p>
        </div>

        <div class="mt-20 text-white/50 font-semibold">
          <nuxt-link to="/cart" @click="sidebar.cartbar = false">
            <v-btn
              density="default"
              variant="tonal"
              block
              rounded="lg"
              size="large"
              class="bg-slate-900 mb-3"
            >
              minicart
            </v-btn>
          </nuxt-link>

          <nuxt-link to="/checkout" @click="sidebar.cartbar = false">
            <v-btn
              density="default"
              variant="tonal"
              block
              rounded="lg"
              size="large"
              class="!bg-slate-900"
            >
              Checkout
            </v-btn>
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- side menu offcanvas -->
    <div
      class="md:max-w-sm max-w-[90%] w-full h-screen overflow-y-auto bg-slate-950 border shadow-md fixed top-0 -right-[100vw] text-orange-300 font-semibold transition-all duration-300 z-50"
      :class="{ '!right-0 opacity-100': sidebar.memu }"
    >
      <div class="flex items-center justify-end p-4">
        <v-btn
          icon="mdi-close"
          variant="tonal"
          @click="sidebar.memu = false"
        ></v-btn>
      </div>
      <div class="mt-5 me-7">
        <v-list class="!bg-inherit !text-inherit" lines="two">
          <nuxt-link
            :to="link.href"
            v-for="link in navLinks"
            :key="link.title"
            @click="sidebar.memu = false"
          >
            <v-list-item
              :title="link.title"
              :prepend-icon="link.icon"
            ></v-list-item>
          </nuxt-link>
        </v-list>
      </div>
    </div>
  </v-sheet>
</template>

<style lang="scss" scoped>
a {
  cursor: pointer;

  &:hover {
    color: #ffc400;
    // cursor: pointer;
  }
}

.nav-slide {
  position: fixed;
  top: 0 !important;
  background-color: rgb(15 23 42);
}

nav {
  a {
    font-size: small;

    &:hover {
      color: #ffc400;
      cursor: pointer;
    }
  }
}

.router-link-active {
  color: #ffc400;
}

.drop-content,
.dropdown-cont {
  max-height: 0px;
  height: auto !important;
  opacity: 0;
  z-index: 99;
  overflow: hidden;
  transition: all 0.5s ease-in-out !important;

  a {
    font-size: 16px;
  }
}

.drop-open {
  max-height: 1000px;
  opacity: 1 !important;
}

.nav-drop-down {
  &:hover {
    .drop-content {
      max-height: 500px !important;
      opacity: 1;
    }
  }
}

.pages-drop-down {
  &:hover {
    .drop-content {
      max-height: 400px !important;
      opacity: 1;
    }
  }
}

.currency-drop-down {
  &:hover {
    .drop-content {
      height: 170px !important;
      opacity: 1;
    }
  }
}
</style>
