<template>
  <section class="register">
    <div id="panel">
      <div>
        <h1>Set up your account.</h1>
        <p id="subheading">
          You will gain access to all the perks we offer by becoming a member,
          buy crypto with ease and track your spending with our cutting edge
          analytics
        </p>
      </div>
      <form>
        <div id="inputgroup">
          <input type="text" placeholder="John Doe" required />
          <input type="email" placeholder="example@email.com" required />
          <input type="password" placeholder="Password" required />
          <input type="tel" placeholder="Phone Number" required />
          <div class="terms">
            <input
              type="checkbox"
              class="checkbox"
              placeholder="example@email.com"
              required
            />
            <p>
              I agree with Zen’s, <span>Terms and Conditions</span> and consent
              to giving away all my data ;P
            </p>
          </div>
        </div>
        <button type="submit">
          <p>Sign up</p>
        </button>
      </form>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style scoped>
.register {
  background: var(--bgcolor);
  height: 84vh;
  width: 100%;
  font-family: "Segoe UI", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  font-family: "Satoshi-Variable";
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
  color: rgba(255, 255, 255, 0.699);
  padding-bottom: 1.5rem;
  width: 40rem;
}
form {
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
}
button {
  color: black;
  background: var(--highlight);
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
  width: 632px;
  height: 45px;
  border: 1px solid white;
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
  border: 1px solid var(--highlight);
  outline: none;
}

#inputgroup {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}
.checkbox {
  border: 1px solid #3e3e3e;
  border-radius: 3px;
  background-color: var(--bgcolor);
  accent-color: var(--highlight);
  width: 15px;
  height: 15px;
  background: transparent;
}
.terms {
  display: flex;
  align-items: center;
  margin-top: -0.6rem;
}
.terms p {
  padding-left: 0.3rem;
  color: rgba(255, 255, 255, 0.39);
}
.terms span {
  color: var(--highlight);
  text-decoration: underline;
}
::placeholder {
  color: rgba(255, 255, 255, 0.39);
}
</style>