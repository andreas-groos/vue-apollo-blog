<template>
  <ul>
    <li v-for="post in posts"
        :key="post.id">
      <h4>
        <router-link :to="'post/' + post.id">{{post.title}}</router-link>
      </h4>
    </li>
  </ul>
</template>

<script>
export default {
  name: "BlogList",
  props: {
    posts: Array
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  text-align: left;
}
</style>
