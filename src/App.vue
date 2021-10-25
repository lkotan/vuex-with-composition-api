<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
  setup() {},
};
</script>

<template>
  <div class="app-header">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
    <Header />
  </div>
  <router-view />
</template>

<style></style>
