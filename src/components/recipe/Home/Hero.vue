<template>
  <section class="hero">
    <div class="hero-box">
      <h2 class="hero-box__heading">Make meal by your own</h2>
      <div class="hero-box__text">
        You can discover thousands of meals on here every day!
      </div>
      <button class="ctaButton">Try now !</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(to left, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
    url('../../../assets/example/bg1.jpg') no-repeat left center / cover;
  width: 100%;
  height: 650px;
  position: relative;

  &-box {
    color: white;
    position: absolute;
    right: 10%;
    top: 20%;
  }

  &-box__heading {
    font-size: 45px;
    margin-bottom: 1.1rem;
  }
}

.ctaButton {
  text-decoration: none;
  background: transparent;
  border: 2px solid rgb(255, 206, 45);
  border-radius: 0.1rem;
  color: #fff;
  width: 6.8rem;
  height: 3.3rem;
  margin: 36px 0 0;
  font-size: 18px;
  font-weight: 300;
  font-family: inherit;
  position: relative;
  float: left;
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: rgb(255, 214, 77);
    color: #333;
  }
}
</style>
