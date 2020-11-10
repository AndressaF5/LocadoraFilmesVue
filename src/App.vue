<template>
  <div>
    <b-navbar type="dark" variant="dark" >
      <b-navbar>
        <b-nav-item @click="mostrarFilmes = true">Home</b-nav-item>
        <b-nav-item @click="mostrarFilmes = false">Carrinho</b-nav-item>
      </b-navbar>
    </b-navbar>
    <b-container>
      <b-row> 
        <h1> Bem vindo a {{ title }}</h1>
      </b-row>
      <b-row>
        <h3 v-if="horas >= 9 && horas < 17" id="aberta">Estamos abertos</h3>
        <h3 v-else-if="horas >= 17 && horas < 18" id="quase-fechando">Estamos quase fechando</h3>
        <h3 v-else id="fechada">Estamos fechados</h3>
      </b-row>
      <b-row>
        <p> Carrinho: {{ quantidadeNoCarrinho }} filmes </p>
      </b-row>

      <b-row v-show="mostrarFilmes">
        <ListarFilmes :carrinho="carrinho" />
      </b-row>
      <b-row v-show="!mostrarFilmes">
        <carrinho :carrinho=carrinho :totalCompra=totalCompra />
      </b-row>

    </b-container>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import Carrinho from './components/Carrinho.vue'
  import ListarFilmes from './components/ListarFilmes.vue'

  export default {
    name: 'App',
    components: {
      Carrinho,
      ListarFilmes
    },
    data() {
      return {
        title: "Locadora de Filmes",
        horas: new Date().getHours(),
        carrinho: [],
        totalCompra: 0,
        mostrarFilmes: true,
      };
    },
    methods: {
      quantidadeNoCarrinhoPorFilme: function(filme){
        var quantidade = 0;
        for(var i = 0; i < this.carrinho.length; i++){
          if(filme.id == this.carrinho[i]) quantidade++;
        }
        return quantidade;
      },
      mostrarCarrinho: function(){
        this.mostrarFilmes = this.mostrarFilmes ? false : true;
      },
      submitFormulario(){
        alert('Pedido enviado');
      }
    },
    computed: {
      quantidadeNoCarrinho: function() {
        return this.carrinho.length;
      },
    }

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

  #aberta{
    color: blue;
  }

  #quase-fechando{
    color: orange;
  }

  #fechada{
    color: red;
  }

  .cards{
    display: flex;
    flex-wrap: inherit;
    justify-content: space-around;
  }

  .card:hover{
    transform: scale(1.05);
  }

  .table{
    width: 100%;
  }

</style>
