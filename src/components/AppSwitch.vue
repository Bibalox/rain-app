<script setup lang="ts">
import { ref } from 'vue'

import SwitchButton from '@components/SwitchButton.vue'

import type { Option } from 'src/types.ts'

const props = defineProps<{
  options: Option[]
  value: String
}>()

const findPosition = (id: String) => props.options.findIndex(option => option.id === id)
const position = ref(findPosition(props.value))

const emit = defineEmits(['click'])

const manageClick = async (setting: String) => {
  emit('click', setting)
  position.value = findPosition(setting)
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
    <div class="app-switch__active-marker" :style="`--position: ${position}`" />
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
  width: 100%;

  &__active-marker {
    background-color: var(--tertiary-background);
    border-radius: 24px;
    border: 2px solid (var(--tertiary-element));
    box-sizing: border-box;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, .25);
    height: calc(100% - (2 * $spacing));
    left: $spacing;
    position: absolute;
    transform: translateX(calc(var(--position) * (100% + $spacing)));
    transition: transform .5s ease-in-out;
    top: $spacing;
    width: calc(50% - (3/2 * $spacing));
    z-index: 10;
  }
}
</style>