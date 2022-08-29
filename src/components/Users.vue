<template>
  <section id="admin-panel">
    <!-- greeting -->
    <h1>Welcome back, Admin</h1>
    <!-- counters -->
    <div class="panel">user count</div>
    <div class="panel">product count</div>
    <div class="panel">transaction count</div>
    <!-- clock -->
    <p>2:30pm</p>
    <!-- current date -->
    <p>29th of August 2022</p>
    <!-- panels with scrollbars -->
    <!-- user list -->
    <table></table>
    <!-- transaction list -->
    <table></table>
    <!-- currencies list -->
    <table></table>

    <div class="pnl">
      <div class="users">
        <img class="user-item" src="../assets/memoji1.png" alt="" />
        <img class="user-item" src="../assets/memoji2.png" alt="" />
        <img class="user-item" src="../assets/memoji3.png" alt="" />
        <img class="user-item" src="../assets/memoji4.png" alt="" />
        <div class="user-item user-count">16+</div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      users: null,
    };
  },
  methods: {},
  mounted() {
    fetch("https://capstone-eomp.herokuapp.com/users", {})
      .then((res) => res.json())
      .then((data) => (this.users = data), console.log(this.users));
  },
};
</script>
<style scoped>
#admin-panel {
  width: 100%;
  height: 100vh;
  background: var(--bgcolor);
}
.users {
  display: flex;
}
.user-item {
  background: white;
  width: 55px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-right: -1.2rem;
  border: 2px solid var(--bgcolor);
}
</style>