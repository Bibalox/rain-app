<script setup lang="ts">
import { ref } from 'vue'

import AppHero from '@components/AppHero.vue'
import AppSwitch from '@components/AppSwitch.vue'
import AppTitle from '@components/AppTitle.vue'
import AppPuddle from '@components/AppPuddle.vue'
import AppButton from '@components/AppButton.vue'

import type { Ref } from 'vue'
import type { Option } from './types'


// STATE

const waiting = ref(true)

const settings = {
  atmosphere: 'gentle-rain',
  duration: '1-hour'
}


// DATA

const options: { [key: string]: Option[] } = {
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

const audioContext = new (window.AudioContext || window.webkitAudioContext)()
const audioSource: Ref<AudioBufferSourceNode | null> = ref(null)


// METHODS

const updateSettings = (setting: string, optionType: 'atmosphere' | 'duration') => settings[optionType] = setting

const startTheRain = async () => {
  waiting.value = false

  // TO BE REMOVED
  const duration = settings.duration === '30-minutes' ? 2 : 10

  const arrayBuffer = await fetch(
    '/sounds/rain-03.flac'
  ).then(res => res.arrayBuffer())

  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer)

  audioSource.value = audioContext.createBufferSource()
  audioSource.value.buffer = audioBuffer
  audioSource.value.loop = true
  audioSource.value.connect(audioContext.destination)
  audioSource.value.start()
  audioSource.value.stop(audioContext.currentTime + duration)
}

const stopTheRain = () => {
  waiting.value = true

  if (audioSource.value) {
    audioSource.value.stop()
    audioSource.value = null
  }
}
</script>

<template>
  <transition>
    <main v-if="waiting" class="app__main">
      <app-hero />
      <section class="app__section">
        <app-switch
          :options="options.atmospheres"
          :value="settings.atmosphere"
          @click="setting => updateSettings(setting, 'atmosphere')"
        />
        <app-switch
          :options="options.durations"
          :value="settings.duration"
          @click="setting => updateSettings(setting, 'duration')"
        />
      </section>
      <app-button label="Begin" @click="startTheRain()" />
    </main>
      
    <main v-else class="app__main">
      <app-puddle />
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
  max-width: 400px;
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