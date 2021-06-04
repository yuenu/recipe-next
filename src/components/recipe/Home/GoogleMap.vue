<template>
  <div class="googleMap">
    <h1 class="googleMap__heading">地圖資訊</h1>
    <div class="mapDiv" ref="mapDiv"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Loader } from '@googlemaps/js-api-loader'

const googleMapsApiKey = 'AIzaSyCs74COIjvF20Nf-Su3NIFlmCSQ0iAy_g4'
const TaichungCityGovernment = { lat: 24.161796, lng: 120.646765 }

export default defineComponent({
  name: 'GoogleMap',

  setup () {
    const mapDiv = ref<HTMLElement>()

    const loader = new Loader({ apiKey: googleMapsApiKey, language: 'zh_TW' })

    function initMap () {
      if (!mapDiv.value) {
        return
      }

      const map = ref<google.maps.Map>()
      const marker = ref<google.maps.Marker>()
      const geocoder = new google.maps.Geocoder()

      map.value = new google.maps.Map(mapDiv.value, {
        center: TaichungCityGovernment,
        zoom: 16
      })

      geocoder.geocode(
        { address: 'Taichung City Government' },
        (results, status) => {
          if (status === 'OK' && results) {
            if (!map.value) return
            map.value.setCenter(results[0].geometry.location)
            marker.value = new google.maps.Marker({
              map: map.value,
              position: results[0].geometry.location
            })
          } else {
            console.log(
              'Geocode was not successful for the following reason: ' + status
            )
          }
        }
      )
    }

    onMounted(async () => {
      await loader.load()
      initMap()
    })

    return {
      mapDiv
    }
  }
})
</script>

<style lang="scss" scoped>
.googleMap {
  width: 100%;
  margin: 0 0 5rem 0;

  &__heading {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 10px;
    border-bottom: 1px solid black;
    // display: inline-block;
  }
}
.mapDiv {
  height: 60vh;
}

@media (max-width: 1360px) {
  .googleMap {
    padding: 0 10px;
    margin: 0 0 2.5rem 0;
  }
}
</style>
