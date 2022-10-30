<template>
  <section class="lg:mt-20">
    <PostList :slice="100"></PostList>
  </section>
</template>

<script>
import PostList from "@components/PostList.vue";

export default {
  name: "Posts",
  props: {
    slice: Number,
  },
  components: {
    PostList,
  },
};
</script>
