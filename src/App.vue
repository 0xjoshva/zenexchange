<template>
  <Sidebar />
  <router-view />
</template>
<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  name: "App",
  components: { Sidebar },
};
</script>
<style>
@font-face {
  font-family: "Satoshi-Variable";
  src: url("./fonts/Satoshi-Variable.woff2") format("woff2"),
    url("./fonts/Satoshi-Variable.woff") format("woff"),
    url("./fonts/Satoshi-Variable.ttf") format("truetype");
  font-weight: 300 900;
  font-display: swap;
  font-style: normal;
}

*/
/* CSS RESET */
html {
  box-sizing: border-box;
  font-size: 16px;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

/* COLOR SCHEME */
:root {
  /* backgrounds */
  --bgcolor: #1a1818;
  --orange: #ff9900;
  --dwhite: #c8c8c8;
  --white: #ffffff;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px var(--bg-color);
  box-shadow: inset 0 0 6px var(--bg-color);
  border-radius: 10px;
  background-color: var(--bg-color);
}

::-webkit-scrollbar {
  width: 12px;
  background-color: var(--bg-color);
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--lgrey);
}

nav a :active {
  color: var(--lgreen);
}
</style>