<template>
    <div>
        <b-container>
            <b-row>
                <h1>{{ title }}</h1>
            </b-row>
            <b-row>
                <p>Carrinho: {{ quantidadeNoCarrinho}} filmes</p>
            </b-row>
            <b-row>
                <ListarFilmes :carrinho="carrinho" />
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import ListarFilmes from './ListarFilmes.vue'

    export default {
        name: "Home",
        components: {
            ListarFilmes
        },
        data() {
            return {
                title: 'Locadora de Filmes',
                horas: new Date().getHours(),
                carrinho: [],
            };
        },
        computed: {
            quantidadeNoCarrinho: function() {
                return this.carrinho.length;
            }
        },
    };
</script>

<style>
    .table {
        width: 100%;
    }

    .pedido {
        width: 100%;
    }

    .container {
        font-family: 'Quicksand', sans-serif;
        margin-top: 40px;
    }

    .row {
        justify-content: center;
    }

    .cards {
        display: flex;
        flex-wrap: inherit;
        justify-content: space-around;
    }

    .card:hover {
        transform: scale(1.05);
    }
</style>