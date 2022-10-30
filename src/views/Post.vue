<template>
  <section class="lg:mt-20">
    <PostItem :post="posts" :slice="slice"></PostItem>
  </section>
</template>

<script>
import { posts } from "@services";
import PostItem from "@components/PostItem.vue";

export default {
  name: "Post",
  data() {
    return {
      posts: {},
      slice: 0,
    };
  },
  components: {
    PostItem,
  },
  methods: {
    async fetchPosts() {
      this.posts = await posts.getPost(this.$route.params.postId);
      if (!this.posts) {
        this.$router.push({ path: "/404" });
      }
    },
  },
  async mounted() {
    await this.fetchPosts();
  },
};
</script>
