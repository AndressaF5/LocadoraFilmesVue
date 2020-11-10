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
<<<<<<< HEAD
      <b-row v-show="mostrarFilmes">
         <div class="cards">
          <b-card :key="filme.id" v-for="filme in filmes"
            :title="filme.titulo"
            :img-src="filme.imagem"
            img-top
            tag="article"
            style="max-width: 13rem;"
            class="mb-3 text-center"
            >
            <b-card-text>
              {{ filme.descricao }}
            </b-card-text>

            <b-card-text>
              {{ filme.avaliacao }}
              <b-icon icon="star-fill" variant="warning" v-for="estrelas in filme.avaliacao" :key="estrelas"></b-icon>
              <b-icon icon="star" variant="warning" v-for="estrelas_vazadas in 5 - filme.avaliacao" :key="estrelas_vazadas"></b-icon>
            </b-card-text>
=======
>>>>>>> fee15d3ce5a75285d644d54b9d48caadfccb0f66

      <b-row v-show="mostrarFilmes">
        <ListarFilmes :carrinho="carrinho" />
      </b-row>
      <b-row v-show="!mostrarFilmes">
        <Carrinho :carrinho=carrinho :totalCompra=totalCompra />
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
