<template>
  <section class="lg:mt-24">
    <h4 class="text-center my-4 mx-2 text-xl">My Dashboard</h4>
    <PostList :slice="3"></PostList>
    <TodoList></TodoList>
  </section>
</template>

<script>
import PostList from "@components/PostList.vue";
import TodoList from "@components/TodoList.vue";

export default {
  name: "Dashboard",
  components: {
    PostList,
    TodoList,
  },
};
</script>
