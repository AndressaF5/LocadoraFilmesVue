<template>
  <div>
    <b-container>
      <b-row>
        <b-row class="table">
          <h2>Resumo do pedido</h2>
          <b-table block striped hover dark responsive head-variant="light" :items="carrinho" :fields="fields"></b-table>
          <b-row>Total da compra: R${{ totalCompra }},00</b-row>
        </b-row>
      </b-row>

      <b-button @click="mostrarFormulario = true">Finalizar Pedido</b-button>
      <b-row v-show="mostrarFormulario">
        <FormularioPedido />
      </b-row>
  
    </b-container>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import FormularioPedido from '@/components/FormularioPedido.vue'

  export default {
    name: 'Carrinho',
    components: {
      FormularioPedido,
    },
    props : {
      carrinho : Array,
      totalCompra: Number
    },
    data() {
      return {
        title: "Resumo do pedido",
        fields: ['titulo', 'preço', 'quantidade'],
        mostrarFormulario: false,
      };
    },

  }
</script>

<style>

  body{
    font-family: 'Quicksand', sans-serif;
    margin-top: 40px;
  }

  .row{
    justify-content: center;
  }

  .table{
    width: 100%;
  }

</style>