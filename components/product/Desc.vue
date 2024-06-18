<template>
    <div>
        <p class="text-black/60 font-semibold">
        {{ product.description }}
        </p>
    </div>
</template>

<script setup>
const props = defineProps(['product'])

</script>

<style lang="scss" scoped>

</style>