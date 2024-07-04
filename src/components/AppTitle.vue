<script setup lang="ts">
const props = defineProps<{
  value: string
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
  color: var(--primary-element);
  cursor: default;
  font-family: Dosis;
  font-size: 48px;
  margin: 0;
}
</style>