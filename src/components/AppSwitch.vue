<script setup lang="ts">
import SwitchButton from '@components/SwitchButton.vue'

import type { Option } from 'src/types.ts'

const props = defineProps<{
  options: Option[]
  value: string
}>()

const emit = defineEmits(['click'])

const manageClick = (toto: string) => {
  emit('click', toto)
}
</script>

<template>
  <div class="app-switch">
    <switch-button
      v-for="option in props.options"
      :id="option.id"
      :key="option.id"
      :label="option.label"
      @click="manageClick(option.id)"
    />
    <div class="app-switch__active-marker" :style="`--position: ${props.value}`" />
  </div>
</template>

<style lang="scss">
$spacing: 8px;

.app-switch {
  background-color: var(--secondary-background);
  border-radius: 32px;
  box-sizing: border-box;
  display: flex;
  gap: $spacing;
  padding: $spacing;
  position: relative;
  transition: transform .2s ease-in-out;
  width: 100%;

  &__active-marker {
    background-color: var(--tertiary-background);
    border-radius: 24px;
    border: 2px solid (var(--tertiary-element));
    box-sizing: border-box;
    height: calc(100% - (2 * $spacing));
    left: $spacing;
    position: absolute;
    transform: translateX(calc(var(--position) * (100% + $spacing)));
    top: $spacing;
    width: calc(50% - (3/2 * $spacing));
    z-index: 10;
  }
}
</style>