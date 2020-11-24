<template>
  <div>
    <div class="cards">
      <b-card 
        :key="filme.id" v-for="filme in filmes"
        :title="filme.titulo"
        :img-src="filme.imagem"
        :img-alt="filme.descricao"
        :id="filme.id"
        img-top
        tag="article"
        style="max-width: 18rem;"
        class="mb-3 text-center"
        >

        <b-card-text>
          <router-link tag="p" :to="{name: 'filme', params: {id: filme.id, filme: filme}}">{{ filme.descricao }}</router-link>
        </b-card-text>

        <b-card-text>
          {{ filme.avaliacao }}
          <b-icon icon="star-fill" variant="warning" v-for="estrelas in filme.avaliacao" :key="estrelas"></b-icon>
          <b-icon icon="star" variant="warning" v-for="estrelas_vazadas in 5 - filme.avaliacao" :key="estrelas_vazadas"></b-icon>
        </b-card-text>
          
        <b-button v-if="filme.estoqueDisponivel > 1" href="#" @click="adicionarAoCarrinho(filme)" block variant="dark">Alugar por R$ {{ filme.valor }},00</b-button>
        <b-button v-else-if="filme.estoqueDisponivel == 1" href="#" @click="adicionarAoCarrinho(filme)" block variant="warning">Última Unidade</b-button>
        <b-button v-else href="#" block variant="danger">Esgotado</b-button>
          
      </b-card>
    </div>
  </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {
      name: 'ListarFilmes',
      data() {
          return {
            filmes : [
                { id: 1, titulo: "Hulk", descricao: "Filme Ruim", valor: 2, imagem: "https://i.imgur.com/0uthCmp.jpg", estoqueDisponivel: 3, avaliacao: 2 },
                { id: 2, titulo: "Homem de Ferro", descricao: "Homem de Ferro", valor: 10, imagem: "https://i.imgur.com/OA8pDFM.jpg", estoqueDisponivel: 3, avaliacao: 4 },
                { id: 3, titulo: "Thor", descricao: "Bonito ", valor: 20, imagem: "https://i.imgur.com/mt4ZRzw.jpg", estoqueDisponivel: 4, avaliacao: 3 },
                { id: 4, titulo: "Capitão América", descricao: "Um filme de capitão", valor: 40, imagem: "https://i.imgur.com/UFmSVtZ.jpg", estoqueDisponivel: 2, avaliacao: 4 },
                { id: 5, titulo: "Doutor Estranho", descricao: "Magia", valor: 10, imagem: "https://i.imgur.com/pVEDruM.jpg", estoqueDisponivel: 5, avaliacao: 3 },
                { id: 6, titulo: "Pantera Negra", descricao: "Um segundo filme de força", valor: 10, imagem: "https://i.imgur.com/JOSEGKf.jpg", estoqueDisponivel: 2, avaliacao: 4 }
            ],
            totalCompra: 0
          }
        },
        methods: {
          adicionarAoCarrinho: function (filme) {
            let carrinho_local =  this.carrinho 
            if (filme.estoqueDisponivel > 0) {
              let indexFilme = carrinho_local.findIndex((obj) => obj.id == filme.id);
              filme.quantidade = (filme.quantidade || 0) + 1;
            if (indexFilme == -1) {
              carrinho_local.push(filme);
              this.$emit('update:carrinho', carrinho_local);
            } else {
              carrinho_local.splice(indexFilme, 1, filme);
              this.$emit('update:carrinho', carrinho_local);
            }
            this.totalCompra += filme.valor;
            filme.estoqueDisponivel -= 1;
        }
          },
        },
        props: {
          carrinho: Array
        }
    }
</script>

<style>
</style>