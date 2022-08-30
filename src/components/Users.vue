<template>
  <section id="admin-panel">
    <!-- greeting -->
    <h1 id="greeting">Welcome back, Admin</h1>
    <!-- counters -->
    <div class="panel">user count</div>
    <div class="panel">product count</div>
    <div class="panel">transaction count</div>
    <!-- clock -->
    <p>2:30pm</p>
    <!-- current date -->
    <p>29th of August 2022</p>
    <!-- panels with scrollbars -->
    <!-- <div style="overflow-y: scroll; height: 400px"></div> -->
    <!-- user list -->
    <table></table>
    <!-- transaction list -->
    <table></table>
    <!-- currencies list -->
    <table></table>

    <div class="pnlcontainer">
      <div class="pnl">
        <div class="cnter">
          <span>•</span>
          <p>LIVE</p>
        </div>
        <h2 class="head">User Counter</h2>
        <div class="users">
          <img class="user-item" src="../assets/memoji1.png" alt="" />
          <img class="user-item" src="../assets/memoji2.png" alt="" />
          <img class="user-item" src="../assets/memoji3.png" alt="" />
          <img class="user-item" src="../assets/memoji4.png" alt="" />
          <div class="user-item user-count">16+</div>
        </div>
      </div>
      <div class="pnl2"></div>
      <div class="pnl3">
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
              <div class="fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="scrollergroup">
      <div class="scrollerbody">
        <h1>Users</h1>
        <div class="scroller">
          <div v-for="user in users" v-bind:key="user.user_id" class="item">
            <p>{{ user.user_id }}</p>
            <p>{{ user.user_name }}</p>
            <p>{{ user.user_type }}</p>
            <p>{{ user.email }}</p>
            <p>{{ user.age }}</p>
            <p>{{ user.address }}</p>
            <p>{{ user.phone_number }}</p>
            <p>{{ user.balance }}</p>
          </div>
          <div v-for="user in users" v-bind:key="user.user_id" class="item">
            <p>{{ user.user_id }}</p>
            <p>{{ user.user_name }}</p>
            <p>{{ user.user_type }}</p>
            <p>{{ user.email }}</p>
            <p>{{ user.age }}</p>
            <p>{{ user.address }}</p>
            <p>{{ user.phone_number }}</p>
            <p>{{ user.balance }}</p>
          </div>
          <div v-for="user in users" v-bind:key="user.user_id" class="item">
            <p>{{ user.user_id }}</p>
            <p>{{ user.user_name }}</p>
            <p>{{ user.user_type }}</p>
            <p>{{ user.email }}</p>
            <p>{{ user.age }}</p>
            <p>{{ user.address }}</p>
            <p>{{ user.phone_number }}</p>
            <p>{{ user.balance }}</p>
          </div>
          <div v-for="user in users" v-bind:key="user.user_id" class="item">
            <p>{{ user.user_id }}</p>
            <p>{{ user.user_name }}</p>
            <p>{{ user.user_type }}</p>
            <p>{{ user.email }}</p>
            <p>{{ user.age }}</p>
            <p>{{ user.address }}</p>
            <p>{{ user.phone_number }}</p>
            <p>{{ user.balance }}</p>
          </div>
        </div>
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
  width: 70px;
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
.pnlcontainer {
  display: flex;
  column-gap: 1.5rem;
}
.pnl2 {
  background: rgb(32, 32, 32);
  width: 15rem;
  padding: 2rem;
  padding-right: 3rem;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 0px #0e0e0ebd;
  margin-left: 2rem;
}
.pnl3 {
  background: rgb(32, 32, 32);
  width: 10rem;
  padding: 2rem;
  padding-right: 3rem;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 0px #0e0e0ebd;
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pnl {
  background: rgb(32, 32, 32);
  width: 20rem;
  padding: 2rem;
  padding-right: 3rem;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 0px #0e0e0ebd;
  margin-left: 2rem;
}
.cnter {
  color: grey;
  background: rgb(46, 46, 46);
  font-family: "Satoshi-Variable";
  display: flex;
  width: fit-content;
  align-items: center;

  padding-left: 0.4rem;
  padding-right: 0.4rem;
  column-gap: 0.4rem;
  margin-bottom: 0.6rem;
  border-radius: 4px;
}
.cnter span {
  color: red;
  font-size: x-large;
  line-height: 1px;
  margin-bottom: 4px;
}
.head {
  line-height: 1.2rem;
  padding-bottom: 2rem;
  color: white;
  font-family: "Satoshi-Variable";
  font-weight: bold;
}

#greeting {
  font-family: "Satoshi-Variable";
  font-weight: 400;
  color: white;
}

.circle-wrap {
  width: 150px;
  height: 150px;
  background: #00000000;
  border-radius: 50%;
  border: 1px solid orange;
}

.circle-wrap .circle .mask,
.circle-wrap .circle .fill {
  width: 150px;
  height: 150px;
  position: absolute;
  border-radius: 50%;
}

.mask .fill {
  clip: rect(0px, 75px, 150px, 0px);
  background-color: orange;
}

.scroller {
  width: fit-content;
  height: 50px;
  background-color: lightblue;
  overflow: auto;
  scroll-behavior: smooth;
  margin-top: 2rem;
}
.item {
  display: flex;
  flex-direction: row;
}
</style>