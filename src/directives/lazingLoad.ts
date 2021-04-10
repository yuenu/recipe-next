const lazingLoad = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
    })
  }
)

export default {
  beforeMount (el: HTMLInputElement) {
    lazingLoad.observe(el)
  }
}
