<template>
  <div class="my-3">
    <div class="list-unstyled text-start m-4">
      <span class="fw-bold text-center text-xl"> This user has no Todo's </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
};
</script>
