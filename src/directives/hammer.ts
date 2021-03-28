import { Directive } from 'vue'
import Hammer from 'hammerjs'

export const pan: Directive = {
  mounted (el: HTMLElement, binding) {
    if (typeof binding.value === 'function') {
      const mc = new Hammer(el)
      mc.get('pan').set({ direction: Hammer.DIRECTION_ALL })
      mc.on('pan', binding.value)
    }
  }
}

export const tap = {
  mounted (el: HTMLElement, binding) {
    if (typeof binding.value === 'function') {
      const mc = new Hammer(el)
      mc.on('tap', binding.value)
    }
  }
}
