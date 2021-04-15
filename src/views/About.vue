<template>
  <div class="about-section">
    <Skeleton width="60" height="60" />
    <Skeleton height="20" />
    <Skeleton width="80%" />
    <Skeleton width="80%" />
    <Skeleton width="80%" />

    <div style="background: #333; height:250px; margin: 20px 0; padding: 20px;">
      <Skeleton
        width="60"
        height="60"
        mode="dark"
      />
      <Skeleton height="20" mode="dark" />
      <Skeleton width="80%" mode="dark" />
      <Skeleton width="80%" mode="dark" />
      <Skeleton width="80%" mode="dark" />
    </div>

    <div class="card-skeleton" style="display: inline-block;">
      <div class="img" style="width:275px; height:280px;">
        <Skeleton
          width="100%"
          height="100%"
          v-loadTest="{ src: imgSrc, alt: 'testImgAlt' }"
        />
      </div>
      <Skeleton
        width="50%"
        height="20"
        margin="20px 0 0 0"
      />
      <Skeleton
        width="40%"
        height="20"
        margin="5px 0"
      />
    </div>
    <div class="progress-box" style="display: inline-block;">
      <div
        class="progress-bar"
        data-label="Loading..."
        style="--width: 0"
        ref="progressEl"
      ></div>
      <button @click="startProgress">Start</button>
    </div>
    <div class="container">
      <div
        class="box"
        v-for="da in fakeData"
        :key="da.id"
        :ref="setBoxRef"
      >
        {{ da.id }} - {{ da.desc }}
      </div>
    </div>
    <div class="cbox">
      <div class="cbox__item">123</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUpdate, onUpdated } from 'vue'

import Skeleton from '@/components/UI/Skeleton.vue'

const imgSrc =
  'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80'

const fakeData = [
  {
    id: 1,
    desc: 'console.log(this.$refs.input1)//<input type="text" id="input1">'
  },
  {
    id: 2,
    desc: 'wqrwqniofdshnodfdj,fdsjfiod, Good for you!!'
  }
]

export default defineComponent({
  components: {
    Skeleton
  },
  setup () {
    const progressEl = ref<HTMLInputElement>()

    let boxRefs: HTMLInputElement[] = []
    const setBoxRef = (el: HTMLInputElement) => {
      if (el) {
        boxRefs.push(el)
      }
    }

    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
      boxRefs = []
    })
    onUpdated(() => {
      console.log('boxRefs', boxRefs)
    })

    function startProgress () {
      if (progressEl.value) {
        const computedStyle = getComputedStyle(progressEl.value)
        const width = parseFloat(
          computedStyle.getPropertyValue('--width') || '0'
        )
        progressEl.value.style.setProperty('--width', (width + 0.1).toString())
      }
    }

    onMounted(() => {
      console.log('setBoxRef', boxRefs)
      boxRefs[0].classList.add('123test')

      const timeoutID = setInterval(() => {
        if (progressEl.value) {
          const computedStyle = getComputedStyle(progressEl.value)
          const width = parseFloat(
            computedStyle.getPropertyValue('--width') || '0'
          )
          progressEl.value.style.setProperty(
            '--width',
            (width + 0.1).toString()
          )

          if (width >= 99.9) {
            clearInterval(timeoutID)
          }
        }
      }, 10)
    })

    return {
      imgSrc,
      progressEl,
      startProgress,
      fakeData,
      setBoxRef
    }
  }
})
</script>

<style lang="scss" scoped>
.card-skeleton {
  width: 300px;
  height: 370px;
  border: 1px solid #ccc;
  margin: 0 0 10px 0;
  padding: 10px;
}

.progress-bar {
  width: 500px;
  height: 3rem;
  background-color: #111;
  border-radius: 1.5rem;
  color: #fff;
  position: relative;
  display: inline-block;

  &:before {
    content: attr(data-label);
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    bottom: 0.5rem;
    display: flex;
    align-items: center;
    width: calc(var(--width, 0) * 1%);
    min-width: 2rem;
    max-width: calc(100% - 1rem);
    background-color: #069;
    border-radius: 1rem;
  }
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 100%;
    margin: 0 auto;
  }
}

.cbox {
  width: 150px;
  height: 150px;
  background:#ddd;
  border: 1px solid red;
  margin:0 auto;
    display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */

  box-pack: center;
  -webkit-box-pack: center;
  // box-align: center;
  // -webkit-box-align: center;

  &__itme {
    width:100%;
    -webkit-box-pack: center;
  }
}
</style>
