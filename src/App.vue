<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
</template>

<script>
import firebaseAuth from "@/auth/firebase";
import authChange from "@/auth/authChange";
export default {
  name: "App",
  mounted() {
    firebaseAuth();
    authChange();
  },
};
</script>

<style>
</style>
