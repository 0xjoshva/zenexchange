<template>
  <section class="contact">
    <div>
      <h1>Support</h1>
      <p id="subheading">Expect a response withing 3-5 business days</p>
    </div>
    <form action="https://formspree.io/f/mvoygdwl" method="POST">
      <div id="inputgroup">
        <input type="text" placeholder="John Doe" />
        <input type="email" placeholder="example@email.com" />
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Message"
      ></textarea>
      <button type="submit">
        <p>Send Message</p>
        <img src="../assets/arrow-right-circle.svg" alt="" />
      </button>
    </form>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.contact {
  background: var(--bgcolor);
  height: 100vh;
  width: 100%;
  font-family: "Segoe UI", sans-serif;
}
h1 {
  font-family: "Segoe UI", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 48px;
  color: white;
}
#subheading {
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.39);
  padding-bottom: 2rem;
}
form {
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
}
button {
  color: black;
  background: var(--orange);
  display: flex;
  align-items: center;
  padding: 10px 33px;
  width: fit-content;
  border: none;
  border-radius: 3px;
}
button p {
  font-size: 1rem;
  padding-right: 1rem;
  font-weight: 600;
}
input {
  width: 340px;
  height: 45px;
  border: 1px solid #555454;
  background: var(--bgcolor);
  border-radius: 4px;
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 96.51%;
  padding-left: 0.6rem;
  color: white;
}
input:focus {
  border: 1px solid var(--orange);
  outline: none;
}
textarea {
  background: var(--bgcolor);
  border-radius: 4px;
  resize: none;
  width: 708px;
  border: 1px solid #555454;
  font-family: "Segoe UI";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 96.51%;
  padding-left: 0.6rem;
  color: white;
  padding-top: 0.5rem;
}
textarea:focus {
  border: 1px solid var(--orange);
  outline: none;
}
#inputgroup {
  display: flex;
  column-gap: 1.5rem;
}
</style>