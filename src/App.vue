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

            <b-button v-if="filme.estoqueDisponivel > 1" href="#" @click="adicionarAoCarrinho(filme)" block variant="dark">Alugar por R$ {{ filme.valor }},00</b-button>
            <b-button v-else-if="filme.estoqueDisponivel == 1" href="#" block variant="warning">Última Unidade</b-button>
            <b-button v-else href="#" block variant="danger">Esgotado</b-button>
            
          </b-card>
        </div>
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

  export default {
    name: 'App',
    components: {
      Carrinho,
    },
    data() {
      return {
        title: "Locadora de Filmes",
        horas: new Date().getHours(),
        filmes : [
          { id: 1, titulo: "Hulk", descricao: "Filme Ruim", valor: 2, imagem: "https://i.imgur.com/0uthCmp.jpg", estoqueDisponivel: 3, avaliacao: 2 },
          { id: 2, titulo: "Homem de Ferro", descricao: "Homem de Ferro", valor: 10, imagem: "https://i.imgur.com/OA8pDFM.jpg", estoqueDisponivel: 3, avaliacao: 4 },
          { id: 3, titulo: "Thor", descricao: "Bonito ", valor: 20, imagem: "https://i.imgur.com/mt4ZRzw.jpg", estoqueDisponivel: 4, avaliacao: 3 },
          { id: 4, titulo: "Capitão América", descricao: "Um filme de capitão", valor: 40, imagem: "https://i.imgur.com/UFmSVtZ.jpg", estoqueDisponivel: 2, avaliacao: 4 },
          { id: 5, titulo: "Doutor Estranho", descricao: "Magia", valor: 10, imagem: "https://i.imgur.com/pVEDruM.jpg", estoqueDisponivel: 5, avaliacao: 3 },
          { id: 6, titulo: "Pantera Negra", descricao: "Um segundo filme de força", valor: 10, imagem: "https://i.imgur.com/JOSEGKf.jpg", estoqueDisponivel: 2, avaliacao: 4 }
        ],
        carrinho: [],
        totalCompra: 0,
        mostrarFilmes: true,
      };
    },
    methods: {
      adicionarAoCarrinho: function(filme) {
        if(filme.estoqueDisponivel > 0){
          let indexFilme = this.carrinho.findIndex((obj) => obj.id == filme.id);
          filme.quantidade = (filme.quantidade || 0) + 1;
          if(indexFilme == -1){
            filme.preco = `R${filme.valor},00`;
            this.carrinho.push(filme);
          }else{
            this.carrinho.splice(indexFilme, 1, filme);
          }
          this.totalCompra += filme.valor;
          filme.estoqueDisponivel -= 1;
        }
      },
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

  p{
    font-size: 18px;
  }

  .table{
    width: 100%;
  }

</style>