import { onUnmounted, onMounted, ref } from 'vue'

interface Coordinate {
  latitude: number
  longitude: number
}

export function useGeolocation<T> () {
  const coords = ref<T | Coordinate>({ latitude: 0, longitude: 0 })
  const isSupported = 'navigator' in Window && 'geolocation' in navigator

  let watcher: number
  onMounted(() => {
    if (isSupported) {
      watcher = navigator.geolocation.watchPosition(
        position => (coords.value = position.coords))
    }
  })

  onUnmounted(() => {
    if (watcher) {
      navigator.geolocation.clearWatch(watcher)
    }
  })
}
