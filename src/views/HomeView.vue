<template>
<Landing/>
<About/>
<Branding/>
</template>
<script>
import Landing from "@/components/Landing.vue";
import About from "@/components/About.vue";
import Branding from "@/components/Branding.vue";

export default {
  name: "HomeView",
  components: {
    Landing,
    About,
    Branding
},
};
</script>
