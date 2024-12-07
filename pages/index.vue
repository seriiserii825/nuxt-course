<script setup lang="ts">
const {sayHello} = useUtils()

sayHello()
</script>

<template>
  <PopupAlert />
  <NuxtImg
    width="1920"
    format="webp"
    quality="80"
    src="/images/Cities_Evening_Pskov_096474_.jpg"
  />
</template>
