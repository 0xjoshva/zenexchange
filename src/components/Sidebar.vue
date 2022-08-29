<template>
  <nav>
    <div class="nav-links">
      <router-link to="/" class="nav-link"
        ><img src="../assets/home.svg" class="home" alt="" /> Home</router-link
      >
      <router-link to="/blog" class="nav-link"
        ><img class="book-open" src="../assets/book-open.svg" alt="" />
        Blog</router-link
      >
      <router-link to="/exchange" class="nav-link"
        ><img
          class="book-open"
          src="../assets/xchange.svg"
          alt=""
        />Exchange</router-link
      >
      <router-link to="/dashboard" class="nav-link"
        ><img src="../assets/user.svg" alt="" /> Account</router-link
      >
      <router-link to="/support" class="nav-link"
        ><img src="../assets/headphones.svg" alt="" /> Support</router-link
      >
    </div>

    <div class="nav-links">
      <router-link to="/users" class="nav-link"
        ><img src="../assets/pie-chart.svg" class="users" alt="" />
        <p id="control">Dashboard</p></router-link
      >
    </div>

    <router-link to="/register">Register</router-link>
    <button data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  mounted() {
    function activeLinks() {
      let navLinks = document.querySelector(".nav-link");
      navLinks.addEventListener("click", changeClass);
      function changeClass() {
        navLinks.classList.add("active");
      }
    }
  },
};
</script>
<style scoped>
nav {
  background: var(--bgcolor);
  width: 20%;
  height: 100vh;
  padding: 3rem;
  position: absolute;
  right: 0;
  top: 0;
  border-right: 1px solid rgba(255, 255, 255, 0.068);
}
.nav-links {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
.nav-links > a {
  text-decoration: none;
  color: var(--dwhite);
  font-size: 24px;
  font-family: "Segoe UI", sans-serif;
  padding-left: 2rem;
  padding-top: 0.7rem;
  padding-bottom: 1rem;
  padding-right: 6rem;
  width: 18rem;
  border-radius: 11px;
  transition: background linear 0.3s;
  display: flex;
  column-gap: 0.6rem;
  color: rgb(153, 152, 152);
}

.router-link-active {
  background: rgba(128, 128, 128, 0.096);
  filter: brightness(200%);

  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 0.062);
}
.nav-links:nth-child(1) {
  padding-bottom: 1rem;
}
.nav-links:nth-child(2) {
  padding-top: 1.5rem;
  border-top: 1px solid rgba(95, 95, 95, 0.13);
}

#control {
  white-space: nowrap;
}
</style>
