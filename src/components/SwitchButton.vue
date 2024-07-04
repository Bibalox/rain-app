<script setup lang="ts">
import type { Option } from 'src/types.ts'

const props = defineProps<Option>()

const emit = defineEmits(['click'])

const manageClick = () => {
  emit('click')
}
</script>

<template>
  <button class="switch-button" @click="manageClick()">
    <img
      class="switch-button__icon"
      :src="`/icons/switch/${props.id}.svg`"
    />
    <label
      class="switch-button__label"
      v-text="props.label"
    />
  </button>
</template>

<style lang="scss">
.switch-button {
  align-items: center;
  background-color: transparent;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  height: 128px;
  justify-content: center;
  padding: 20px 4px 16px;
  transition: background-color .3s;
  z-index: 20;

  @media (hover: hover) {
    &:hover {
      background-color: rgba(255,255,255,.02);
    }
  }
  
  &__icon {
    height: 56px;
    width: 56px;
  }

  &__label {
    color: var(--primary-element);
    font-family: "Quicksand";
    font-size: 14px;
  }
}
</style>