<template>
  <div
    v-if="$route.meta.requiresAuth"
    class="bg-black text-white p-3 px-6 absolute w-full"
  >
    <div class="flex justify-between max-w-5xl mx-auto">
      <router-link
        :to="{
          name: 'Quotes',
          params: {
            username: userInfo.displayName.split(' ')[0].toLowerCase(),
          },
        }"
        ><h1 class="text-2xl font-bold p-3 text-blue-500">Q</h1>
      </router-link>
      <div class="flex justify-between items-center gap-8">
        <ul>
          <router-link :to="{ name: 'Saved' }"
            ><li :class="linkClassHandler">Saved</li>
          </router-link>
        </ul>
        <div
          v-if="!showSignOutBtn"
          class="rounded-full overflow-hidden h-10 w-10 cursor-pointer"
          @click="showSignOut"
        >
          <img :src="userInfo.photoURL" alt="profile picture" />
        </div>
        <div v-else class="h-10 grid place-items-center cursor-pointer">
          <button
            @click="signOut"
            class="rounded-md border-2 px-2 py-1 border-blue-500 transition-all hover:bg-blue-500"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      showSignOutBtn: false,
      interval: null,
    };
  },
  computed: {
    ...mapGetters(["userInfo"]),
    linkClassHandler() {
      if(this.$route.name === "Saved") return "link-active";
      return "link";
    },
  },
  methods: {
    ...mapActions(["signOut"]),

    showSignOut() {
      this.showSignOutBtn = true;
      this.interval = setTimeout(() => {
        this.showSignOutBtn = false;
      }, 3000);
    },
  },
};
</script>

<style>
</style>