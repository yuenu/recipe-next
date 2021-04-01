import { onUnmounted, onMounted, ref } from 'vue'

interface Coordinate {
  latitude: number
  longitude: number
}

export const useGeolocation = () => {
  const coords = ref<Coordinate>({ latitude: 0, longitude: 0 })
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

  return coords
}
