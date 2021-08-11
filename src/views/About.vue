<template>
  <div class="about-section">
    <div class="card-skeleton" style="display: inline-block;">
      <div class="img" style="width:275px; height:280px;">
        <Skeleton
          width="100%"
          height="100%"
          v-loadTest="{ src: imgSrc, alt: 'testImgAlt' }"
        />
      </div>
      <div
        class="loading"
        style="width:100%; margin: 10px;"
        v-loadTest="{ text: 'apple' }"
      ></div>

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
      >
        {{ da.id }} - {{ da.desc }}
      </div>
    </div>

    <div
      class="skText"
      style="margin:20px;"
      skeletonLoad
    >
      <span>This is skeleton text test line!</span>
    </div>

    <div class="clipborad">
      <div class="text" ref="textEl">
        Lorem ipsum <span style="color: red;">dolor </span>sit amet consectetur adipisicing elit. Natus debitis
        laudantium quisquam aut pariatur consectetur, corrupti deserunt error
        porro enim maxime amet earum quis, quidem consequatur excepturi aliquid
        asperiores sequi.
      </div>
      <button @click="copy">Copy</button>
      <!-- <button @click="copyToClipboard(textEl?.value.innterHTML)">Copy2</button> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

import Skeleton from '@/components/UI/Skeleton.vue'
import { useI18n } from 'vue-i18n'

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
    const { t, locale } = useI18n()
    function changeLang () {
      locale.value = 'en'
    }

    const progressEl = ref<HTMLInputElement>()

    const textEl = ref<HTMLInputElement>()
    function copy () {
      console.log(textEl.value)
      console.log(document.getElementsByClassName('clipborad')[0])
      if (textEl.value) {
        const range = document.createRange()

        // const texts = textEl.value.innerHTML

        range.selectNode(textEl.value)

        const selection = window.getSelection()

        if (selection) {
          selection.removeAllRanges()
          selection.addRange(range)
          document.execCommand('copy')
          selection.removeAllRanges()
        }
      }
    }

    function copyToClipboard (text: string) {
      const el = document.createElement('textarea')
      el.addEventListener('focusin', e => e.stopPropagation())
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }

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
      t,
      changeLang,
      copy,
      textEl,
      copyToClipboard
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
  background: #ddd;
  border: 1px solid red;
  margin: 0 auto;
  display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */

  box-pack: center;
  -webkit-box-pack: center;

  &__itme {
    width: 100%;
    -webkit-box-pack: center;
  }
}

.card__heading {
  width: 100%;
  min-height: 5px;
}
</style>
