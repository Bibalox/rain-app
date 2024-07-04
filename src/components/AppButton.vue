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
.switch-button {
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  height: 128px;
  justify-content: center;
  padding: 20px 4px 16px;
  z-index: 20;

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