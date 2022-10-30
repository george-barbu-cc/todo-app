<template>
  <div class="my-8">
    <h4 class="text-start m-4 text-xl">Latest posts</h4>

    <div class="px-2">
      <div class="flex flex-wrap flex-col lg:flex-row">
        <PostItem
          v-for="post in posts"
          :key="post.id"
          :post="post"
          :slice="slice"
        ></PostItem>
      </div>
    </div>
  </div>
</template>

<script>
import { posts } from "@services";
import PostItem from "@components/PostItem.vue";

export default {
  name: "PostLists",
  data() {
    return {
      posts: [],
    };
  },
  props: {
    slice: Number,
  },
  components: {
    PostItem,
  },
  methods: {
    async fetchPosts() {
      this.posts = await posts.getRecentPosts();
      this.posts = this.posts.slice(0, this.slice);
    },
  },
  async mounted() {
    await this.fetchPosts();
  },
};
</script>
