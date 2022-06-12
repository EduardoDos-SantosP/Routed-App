<template>
  <v-container id="ConsultarMovimentacao">

    <!--Renderiza somente SE movimentacoes posssuir items-->
    <div v-if="movimentacoes.length" class="row mx-auto">

      <div class="col-md-7">
        <Dashboard :movimentacoes="movimentacoes"></Dashboard>
      </div>

      <div id="movimentacoes" class="col-md-5">
        <v-card
            elevation="4"
            v-for="(item, i) in movimentacoes"
            :key="i"
            class="row ma-0 mb-6 pa-3 pb-0 bg-gradient rounded"
        >
          <v-card-title class="pa-0 teal--text text--darken-4">
            {{ item.nome }}
          </v-card-title>
          <v-card-text class="col pa-3">
            <div class="row">
                <span :class="'col ' + colorirValorMovimentacao(item.valor)">
                  {{ item.valor }}
                </span>
              <span class="col">
                  {{ item.data }}
                </span>
            </div>
          </v-card-text>
          <v-card-actions class="justify-content-end">
            <v-btn color="primary" text small >Editar</v-btn>
          </v-card-actions>
        </v-card>
      </div>

    </div>

  </v-container>
</template>

<script>
import axios from '@/plugins/axios';
import Dashboard from "@/components/Dashboard";

export default {
  name: "ConsultarMovimentacao",
  components: {Dashboard},
  data() {
    return {
      movimentacoes: [],
    }
  },
  methods: {
    colorirValorMovimentacao(valor) {
      if (!valor || valor instanceof Number) return '';
      return 'text-' + (valor > 0 ? 'success' : 'danger')
    }
  },
  mounted() {
    axios.get('Movimentacao/todos/')
        .then(response => {
          if (response.status !== 200) return;

          const data = response.data

          if (data.error) return console.error(data.body)

          function ordernar(item1, item2) {
            return new Date(item2.data) - new Date(item1.data)
          }
          const movimentacoes = data.body.sort(ordernar)

          this.movimentacoes = [...movimentacoes, ...movimentacoes];
        })
        .catch(console.error)
  }
}
</script>

<style scoped>
#movimentacoes {
  overflow-y: visible;
}
</style>