<template>
  <section class="about">
    <div class="custom-shape-divider-top-1662023817">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div class="wrapper">
      <div class="image">
        <img src="../assets/lock.png" alt="" />
      </div>
      <div class="container">
        <div class="card1"></div>
        <div class="card1"></div>
        <div class="card1"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.about {
  background: rgb(5 3 81);
  height: fit-content;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: row;
  justify-self: center;
  justify-content: center;
  align-self: center;
  border-radius: 30px;
  column-gap: 4rem;
}
.card1 {
  width: 400px;
  height: 350px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(3.5px);
  -webkit-backdrop-filter: blur(3.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
img {
  width: 800px;
  height: auto;
}
.custom-shape-divider-top-1662023817 {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1662023817 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 130px;
}

.custom-shape-divider-top-1662023817 .shape-fill {
  fill: var(--bgcolor);
}
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 15rem;
}
</style>