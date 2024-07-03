<script setup lang="ts">
const props = defineProps<{
  value: String
}>()
</script>

<template>
  <h1
    class="app-title"
    v-text="props.value"
  />
</template>

<style lang="scss">
.app-title {
  color: white;
  cursor: default;
  font-family: Dosis;
  font-size: 48px;
}
</style>