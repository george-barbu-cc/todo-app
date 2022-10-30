<template>
  <section class="h-full">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Sign in to your account
          </h1>
          <form
            @submit.prevent="Submit"
            ref="loginForm"
            method="post"
            class="space-y-4 md:space-y-6"
          >
            <div>
              <label
                for="userID"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >User ID</label
              >
              <input
                type="number"
                placeholder="3464"
                v-model="form.userID"
                name="userID"
                id="userID"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                v-model="form.password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>

            <button type="submit" class="w-full btn btn-accent">Sign in</button>
          </form>
          <p class="text-sm font-light text-gray-500 dark:text-gray-400">
            <button
              class="w-full btn no-animation"
              v-on:click="isHidden = !isHidden"
            >
              {{ isHidden ? "Show" : "Hide" }} Accepted User ID's List
            </button>
          </p>
          <ul
            v-if="!isHidden"
            class="flex flex-wrap justify-between max-h-80 overflow-auto px-4"
          >
            <li
              v-for="userID in allUsers"
              class="flex justify-center items-center gap-4 my-2"
            >
              <span class="">User ID:</span>
              <a href="#" v-on:click.prevent="prefillUserID(userID)">
                <button class="btn btn-accent">{{ userID }}</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { todos, users } from "@services";

export default {
  data() {
    return {
      form: {
        userID: "",
        password: "",
      },
      allUsers: [],
      isHidden: true,
    };
  },
  methods: {
    async getallUsers() {
      const getTodosUsersList = await todos.getTodosUsers(); //get all users with todos
      const getAllUsersList = await users.getAllUSersIDs(); //get all users from DB
      const allUsersList = getTodosUsersList.concat(getAllUsersList); //because some users with notes does not exist in all users table, we merge them here
      this.allUsers = [...new Set(allUsersList)];
      return allUsersList;
    },

    prefillUserID(userID) {
      this.form.userID = userID;
      this.form.password = "password";
      this.Submit();
    },

    async Submit(event) {
      const allUsersList = await this.getallUsers();
      if (Number.isInteger(this.form.userID)) {
        if (allUsersList.includes(this.form.userID)) {
          this.$store.commit("login", this.form.userID);
          this.$router.push("/");
        } else {
          alert("Incorect User ID, please use one from list provided");
        }
      } else {
        alert("Please add an UserID formed just from numbers");
      }
    },
  },
  async mounted() {
    await this.getallUsers();
  },
};
</script>
