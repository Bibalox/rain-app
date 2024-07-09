declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext
  }
}

export interface Option {
  id: string
  label: string
}