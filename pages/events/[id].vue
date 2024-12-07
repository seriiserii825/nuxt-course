<script setup lang="ts">
const route = useRoute()
const id = route.params.id;
</script>

<template>
  <div class="event-single">
    <h1>Event id: {{ id }}</h1>
  </div>
</template>

<style lang="scss">
.event-single {
}
</style>
