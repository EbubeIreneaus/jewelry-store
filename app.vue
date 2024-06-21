<script setup lang="ts">

    useSeoMeta({
        ogImage: '~/assets/images/breadcrumb/1.jpg'
    })
</script>

<template>
   <v-app>
    <NuxtLayout>
        <NuxtLoadingIndicator color="orange" :height="3" />
        <NuxtPage /> 
    </NuxtLayout>
   </v-app>
</template>
  
<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}
</style>