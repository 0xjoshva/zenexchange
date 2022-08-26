<template>
<Landing/>
<About/>
</template>
<script>
import Landing from "@/components/Landing.vue";
import About from "@/components/About.vue";

export default {
  name: "HomeView",
  components: {
    Landing,
    About
},
};
</script>
