<template>
  <v-card id="Dashboard" class="bg-gradient position-sticky" elevation="4" style="top: 80px">
    <v-card-title class="text-h4 teal--text text--darken-4">
      <span>Dashboard</span>
    </v-card-title>
    <v-divider class="mt-0"></v-divider>

    <v-card-text v-if="movimentacoes.length" class="row">
      <div class="col">
        <h6 class="mb-4 text-success">Receitas: {{ totalizarReceitas() }}</h6>
        <h6 class="mb-4 text-danger">Despesas: {{ totalizarDespesas() }} </h6>
      </div>
      <div class="col">
        <h5 class="mt-3 text-dark">Total: {{ totalizarTudo() }}</h5>
      </div>
    </v-card-text>

    <v-divider class="mt-0"></v-divider>
    <v-sparkline
        auto-draw
        :value="plotarGrafico()"
    >
    </v-sparkline>
  </v-card>
</template>

<script>
export default {
  name: "Dashboard",
  props: {
    movimentacoes: Array
  },
  methods: {
    plotarGrafico() {
      return this.movimentacoes.map(item => parseFloat(item.valor))
    },
    somarMovimentacoes(movimentacoes) {
      return movimentacoes.reduce((soma, item) => soma + parseFloat(item.valor), 0)
    },
    totalizarReceitas() {
      const receitas = this.movimentacoes.filter(item => item.valor > 0)
      return this.somarMovimentacoes(receitas)
    },
    totalizarDespesas() {
      const receitas = this.movimentacoes.filter(item => item.valor < 0)
      return this.somarMovimentacoes(receitas)
    },
    totalizarTudo() {
      return this.totalizarReceitas() + this.totalizarDespesas()
    }
  }
}
</script>

<style scoped>
</style>