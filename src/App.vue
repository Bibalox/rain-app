<script setup lang="ts">
import { reactive } from 'vue'

import AppHero from '@components/AppHero.vue'
import AppSwitch from '@components/AppSwitch.vue'
import AppTitle from '@components/AppTitle.vue'
import AppButton from '@components/AppButton.vue'

import type { Option } from './types'

const state = reactive({
  waiting: true
})

const data: { [key: string]: Option[] } = {
  atmospheres: [
    {
      id: 'gentle-rain',
      label: 'Gentle Rain'
    },
    {
      id: 'distant-storm',
      label: 'Distant storm'
    }
  ],
  durations: [
    {
      id: '30-minutes',
      label: '30 minutes'
    },
    {
      id: '1-hour',
      label: '1 hour'
    }
  ]
}

const settings = {
  atmosphere: 'gentle-rain',
  duration: '1-hour'
}

const updateSettings = (setting: string, optionType: 'atmosphere' | 'duration') => settings[optionType] = setting

const startTheRain = () => {
  state.waiting = false
}

const stopTheRain = () => {
  state.waiting = true
}
</script>

<template>
  <transition>
    <main v-if="state.waiting" class="app__main">
      <app-hero />
      <section class="app__section">
        <app-switch
          :options="data.atmospheres"
          :value="settings.atmosphere"
          @click="setting => updateSettings(setting, 'atmosphere')"
        />
        <app-switch
          :options="data.durations"
          :value="settings.duration"
          @click="setting => updateSettings(setting, 'duration')"
        />
      </section>
      <app-button label="Begin" @click="startTheRain()" />
    </main>
      
    <main v-else class="app__main">
      <section class="app__section">
        <app-title value="Sleep well" fade-out />
      </section>
      <app-button label="Stop" @click="stopTheRain()" />
    </main>
  </transition>
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
  height: 100%;
  -webkit-tap-highlight-color: transparent;
}

body {
  align-items: center;
  background-color: var(--primary-background);
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0;
  overflow: hidden;
  padding: calc(16px + env(safe-area-inset-top)) 16px calc(32px + env(safe-area-inset-bottom));
  width: 100%;
}

.app {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 800px;
  max-width: 512px;
  position: relative;
  width: 100%;

  &__main {
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100%;
    width: 100%;
  }

  &__section {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    width: 100%;
  }
}

button, a {
  touch-action: none;
}

label {
  cursor: inherit;
}

.v-enter-from,
.v-leave-to {
  transition: opacity 1.5s;
  opacity: 0;
}

.v-leave-from,
.v-enter-to {
  transition: opacity 2.5s .75s;
  opacity: 1;
}
</style>