<template>
  <div id="app">
    <b-row>   
      <div id="locadora">
        <h1> Bem vindo a {{ title }}</h1>
        <h3 v-if="horas >= 9 && horas < 17" id="aberta">Estamos abertos</h3>
        <h3 v-else-if="horas >= 17 && horas < 18" id="quase-fechando">Estamos quase fechando</h3>
        <h3 v-else id="fechada">Estamos fechados</h3>

        <p> Carrinho: {{ quantidadeNoCarrinho }} filmes </p>
      </div>
    </b-row>
      <b-row>
        <div class="cards">
          <b-card :key="filme.id" v-for="filme in filmes"
            :title="filme.titulo"
            :img-src="filme.imagem"
            img-top
            tag="article"
            style="max-width: 15rem;"
            class="mb-3 text-center"
            >

            <b-card-text>
              {{ filme.descricao }}
            </b-card-text>

            <b-button v-if="filme.estoqueDisponivel > 0" href="#" @click="adicionarAoCarrinho(filme)" block variant="dark">Alugar por R$ {{ filme.valor }},00</b-button>
            <b-button v-else href="#" block variant="danger">Esgotado</b-button>
          </b-card>
        </div>
      </b-row>
    </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
    name: 'App',
    /*components: {
      HelloWorld,
    }*/
    data: function(){
      return {
        title: "Locadora de Filmes",
        horas: new Date().getHours(),
        filmes : [
          { id: 1, titulo: "Hulk", descricao: "Filme Ruim", valor: 2, imagem: "https://i.imgur.com/0uthCmp.jpg", estoqueDisponivel: 3 },
          { id: 2, titulo: "Homem de Ferro", descricao: "Homem de Ferro", valor: 10, imagem: "https://i.imgur.com/OA8pDFM.jpg", estoqueDisponivel: 2 },
          { id: 3, titulo: "Thor", descricao: "Bonito ", valor: 20, imagem: "https://i.imgur.com/mt4ZRzw.jpg", estoqueDisponivel: 4 },
          { id: 4, titulo: "Capitão América", descricao: "Um filme de capitão", valor: 40, imagem: "https://i.imgur.com/UFmSVtZ.jpg", estoqueDisponivel: 1 },
          { id: 5, titulo: "Doutor Estranho", descricao: "Magia", valor: 10, imagem: "https://i.imgur.com/pVEDruM.jpg", estoqueDisponivel: 5 },
          { id: 6, titulo: "Pantera Negra", descricao: "Um segundo filme de força", valor: 10, imagem: "https://i.imgur.com/JOSEGKf.jpg", estoqueDisponivel: 2 }
        ],
        carrinho: []
      }
    },
    methods: {
      adicionarAoCarrinho: function(filme) {
        if(filme.estoqueDisponivel > 0){
          this.carrinho.push(filme.id);
          filme.estoqueDisponivel -= 1;
        }
      },
      quantidadeNoCarrinhoPorFilme: function(filme){
        var quantidade = 0;
        for(var i = 0; i < this.carrinho.length; i++){
          if(filme.id == this.carrinho[i]) quantidade++;
        }
        return quantidade;
      }
    },
    computed: {
      quantidadeNoCarrinho: function() {
        return this.carrinho.length;
      }
    }

  }
</script>

<style>
body{
  font-family: 'Quicksand', sans-serif;
  margin-top: 40px;
}

#locadora{
  text-align: center;
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
</style>
