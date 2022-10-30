<template>
  <div class="p-2 lg:w-1/3" :class="{ 'lg:w-full ': !slice }">
    <div class="card bg-base-100 rounded-md border-2">
      <div class="card-body">
        <h2 class="card-title justify-center">
          {{ slice ? post?.title?.substr(0, 30) + "..." : post?.title }}
        </h2>
        <p class="text-center">
          {{ slice ? post?.body?.substr(0, 180) + "..." : post?.body }}
        </p>
        <div class="card-actions justify-center">
          <div class="badge badge-outline bg-accent text-white">
            <RouterLink
              :to="{ name: 'Post', params: { postId: post?.id ?? 0 } }"
            >
              <strong>Post id:</strong>
              {{ post?.id }}
            </RouterLink>
          </div>
          <div class="badge badge-outline">
            <strong class="mr-1">User id:</strong> {{ post?.user_id }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  props: {
    post: Object,
    slice: Number,
  },
};
</script>
