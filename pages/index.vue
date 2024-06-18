<template>
    <div>
        
        <carousels-home-carousel />

        <v-sheet class="w-[95%] my-16 py-10 mx-auto !bg-slate-950 !text-orange-300" rounded="lg">
            <div class="grid md:grid-cols-2 md:gap-7 gap-8 w-full lg:w-[75%] mx-auto px-3">
                <div class="flex items-center  w-fit gap-5 px-2 py-5 ms-5">
                    <i class="fas fa-shipping-fast text-2xl"></i>
                    <div class="block">
                        <h2 class="font-bold text-lg font-serif mb-2">Free Shipping</h2>
                        <p class="text-white/50 font-semibold font-mono text-sm">Free Delivery on all Abuja order</p>
                    </div>
                </div>
                <div class="flex items-center  w-fit gap-5 px-2 py-5 ms-5">
                    <i class="far fa-question-circle text-2xl"></i>
                    <div class="block">
                        <h2 class="font-bold text-lg font-serif mb-2">Support 24/7</h2>
                        <p class="text-white/50 font-semibold font-mono text-sm">Contact us 24 hours a day</p>
                    </div>
                </div>

                <div class="flex items-center  w-fit gap-5 px-2 py-5 ms-5">
                    <i class="fas fa-redo text-2xl"></i>
                    <div class="block">
                        <h2 class="font-bold text-lg font-serif mb-2">100% Money Back</h2>
                        <p class="text-white/50 font-semibold font-mono text-sm">You have 30 days to Return</p>
                    </div>
                </div>
                <div class="flex items-center  w-fit gap-5 px-2 py-5 ms-5">
                    <i class="fas fa-recycle text-2xl"></i>
                    <div class="block">
                        <h2 class="font-bold text-lg font-serif mb-2">90 Days Return</h2>
                        <p class="text-white/50 font-semibold font-mono text-sm">90 Days Return</p>
                    </div>
                </div>

            </div>
        </v-sheet>

        <!-- Featured Categories -->
        <div>
            <div class="text-center">
                <p class="text-white/50 font-semibold text-sm">Top Featured Collections</p>
                <p class=" text-3xl font-bold">Featured Categories</p>
            </div>

            <div class="swiper-container fcs max-h-fit h-full my-10 md:w-[90%] mx-auto group relative">
                <div class="swiper-wrapper ">
                    <v-card class="swiper-slide !bg-slate-950 !text-orange-100" elevation="4" rounded="xl" v-for="(product, index) in product">
                        <div class="flex items-center gap-2 px-5 py-10 shadow-sm rounded-2xl">
                            <img :src="product.image" alt="" class="w-32 h-32 object-cover">
                            <div>
                                <p class="text-lg text-orange-400">({{ 20 * index / 2 }} product available)</p>
                                <ul class="text-sm font-bold">
                                    <li class="my-1 flex items-center gap-1.5">
                                        <i class="fa fa-arrow-right font-bold"></i>
                                        <nuxt-link to="">codeXtreme</nuxt-link>
                                    </li>
                                    <li class="my-1 flex items-center gap- !line-clamp-1">
                                        <i class="fa fa-arrow-right font-bold "></i>&nbsp;
                                        <nuxt-link to="">{{product.title}}</nuxt-link>
                                    </li>
                                    <li class="my-1 flex items-center gap-1.5 !sr-onlyline-clamp-1">
                                        <i class="fa fa-arrow-right font-bold"></i>
                                        <nuxt-link to="">{{ product.category }}</nuxt-link>
                                    </li>
                                    <li class="my-1 flex items-center gap-1.5">
                                        <i class="fa fa-arrow-right font-bold "></i>
                                        <nuxt-link to="">In Stock</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </v-card>

                </div>
                <v-btn icon="mdi-less-than" class="swiper-button-prev border p-3 bg-slate-200 !invisible group-hover:!visible"></v-btn>
                <v-btn icon="mdi-greater-than" class="swiper-button-next p-3 bg-slate-200 !invisible group-hover:!visible"></v-btn>
            </div>
        </div>

        <!-- BANNER -->
        <div class="grid lg:grid-cols-2 gap-5 w-full max-w-[95%] mx-auto my-24">
            <div class="h-[400px] w-full relative">
                <img src="~/assets/images/banner/1-1.jpg" alt="" class="w-full h-full object-cover">
                <div class="flex w-full h-full items-center absolute top-0 md:left-16 left-5">
                    <div class="">
                        <p class="text-orange-300 font-semibold mb-2">GET 20% OFF YOUR ORDER</p>
                        <h2 class="text-4xl text-white">NECKLACE AND RINGS</h2>
                        <h2 class="text-4xl text-white/80 font-bold"> GOLD AND DIAMOND</h2>
                        <p class="font-semibold mt-3 text-slate-100">
                            Lorem ipsum dolor sit amet consectetur<br> adipisicing elit. Illum, voluptate.</p>
                        <br><br>
                        <nuxt-link to="" class="ring ring-orange-200 px-10 py-2.5 bg-orange-500 text-white rounded-lg
                        hover:bg-orange-300">
                            Shop now</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="h-[400px] w-full relative">
                <img src="~/assets/images/banner/1-2.jpg" alt="" class="w-full h-full object-cover">
                <div class="flex w-full h-full items-center absolute top-0 md:left-16 left-5">
                    <div class="">
                        <p class="text-orange-300 font-semibold mb-2">SAVE $120 WHEN YOU BUY</p>
                        <h2 class="text-4xl text-white">ROTIFORM SFO</h2>
                        <h2 class="text-4xl text-white/80 font-bold"> CUSTOM FORGED</h2>
                        <p class="font-semibold mt-3 text-slate-100 max-w-sm">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam tempore distinctio cupiditate
                            expedita officiis laudantium.</p>
                        <br>
                        <nuxt-link to="" class="ring ring-orange-200 px-10 py-2.5 bg-orange-500 text-white rounded-lg
                        hover:bg-orange-300">
                            Shop now</nuxt-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- small banners -->
        <div>
            <div class="grid lg:grid-cols-3 gap-3 mx-5">
                <img src="~/assets/images/banner/1-3.jpg" alt="" class="w-full  object-cover">
                <img src="~/assets/images/banner/1-4.jpg" alt="" class="w-full  object-cover">
                <img src="~/assets/images/banner/1-5.jpg" alt="" class="w-full object-cover">
            </div>
        </div>
        
        <!-- new on arrival -->
        <div class="my-14">
            <div class="text-center">
                <p class="text-white/50 font-semibold text-sm">New Arrivals Products</p>
                <p class=" text-3xl font-bold ">New Arrivals Products</p>
            </div>
            <div class="mt-10">
                <oneline-product></oneline-product>
            </div>
        </div>
        <!-- banner large -->
        <div>
            <div class="mt-5">
                <img src="~/assets/images/banner/1-6.jpg" alt="" class="w-full h-full">
            </div>
        </div>

        <div class="grid md:grid-cols-3 gap-5 my-16 px-5">
            <img src="~/assets/images/banner/2-3.jpg" alt="">
            <img src="~/assets/images/banner/2-4.jpg" alt="">
            <img src="~/assets/images/banner/2-5.jpg" alt="">
        </div>

        <!-- shop by brands -->
        <div>
            <div class="text-center">
                <p class="text-white/50 font-semibold text-sm">Top Quality Partner</p>
                <p class=" text-3xl font-bold">Shop By Brands</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-5 my-10 px-5">
                <img src="~/assets/images/brand/1.jpg" alt="">
                <img src="~/assets/images/brand/2.jpg" alt="">
                <img src="~/assets/images/brand/3.jpg" alt="">
                <img src="~/assets/images/brand/4.jpg" alt="">
                <img src="~/assets/images/brand/5.jpg" alt="">
                <img src="~/assets/images/brand/6.jpg" alt="">
                <img src="~/assets/images/brand/7.jpg" alt="">
            </div>

        </div><br>
        <!-- new laters -->
        <div>
            <div class="relative h-52 mg:h-fit border">
                <img src="~/assets/images/breadcrumb/1.jpg" alt="" class="h-full w-full object-cover">
                <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <div class="text-white/70 text-center max-w-2xl w-full px-3 md:px-0">
                        <h2 class="text-4xl font-bold">Join our news Later</h2>
                        <p class="text-sm font-semibold mt-3">Get E-mail updates about our latest shop and special offers.
                        </p>

                        <div class="mt-3 md:mt-10 flex items-center">
                            <input type="email" placeholder="Enter your email"
                                class="w-full py-2.5 outline-none ps-5 text-black/50">
                            <button class="bg-orange-400 py-2.5 px-10">subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const { data: product, pending, error } =  await useFetch('https://fakestoreapi.com/products', {
    params: { imit: 20 },
    watch: false
})

onMounted(() => {
    const fcs = new Swiper('.fcs', {
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 20,
        breakpoints: {

            // when window width is >= 640px
            462: {
                slidesPerView: 2,
                spaceBetween: 20
            },

            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            }

        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
})

</script>

<style scoped>img {
    object-fit: cover;
}</style>