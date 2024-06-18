<script lang="ts" setup>
    const {paths} = defineProps(['paths'])
</script>

<template>
     <div class="relative  h-[300px] bg-[url(~/assets/images/breadcrumb/1.jpg)] bg-cover bg-center">
            <div class="absolute bg-black/40 w-full h-full top-0 left-0"></div>

            <div class="absolute w-full h-full left-0 top-0 flex flex-col justify-center items-center !z-40">
                <h2 class="text-4xl font-extrabold text-white uppercase mb-2.5">{{ paths[paths.length - 1] }}</h2>
                <p class="block font-lighter text-white/90">
                    <v-breadcrumbs :items="paths"></v-breadcrumbs>
                </p>
            </div>
        </div>
</template>
