<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
    <footer-app />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import FooterApp from "./components/FooterApp.vue";

export default {
  name: "App",
  components: {
    Navbar,
    FooterApp
  },
};
</script>

<style>
</style>
