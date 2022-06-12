<template>
  <div class="bg-light">
    <v-app-bar color="teal">
      <v-toolbar-title class="w-100 my-auto mx-auto pt-1 text-light" style="font-size: 14pt">
        Controle de Despesas e Receitas
      </v-toolbar-title>
    </v-app-bar>

    <v-row justify="center" class="my-8 border-bottom">
      <v-col
          v-for="(link, i) in links"
          :key="i"
          cols="auto"
          class="px-1"
      >
        <router-link :to="link.route">
          <v-btn text class="router-link__btn">
            {{ link.label }}
          </v-btn>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    links: [
      {
        label: 'Visualizar',
        route: '/'
      },
      {
        label: 'Novo',
        route: '/About'
      }
    ]
  })
}
</script>

<style scoped>

</style>