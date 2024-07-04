<script setup lang="ts">
const props = defineProps<{
  label: string
}>()

const emit = defineEmits(['click'])

const manageClick = () => {
  emit('click')
}
</script>

<template>
  <button class="app-button" @click="manageClick()">
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
  transition: transform .3s;

  @media (hover: hover) {
    &:hover {
      transform: translateY(2px);
    }
  }

  &:active {
      transform: translateY(4px);
    }

  &__label {
    color: var(--primary-element);
    font-family: "Quicksand";
    font-size: 20px;
  }
}
</style>