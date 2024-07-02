<script setup lang="ts">

</script>

<template>
  <span>Hello world!</span>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700&family=Quicksand:wght@700&display=swap');

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
  padding: 0;
  margin: 0;
  
  color: white;
  font-family: Quicksand;
  font-size: 48px;
}
</style>