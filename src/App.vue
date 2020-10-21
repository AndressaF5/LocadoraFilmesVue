<template>
  <div id="app">
    <b-row>   
      <div id="locadora">
        <h1> Bem vindo a {{ title }}</h1>
        <h3 v-if="horas >= 9 && horas < 17" id="aberta">Estamos abertos</h3>
        <h3 v-else-if="horas >= 17 && horas < 18" id="quase-fechando">Estamos quase fechando</h3>
        <h3 v-else id="fechada">Estamos fechados</h3>
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

            <b-card-text>
              R$ {{ filme.valor }},00
            </b-card-text>

            <b-button href="#" block variant="dark">Alugar</b-button>
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
  data: function(){
        return {
            title: "Locadora de Filmes",
            horas: new Date().getHours(),
            filmes : [
              { id: 1, titulo: "Hulk", descricao: "Filme Ruim", valor: 2, imagem: "https://i.imgur.com/0uthCmp.jpg" },
              { id: 2, titulo: "Homem de Ferro", descricao: "Homem de Ferro", valor: 10, imagem: "https://i.imgur.com/OA8pDFM.jpg" },
              { id: 3, titulo: "Thor", descricao: "Bonito ", valor: 20, imagem: "https://i.imgur.com/mt4ZRzw.jpg" },
              { id: 4, titulo: "Capitão América", descricao: "Um filme de capitão", valor: 40, imagem: "https://i.imgur.com/UFmSVtZ.jpg" },
              { id: 5, titulo: "Doutor Estranho", descricao: "Magia", valor: 10, imagem: "https://i.imgur.com/pVEDruM.jpg" },
              { id: 6, titulo: "Pantera Negra", descricao: "Um segundo filme de força", valor: 10, imagem: "https://i.imgur.com/JOSEGKf.jpg" }
            ]
          }
    }
  /*components: {
    HelloWorld,
    LocadoraFilmes
  }*/
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
</style>
