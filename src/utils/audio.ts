const adjustVolume = async (
  audio: HTMLMediaElement,
  newVolume: number,
  duration: number = 3000
): Promise<void> => {
  const originalVolume = audio.volume
  const delta = newVolume - originalVolume
  const interval = 13

  if (!delta || !duration) {
    audio.volume = newVolume
    return Promise.resolve()
  }

  const ticks = Math.floor(duration / interval)
  let tick = 1

  return new Promise(resolve => {
    const timer = setInterval(() => {
      audio.volume = originalVolume + (
        (0.5 - Math.cos((tick / ticks) * Math.PI) / 2) * delta
      )

      if (++tick === ticks + 1) {
        clearInterval(timer)
        resolve()
      }
    }, interval)
  })
}

export const playAudio = (audio: HTMLMediaElement) => {
  audio.play()
  adjustVolume(audio, 1, 3000)
}

export const stopAudio = async (audio: HTMLMediaElement, duration?: number) => {
  await adjustVolume(audio, 0, duration)
  audio.pause()
}