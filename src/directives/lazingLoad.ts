const options = {
  rootMargin: '30px 0px 30px 0px',
  thresholds: 0
}

const lazingLoad = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    console.log('cool')
    if (entry.isIntersecting) {
      observer.unobserve(entry.target)
    }
  })
}, options)

export default {
  beforeMount (el: HTMLInputElement) {
    lazingLoad.observe(el)
  }
}
