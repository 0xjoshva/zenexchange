<template>
  <nav>
    <router-link to="/" class="home"
      ><img src="../assets/logo.svg" alt=""
    /></router-link>
    <div class="nav-links">
      <router-link to="/market-overview" class="nav-link">Markets</router-link>
      <router-link to="/blog" class="nav-link">Blog</router-link>
      <router-link to="/register" class="nav-link">Sign Up</router-link>
      <button id="login" class="">Login</button>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style scoped>
nav {
  height: 100px;
  width: 100%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#login {
  border: none;
  outline: none;
  height: fit-content;
  width: fit-content;
  background: transparent;
  padding: 0.4rem 1.2rem;
  border: 2px solid var(--highlight);
  font-size: 18px;
  font-family: "Satoshi-Variable";
  color: white;
  border-radius: 26px;
  font-weight: 500;
}

.nav-link {
  font-size: 18px;
  font-family: "Satoshi-Variable";
  color: white;
  text-decoration: none;
  font-weight: 500;
}
.nav-links {
  display: flex;

  padding-right: 10rem;
}
.home {
  padding-left: 10rem;
}
</style>