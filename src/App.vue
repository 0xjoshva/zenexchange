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
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
/* FONTS */
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;500;700;900&family=Palanquin:wght@200;400;600;700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("http://fonts.cdnfonts.com/css/segoe-ui-4");
/* 
font-family: 'Roboto', sans-serif; 
font-family: 'Segoe UI', sans-serif;
                                                
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