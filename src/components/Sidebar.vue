<template>
  <nav id="navbar">
    <router-link to="/home" class="nav-link">Home</router-link>
    <router-link to="/blog" class="nav-link">Blog</router-link>
    <router-link to="/exchange" class="nav-link">Exchange</router-link>
    <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
    <router-link to="/support" class="nav-link">Support</router-link>
  </nav>
</template>
<script>
export default {};
document.querySelector("#navbar").addEventListener("click", function () {
  document
    .querySelector(".additional-information")
    .classList.toggle("is-visible");
});
</script>
<style scoped>
nav {
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(255, 255, 255, 0.06);
}
router-link {
  padding: 1rem 1rem;
  border-radius: 12px;
  background: var(--bgcolor);
}

.active {
  background: rgba(255, 255, 255, 0.06);
}
</style>