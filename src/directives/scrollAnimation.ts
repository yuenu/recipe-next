const lazingLoad = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
    })
  }
)

const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter')
        animatedScrollObserver.unobserve(entry.target)
      }
    })
  }
)

export default {
  beforeMount (el) {
    el.classList.add('before-enter')
    animatedScrollObserver.observe(el)
    lazingLoad.observe(el)
  }
}
