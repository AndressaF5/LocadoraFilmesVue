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

      <router-link to="/formularioPedido" tag="button">Finalizar Pedido</router-link>
  
    </b-container>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
    name: 'Carrinho',
    components: {
    },
    props : {
      carrinho : Array,
      totalCompra: Number
    },
    data() {
      return {
        title: "Resumo do pedido",
        fields: ['titulo', 'preço', 'quantidade'],
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