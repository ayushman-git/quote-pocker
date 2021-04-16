<template>
  <Navbar />
  <router-view />
</template>

<script>
import firebaseAuth from "@/auth/firebase";
import authChange from "@/auth/authChange";

import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: { Navbar },
  mounted() {
    firebaseAuth();
    authChange();
  },
};
</script>

<style>
</style>
