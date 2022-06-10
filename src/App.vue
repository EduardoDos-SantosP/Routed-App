<template>
  <v-app>
    <v-main class="bg">
      <v-app-bar class="bg">
        <v-toolbar-title class="w-100 my-auto mx-auto pt-1 text-light" style="font-size: 14pt">
          Controle de Despesas e Receitas
        </v-toolbar-title>
      </v-app-bar>

      <v-container fluid class="mt-16">
        <v-row justify="center">
          <v-col
              v-for="(link, i) in links"
              :key="i"
              cols="auto"
              class="px-1"
              >
            <router-link :to="link.route">
              <v-btn plain color="white">
                {{ link.label }}
              </v-btn>
            </router-link>
          </v-col>
        </v-row>

        <v-container fluid>
          <router-view/>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    links: [
      {
        label: 'Home',
        route: '/'
      },
      {
        label: 'About',
        route: '/About'
      }
    ]
  }),
};
</script>

<style>
a {
  text-decoration: none !important;
}
.bg {
  background-color: var(--dark) !important;
}
</style>
