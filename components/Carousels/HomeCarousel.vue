<script lang="ts" setup>
import { useCurrency } from '@/stores/currency';
const currency = useCurrency()
</script>

<template>
  <v-carousel hide-delimiters show-arrows="hover" cycle>
    <template v-slot:prev="{ props }">
      <v-btn
        icon="mdi-arrow-left"
        variant="tonal"
        class="!bg-slate-950 !text-orange-400 !hidden md:!block"
        @click="props.onClick"
      ></v-btn>
    </template>
    <template v-slot:next="{ props }">
      <v-btn
      icon="mdi-arrow-right"
        variant="tonal"
        class="!bg-slate-950 !text-orange-400 !hidden md:!block"
        @click="props.onClick"
      ></v-btn>
    </template>

    <v-carousel-item src="~/assets/images/bg/bg-1.jpg" cover>
      <div  class="absolute z-50 flex justify-center items-center w-full h-full top-0 right-0 bg-black/50"></div>
      <div
        class="absolute z-50 flex justify-center items-center w-full h-full top-0 right-0"
      >
        <div class="w-[100%] ms-5 md:w-[80%] xl:w-[50%]">
          <h2
            class="text-2xl font-bold text-orange-300 animate__animated animate__backInUp animate__fast"
          >
            OKI'S INT'L ONLINE AND PHYSICAL STORE
          </h2>
          <h1
            class="md:text-5xl text-4xl font-extrabold text-white animate__animated animate__backInUp animate__slow"
          >
            START SHOPING AT YOUR COMFORT
          </h1>
          <br />
          <p
            class="text-2xl text-slate-100 font-semibold animate__animated animate__backInUp animate__slower"
          >
            Starting with as low as<span class="font-mono">{{ currency.currency== 'USD'? ' $5.00': ' N1,000.00' }}</span>
          </p>
        </div>
      </div>
    </v-carousel-item>

    <v-carousel-item src="~/assets/images/bg/bg-2.jpg" cover>
      <div  class="absolute z-50 flex justify-center items-center w-full h-full top-0 right-0 bg-black/60"></div>

      <div
        class="absolute z-50 flex justify-center items-center w-full h-full top-0 right-0"
      >
        <div class="w-[100%] ms-5 md:w-[80%] xl:w-[50%]">
          <h2
            class="text-2xl font-bold text-orange-300 animate__animated animate__backInUp animate__fast"
          >
            NEW ARRIVAL AVAILABLE INSTORE AND ONLINE
          </h2>
          <h1
            class="md:text-5xl text-4xl font-extrabold text-white animate__animated animate__backInUp animate__slow"
          >
            MEN AND WOMEN FASHION WEARS
          </h1>
          <br />
          <p
            class="text-2xl text-slate-100 font-semibold animate__animated animate__backInUp animate__slower"
          >
            Starting at <span class="font-mono">{{ currency.currency== 'USD'? ' $15.00': ' N7,000.00' }}</span>
          </p>
        </div>
      </div>
    </v-carousel-item>

    <v-carousel-item src="~/assets/images/bg/2-5.jpg" cover>
      <div  class="absolute z-50 flex justify-center items-center w-full h-full top-0 right-0 bg-black/60"></div>
      <div
        class="absolute z-50 flex justify-center items-center w-full h-full top-0 right-0"
      >
        <div class="w-[100%] ms-5 md:w-[80%] xl:w-[50%]">
          <h2
            class="text-2xl font-bold text-orange-300 animate__animated animate__backInUp animate__fast"
          >
            NEW AND FAIRLY USED COMPUTER, GADGET AND ACCESSORIES
          </h2>
          <h1
            class="md:text-5xl text-4xl font-extrabold text-white animate__animated animate__backInUp animate__slow"
          >
            Laptops Desktop and Phones
          </h1>
          <br />
          <p
            class="text-2xl text-slate-200 font-semibold animate__animated animate__backInUp animate__slower"
          >
            Starting at <span class="font-mono">{{ currency.currency== 'USD'? ' $5.00': ' N1,000.00' }}</span>
          </p>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>
