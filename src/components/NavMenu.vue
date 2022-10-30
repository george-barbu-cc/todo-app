<template>
  <nav class="navbar bg-base-100 container mx-auto lg:absolute top-0">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <router-link to="/">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/posts">Posts</router-link>
          </li>
        </ul>
      </div>
      <router-link
        v-if="!$store.state.user.userID"
        to="/login"
        class="btn btn-ghost normal-case text-xl"
        >ToDo</router-link
      >
      <router-link
        v-if="$store.state.user.userID"
        to="/"
        class="btn btn-ghost btn-active normal-case text-xl"
        >USER-{{ $store.state.user.userID }}</router-link
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li class="mx-2">
          <router-link to="/">Dashboard</router-link>
        </li>
        <li>
          <router-link to="/posts">Posts</router-link>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <router-link v-if="!$store.state.user.userID" to="/login" class="btn"
        >Login</router-link
      >
      <router-link
        to="/"
        v-if="$store.state.user.userID"
        @click="logout"
        class="btn"
        >Logout</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push({ path: "/login" });
    },
  },
  mounted() {
    this.$store.commit("initialiseStore");
  },
};
</script>
