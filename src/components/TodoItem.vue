<template>
  <div class="p-2 lg:w-1/3">
    <div class="card bg-base-100 rounded-md border-2">
      <div class="card-body">
        <h2 class="card-title">
          <input
            type="checkbox"
            class="checkbox"
            onclick="return false;"
            v-model="status"
            v-bind:id="todo.id"
          />
          <label for="checkbox">{{ todo?.title }}</label>
        </h2>

        <div class="card-actions justify-end">
          <div class="badge badge-outline">
            <strong class="mr-1">Status:</strong>
            <span class="uppercase">{{ todo?.status }}</span>
          </div>
          <div class="badge badge-outline">
            <strong class="mr-1">User id:</strong>{{ todo?.user_id }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  data() {
    return {
      status: Boolean,
    };
  },
  methods: {
    checkStatus() {
      this.status = this.todo?.status === "completed";
    },
  },
  mounted() {
    this.checkStatus();
  },
};
</script>
