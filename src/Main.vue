<template>
  <NavMenu />
  <router-view />
</template>

<script>
import NavMenu from "@components/NavMenu.vue";

export default {
  name: "Main",
  components: {
    NavMenu,
  },
};
</script>
