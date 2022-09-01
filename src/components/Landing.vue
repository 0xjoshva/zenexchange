<template>
  <section class="landing">
    <div class="text">
      <h1>
        Invest in cryptocurrency, <br />
        you wont regret it
      </h1>
      <p>
        Buying cryptocurrency has never been easier. <br />
        Its as simple as point and click. <br />
      </p>
      <p>
        <span id="highlight">Emma</span> and
        <span id="highlight">16 others</span> have <br />
        already joined us...
      </p>
      <div class="users">
        <img class="user-item" src="../assets/memoji1.png" alt="" />
        <img class="user-item" src="../assets/memoji2.png" alt="" />
        <img class="user-item" src="../assets/memoji3.png" alt="" />
        <img class="user-item" src="../assets/memoji4.png" alt="" />
        <div class="user-item user-count">+</div>
      </div>
      <router-link to="/register" class="join">Join</router-link>
    </div>
    <img src="../assets/bitcoin.png" alt="" id="hero" />
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.landing {
  width: 100%;
  height:92vh;
  background: var(--bgcolor);
  color: white;
  display: flex;
}
.text {
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: center;
  padding-left: 10rem;
  margin-top: -12rem;
}
.text h1 {
  font-family: "Satoshi-Variable";
  font-weight: 600;
  font-size: 64px;
  line-height: 60px;
}
.text p {
  font-size: 16px;
  font-family: "Satoshi-Variable";
  font-weight: 600;
  color: #979797;
  padding-top: 1rem;
}
#hero {
  width: 1000px;
  height: fit-content;
  display: flex;
  align-self: center;
}
.join {
  width: fit-content;
  padding: 0.5rem 1rem;
  border: none;
  background: linear-gradient(
    90deg,
    #6a9dff -21.47%,
    rgba(107, 128, 170, 0) 153.21%
  );
  border-radius: 21px;
  color: white;
  padding: 0.6rem 2.4rem;
  font-family: "Satoshi-Variable";
  font-weight: 600;
  margin-top: 1.5rem;
  text-decoration: none;
}

.users {
  display: flex;
}
.user-item {
  background: white;
  width: 50px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  margin-right: -1.2rem;
  font-size: x-large;
  border: 5px solid var(--bgcolor);
  font-family: "Satoshi-Variable";
  color: var(--bgcolor);
  background-color: #ffffff;

}
#highlight {
  color: rgba(255, 255, 255, 0.918);
}
</style>