<script setup lang="ts">

</script>

<template>
  <span>Hello world!</span>
</template>

<style lang="scss">
:root {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}

html {
  height: calc(100% + env(safe-area-inset-top));
  -webkit-tap-highlight-color: transparent;
}

body {
  align-items: center;
  background-color: black;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
  
  color: white;
}
</style>