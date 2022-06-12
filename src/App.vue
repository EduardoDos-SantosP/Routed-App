<template>
  <v-app>
    <v-main class="bg-gradient">
      <Header></Header>

      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Header from "@/components/Header";
export default {
  name: 'App',
  components: {Header}
};
</script>

<style>
a {
  text-decoration: none !important;
}
.bg-gradient {
  background: linear-gradient(-15deg, rgba(0, 0, 0, .05), transparent, rgba(255, 255, 255, .05));
}
</style>
