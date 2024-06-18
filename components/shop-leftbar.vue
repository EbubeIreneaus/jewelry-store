<template>
    <div class="w-full border bg-slate-950 ">
        <div class="px-5 py-7">
            <div class="">
                <h2 class="text-2xl font-bold text-orange-400">CATEGORIES</h2>
            </div>
            <ul class="my-5 font-sans">
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Game and Console</span> <span>(21)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Appliance</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Audio</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Bakeware</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Body parts</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Camera &amp; Camcoder</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Car parts</span> <span>(15)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Cookies &amp; Crackers</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Interior</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>shop</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Smartwatch</span> <span>(31)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Suspension</span> <span>(18)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Tools &amp; Accessories</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Turbo System</span> <span>(22)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>TV &amp; Audio</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Oil &amp; Fluid</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Exterior</span> <span>(12)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>BreakFast</span> <span>(0)</span>
                    </li>
                </nuxt-link>
            </ul>
        </div>
    </div>

    <div class="font-sans my-10 bg-slate-950 py-7 px-5">
        <div>
            <h2 class="text-3xl font-bold">PRICE:</h2>
        </div><br>
        <div><input type="range" min="10" max="1000" v-model="price_range" step="10" class="w-full py-2.5 "></div>
        <div class=" font-mono flex">
            <p>Price: &nbsp;</p>
            <p>$10 - ${{ price_range }}</p>
        </div>
    </div>

    <div class="w-full border bg-slate-950 my-7 py-7 px-5">
        <div class="px-3">
            <div class="">
                <h2 class="text-2xl font-bold">COLOR</h2>
            </div>
            <ul class="my-5 font-sans">
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Black</span> <span>(21)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>White</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Yellow</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Orange</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Blue</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>Green</span> <span>(0)</span>
                    </li>
                </nuxt-link>
            </ul>
        </div>
    </div>

    <div class="w-full border bg-slate-950 py-7 px-5">
        <div class="px-3">
            <div class="">
                <h2 class="text-2xl font-bold">SIZE</h2>
            </div>
            <ul class="my-5 font-sans">
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>xsm</span> <span>(21)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>sm</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>md</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>lg</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>xl</span> <span>(0)</span>
                    </li>
                </nuxt-link>
                <nuxt-link to="/shop">
                    <li class="flex mb-3 hover:text-orange-500 justify-between  text-orange-200">
                        <span>xxl</span> <span>(0)</span>
                    </li>
                </nuxt-link>
            </ul>
        </div>
    </div>
</template>

<script setup>
const price_range = ref(100)
</script>

<style lang="scss" scoped></style>