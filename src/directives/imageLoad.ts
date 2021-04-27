import { Directive } from 'vue'

const imageLoad: Directive = {
  beforeMount (el: HTMLInputElement, binding) {
    const text: string = binding.value.text
    const className: string = binding.value.className

    function createImage () {
      const newImg = new Image()
      const src: string = binding.value.src
      const alt: string = binding.value.alt

      newImg.classList.add('skeleton-img')
      if (className) newImg.classList.add(className)

      newImg.alt = alt
      newImg.src = src

      newImg.onload = function () {
        el.replaceWith(newImg)
      }
    }

    setTimeout(() => {
      if (!text) {
        createImage()
      } else {
        el.classList.remove('loading')
        el.textContent = text
      }
    }, 300)
  }
}

const loadTest: Directive = {
  beforeMount (el: HTMLInputElement, binding) {
    const text: string = binding.value.text

    function createImage () {
      const newImg = new Image()
      const src: string = binding.value.src
      const alt: string = binding.value.alt
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
      if (!text) {
        createImage()
      } else {
        el.classList.remove('loading')
        el.textContent = text
      }
    }, 2000)
  }
}

const skeletonLoad: Directive = {
  beforeMount (el: HTMLInputElement, binding) {
    el.classList.add('123')
    const children = el.children

    console.log(children)
  }
}

export { imageLoad, loadTest, skeletonLoad }
