<template>
  <div class="googleMap" style="height: 20vh;">
    <h2>lat: {{ currPos.lat }}</h2>
    <h2>lng: {{ currPos.lng }}</h2>
  </div>
  <div ref="mapDiv" style="width:100%; height:80vh;"></div>
</template>

<script lang="ts">
/* eslint-disable no-undef */
import { defineComponent, computed, onMounted, ref } from 'vue'
import { useGeolocation } from '@/plugin/useGeoloactionl'
import { Loader } from '@googlemaps/js-api-loader'

const googleMapsApiKey = 'AIzaSyCs74COIjvF20Nf-Su3NIFlmCSQ0iAy_g4'

export default defineComponent({
  name: 'GoogleMap',

  setup () {
    const mapDiv = ref<HTMLElement>()
    const { latitude, longitude } = useGeolocation().value

    const currPos = computed(() => ({
      lat: latitude,
      lng: longitude
    }))
    // const testgoogle = new google
    const loader = new Loader({ apiKey: googleMapsApiKey })

    onMounted(async () => {
      await loader.load()
      // const map = new google.maps.Map(mapDiv.value, {
      //   center: { lat: -34.397, lng: 150.644 },
      //   zoom: 8
      // })
    })
    // const currPos = { lat: 40.689247, lng: -74.044502 }

    return {
      currPos,
      mapDiv
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
