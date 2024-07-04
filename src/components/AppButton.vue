<script setup lang="ts">
const props = defineProps<{ label: string }>()

defineEmits(['click'])
</script>

<template>
  <button class="app-button" @click="$emit('click')">
    <label
      class="app-button__label"
      v-text="props.label"
    />
  </button>
</template>

<style lang="scss">
.app-button {
  align-items: center;
  background-color: var(--tertiary-background);
  border: none;
  border-radius: 28px;
  cursor: pointer;
  display: flex;
  height: 56px;
  justify-content: center;

  @media (hover: hover) {
    transition: transform .2s;

    &:hover {
      transform: translateY(1px);
    }

    &:active {
      transform: translateY(3px);
    }
  }

  @media (hover: none) {
    transition: transform .1s;

    &:active {
      transform: translateY(2px);
    }
  }

  &__label {
    color: var(--primary-element);
    font-family: "Quicksand";
    font-size: 20px;
  }
}
</style>