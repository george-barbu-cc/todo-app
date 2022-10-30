<template>
  <div class="my-8">
    <h4 class="text-start m-4 text-xl">My Todo's</h4>

    <div class="px-2">
      <div class="flex flex-wrap flex-col lg:flex-row">
        <TodoNotFound v-if="todos.length === 0"></TodoNotFound>
        <TodoItem
          v-else
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
        ></TodoItem>
      </div>
    </div>
  </div>
</template>

<script>
import { todos } from "@services";
import TodoItem from "@components/TodoItem.vue";
import TodoNotFound from "@components/TodoNotFound.vue";

export default {
  name: "TodoList",
  data() {
    return {
      todos: [],
    };
  },
  props: {
    userId: Number,
  },
  components: {
    TodoItem,
    TodoNotFound,
  },
  methods: {
    async fetchTodos() {
      this.todos = await todos.getTodos(this.$store.state.user.userID);
      // this.todos = [
      //   {
      //     id: 1804,
      //     user_id: 3673,
      //     title: "Aut aut decumbo allatus et arguo cotidie.",
      //     due_on: "2022-10-31T00:00:00.000+05:30",
      //     status: "completed",
      //   },
      //   {
      //     id: 1805,
      //     user_id: 3673,
      //     title: "Deleniti tribuo coaegresco caute combibo sunt cogo.",
      //     due_on: "2022-10-31T00:00:00.000+05:30",
      //     status: "pending",
      //   },
      //   {
      //     id: 1806,
      //     user_id: 3673,
      //     title: "Derideo concedo defero amissio despirmatio spes vindico qui.",
      //     due_on: "2022-10-31T00:00:00.000+05:30",
      //     status: "pending",
      //   },
      // ];
    },
  },
  async mounted() {
    await this.fetchTodos();
  },
};
</script>
