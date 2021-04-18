<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar";
import { auth } from "@/auth/firebase";
import { mapMutations } from "vuex";
export default {
  name: "App",
  components: { Navbar },
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) this.addUser(user);
    });
  },
  methods: {
    ...mapMutations(["addUser"]),
  },
};
</script>

