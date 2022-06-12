<template>
  <v-container id="EditarMovimentacao">
    <v-card class="bg-gradient">
      <v-card-title class="pb-0 teal--text text--darken-4">Nova movimentação</v-card-title>
      <v-form ref="form">
        <v-container class="pa-5 pb-0">
          <v-row class="my-0">
            <v-col cols="4">
              <v-text-field
                  label="Nome"
                  :value="movimentacao.nome"
                  :rules="validar('nome')"
                  :validate-on-blur="false"
                  outlined
              >
              </v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                  label="Valor"
                  type="number"
                  :value="movimentacao.valor"
                  :rules="validar('valor')"
                  :validate-on-blur="false"
                  outlined
              >
              </v-text-field>
            </v-col>
            <v-col cols="4">
              <v-text-field
                  label="Data"
                  :value="movimentacao.data"
                  type="datetime-local"
                  outlined
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row class="my-0 px-3 py-0">
            <v-textarea
                label="Descrição"
                :value="movimentacao.descricao"
                outlined
            >
            </v-textarea>
          </v-row>
        </v-container>

        <v-card-actions class="justify-content-end border-top">
          <v-btn color="primary" @click="() => $refs.form.validate()">Salvar</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
const url = require('url')
import axios from '@/plugins/axios'

export default {
  name: "Editar",
  data() {
    return {
      movimentacao: {
        nome: null,
        data: null,
        valor: null,
        descricao: null
      },
      lock: false
    }
  },
  methods: {
    validar(campo) {
      const validacao = {
        nome: [valor => !!valor || 'Campo obrigatório!'],
        valor: [valor => !!parseFloat(valor) || 'Digite um valor diferente de zero!'],
      };
      return validacao[campo] || true
    },
    buscarPeloId() {
      const id = url.parse(window.location.href, true).query.id
      if (!id) return;
      axios.get('movimentacao/peloId/' + id)
          .then(response => {
            if (response.data.error) return console.error(response.data.body)

            this.movimentacao = response.data.body
            this.movimentacao.data = this.movimentacao.data.replace(' ', 'T')
          })
    }
  },
  mounted() {
    this.buscarPeloId()
  }
}
</script>

<style scoped>
</style>