import { Directive } from 'vue'

const imageLoad: Directive = {
  beforeMount (el: HTMLInputElement, binding) {
    const src: string = binding.value.src
    const alt: string = binding.value.alt
    const className: string = binding.value.className

    function createImage () {
      const newImg = new Image()

      newImg.classList.add('skeleton-img')
      if (className) newImg.classList.add(className)

      newImg.alt = alt
      newImg.src = src

      newImg.onload = function () {
        el.replaceWith(newImg)
      }
    }

    setTimeout(() => {
      createImage()
    }, 300)
  }
}

const loadTest: Directive = {
  beforeMount (el: HTMLInputElement, binding) {
    const src: string = binding.value.src
    const alt: string = binding.value.alt

    function createImage () {
      const newImg = new Image()
      newImg.classList.add('card__img')
      newImg.alt = alt
      newImg.src = src
      newImg.style.width = '100%'
      newImg.style.height = '100%'
      newImg.onload = function () {
        el.replaceWith(newImg)
      }
    }

    setTimeout(() => {
      createImage()
    }, 2000)
  }
}

export { imageLoad, loadTest }
