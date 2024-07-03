<script setup lang="ts">
import AppTitle from '@components/AppTitle.vue'
</script>

<template>
  <header class="app-hero">
    <app-title value="Rainy night" />
    <img class="app-hero__icon app-hero__icon--cloud" src="/icons/hero/cloud.svg" />
    <img class="app-hero__icon app-hero__icon--stars" src="/icons/hero/stars.svg" />
    <img class="app-hero__icon app-hero__icon--moon" src="/icons/hero/moon.svg" />
  </header>
</template>

<style lang="scss">
.app-hero {
  align-items: center;
  display: flex;
  height: 180px;
  justify-content: center;
  position: relative;
  width: 100%;

  &__icon {
    position: absolute;

    &--cloud {
      bottom: 0;
      left: -10vw;
    }

    &--stars {
      top: 23px;
      left: 8%;
    }

    &--moon {
      top: 0;
      right: -10vw;
    }
  }
}
</style>