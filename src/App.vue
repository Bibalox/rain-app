<script setup lang="ts">
import AppHero from '@components/AppHero.vue'
import AppSwitch from '@components/AppSwitch.vue'

import type { Option } from './types'

const atmospheres: Option[] = [
  {
    id: 'gentle-rain',
    label: 'Gentle Rain'
  },
  {
    id: 'distant-storm',
    label: 'Distant storm'
  }
]

const durations: Option[] = [
  {
    id: '30-minutes',
    label: '30 minutes'
  },
  {
    id: '1-hour',
    label: '1 hour'
  }
]

const settings = {
  atmosphere: 'gentle-rain',
  duration: '1-hour'
}

const updateSettings = (setting: string, optionType: 'atmosphere' | 'duration') => settings[optionType] = setting
</script>

<template>
  <app-hero />
  <main class="app__main">
    <app-switch
      :options="atmospheres"
      :value="settings.atmosphere"
      @click="setting => updateSettings(setting, 'atmosphere')"
    />
    <app-switch
      :options="durations"
      :value="settings.duration"
      @click="setting => updateSettings(setting, 'duration')"
    />
  </main>
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

button, a {
  touch-action: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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

.app {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 800px;
  max-width: 512px;
  padding: 16px 16px 32px;
  width: 100%;

  &__main {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
  }
}
</style>