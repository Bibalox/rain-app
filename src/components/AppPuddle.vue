<script setup lang="ts">
</script>

<template>
  <div class="app-puddle">
    <div
      v-for="n in 15" :key="n"
      class="app-puddle__drop"
    />
  </div>
</template>

<style lang="scss">
.app-puddle {
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;

  &__drop {
    background-color: rgba(255, 255, 255, 0.1);
    border: 2px solid white;
    border-radius: 50%;
    box-shadow: inset 0px 0px 20px 2px rgba(255, 255, 255, 0.3);
    height: 150px;
    opacity: 0;
    position: absolute;
    transform: translate(-100px, -100px);
    width: 150px;

    @for $i from 1 through 15 {
      $top: (random(2001) - 1) * 0.05%;
      $left: (random(2001) - 1) * 0.05%;
      $delay: (random(6001) - 1) * 0.005s;
      $duration: 4s;

      &:nth-of-type(#{$i}) {
        animation: splash $duration $delay infinite cubic-bezier(0.25, 1, 0.5, 1);
        left: $left;
        top: $top;
      }
    }

    @keyframes splash {
      from {
        opacity: 0.5;
        transform: scale(0);
      }
      to {
        opacity: 0;
        transform: scale(1);
      }
    }
  }
}
</style>