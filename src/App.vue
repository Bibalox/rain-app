<script setup lang="ts">
import AppHero from '@components/AppHero.vue'
</script>

<template>
  <app-hero />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&family=Quicksand:wght@700&display=swap');

:root {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;

  --primary-background: #000;
  --secondary-background: #151515;
  --tertiary-background: #343434;

  --primary-element: rgba(255, 255, 255, .93);
  --secondary-element: rgba(255, 255, 255, .3);
  --tertiary-element: rgba(255, 255, 255, .07);
}

html {
  height: calc(100% + env(safe-area-inset-top));
  -webkit-tap-highlight-color: transparent;
}

body {
  align-items: center;
  background-color: var(--primary-background);
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  padding: 0;
  width: 100%;
}

#app {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  padding: 24px;
  width: 100%;
}
</style>