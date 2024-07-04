<script setup lang="ts">
const props = defineProps<{
  value: string,
  fadeOut?: boolean
}>()
</script>

<template>
  <h1
    :class="[
      'app-title',
      { 'app-title--fade-out': fadeOut }
    ]"
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
  text-align: center;

  &--fade-out {
    animation: fadeOut 5s 5s ease-out both;

    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  }
}
</style>