<template>
    <div>
        <footer class="relative bg-black text-white/90 pt-8 pb-6 mt-14">
            <div class="container mx-auto px-4">
                <div class="flex flex-wrap text-left lg:text-left">
                    <div class="w-full lg:w-4/12 px-4 mb-5">
                        <h4 class="text-3xl fonat-semibold text-orange-500 my-1 uppercase">Oki's Store</h4>
                        <h5 class="text-sm mt-2 mb-4 text-blueGray-600 ">
                            We are a team of designers and developers that create high quality HTML Template &amp; Woocommerce, Shopify Theme
                        </h5>
                        <p><span class="font-bold">Addresss</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    </div>
                    <div class="w-full lg:w-6/12 px-4 ">
                        <div class="flex flex-wrap items-top mb-6 mt-1 gap-4">
                            <div class="w-full lg:w-4/12 px-4 ml-auto">
                                <span class="block uppercase text-orange-500 text-md font-semibold mb-2">Useful
                                    Links</span>
                                <ul class="list-unstyled">
                                    <li>
                                        <nuxt-link to="/"
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Home</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/company"
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Company</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/service"
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Service</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/contact"
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">Free
                                            Contact</nuxt-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="w-full lg:w-4/12 px-4">
                                <span
                                    class="block uppercase text-blueGray-500 text-md text-orange-500 font-semibold mb-2">Other
                                    Resources</span>
                                <ul class="list-unstyled">
                                    <li>
                                        <nuxt-link to="/auth/login"
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                                            Login</nuxt-link>
                                    </li>
                                    <li>
                                        <nuxt-link to="/auth/register"
                                            class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm">
                                            Register</nuxt-link>
                                    </li>
                                    <li>
                                        <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                            href="#">Privacy Policy</a>
                                    </li>
                                    <!-- <li>
                                                <a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                    href="https://creative-tim.com/contact-us?ref=njs-profile">Contact Us</a>
                                            </li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-blueGray-300">
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                    <div class="w-full md:w-4/12 px-4 mx-auto text-center">
                        <div class="text-sm text-blueGray-500 font-semibold py-1">
                            Copyright © <span id="get-current-year">2016 - {{ year }}</span><a href="#"
                                class="text-blueGray-500 hover:text-gray-800" target="_blank"> Oki's Store</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>