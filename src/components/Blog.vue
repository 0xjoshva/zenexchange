<template>
  <section id="blog">
    <div class="container">
      <div v-for="blog in blogs" v-bind:key="blog.id" class="item1">
        <img v-bind:src="blog.image" alt="">
    </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      blogs: null,
    };
  },
  methods: {},
  mounted() {
    fetch("https://capstone-eomp.herokuapp.com/blogs", {})
      .then((res) => res.json())
      .then((data) => (this.blogs = data), console.log(this.blogs));
  },
};
</script>
<style scoped>
#blog {
  width: 100%;
  height: fit-content;
  background: var(--bgcolor);
  color: white;
}
</style>