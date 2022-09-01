<template>
  <section>
    <div>
      <img src="../assets/forbes2.png" alt="" />
    </div>
    <h3>
      "It has easy-to-use interface, extensive educational material on
      everything <br />
      from blockchain to volatility, and robust security features." <br />
      <br />
      ~<span class="author"> Forbes  Magazine</span>
    </h3>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
section {
  width: 100%;
  height: 300px;
  background-image: url(../assets/blobs2.svg);
  background-position: right;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

}
h3 {
  text-align: center;
  color: white;
  font-family: "Satoshi-Variable";
  font-weight: 400;
}
.author {
  font-weight: 600;
}
img{
    width:60px;
    height: auto;
    border-radius: 5px;
    margin-bottom: 2rem;
}
</style>