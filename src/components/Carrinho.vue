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
      <form>
        <div class="form-group">
            <label for="pedido.primeiroNome">Primeiro Nome</label>
            <input 
            type="text"
            class="form-control"
            id="primeiroNome"
            placeholder="Digite o primeiro nome aqui"
            v-model="pedido.primeiroNome">
        </div>
        <div class="form-group">
            <label for="pedido.sobrenome">Sobrenome</label>
            <input 
            type="text"
            class="form-control"
            id="primeiroNome"
            placeholder="Digite o sobrenome nome aqui"
            v-model="pedido.sobrenome">
        </div>
        <div class="form-group">
            <label for="pedido.endereco">Endereço</label>
            <input 
            type="text"
            class="form-control"
            id="primeiroNome"
            placeholder="Digite o endereço aqui"
            v-model="pedido.endereco">
        </div>
        <div class="form-group">
            <label for="pedido.sobrenome">CEP</label>
            <input 
            type="number"
            class="form-control"
            id="primeiroNome"
            placeholder="Digite o CEP aqui"
            v-model="pedido.cep">
        </div>
        <div class="form-group">
            <label for="estado">Estado</label>
            <select class="form-control" id="estado" v-model="pedido.estado">
              <option disabled value>Escolha um estado</option>
              <option v-for="(estado, key) in estados" v-bind:value="estado" v-bind:key="key"> {{ key }} </option>
            </select>
        </div>
        <div class="form-group">
          <label for="pedido.cidade">Cidade</label>
          <input 
          type="text"
          class="form-control"
          id="primeiroNome"
          placeholder="Digite a cidade aqui"
          v-model="pedido.cidade">
        </div>
        <div class="form-group form-check">
            <input
                type="checkbox"
                class="form-check-input"
                id="pagarNaEntrega"
                v-bind:true-value="pedido.simNaEntrega"
                v-bind:false-value="pedido.naoNaEntrega"
                v-model="pedido.pagarNaEntrega">
            <label class="form-check-label" for="pagarNaEntrega">Pagar na entrega?</label>
        </div>
        <div class="form-group form-check-inline">
            <input
                type="radio"
                class="form-check-input"
                id="manha"
                value="Manha"
                v-model="pedido.entrega">
            <label class="form-check-label" for="manha">Manhã</label>
        </div>
        <div class="form-group form-check-inline">
            <input
                type="radio"
                class="form-check-input"
                id="tarde"
                value="Tarde"
                v-model="pedido.entrega">
            <label class="form-check-label" for="tarde">Tarde</label>
        </div>
        <div class="form-group form-check-inline">
            <input
                type="radio"
                class="form-check-input"
                id="noite"
                value="Noite"
                v-model="pedido.entrega">
            <label class="form-check-label" for="noite">Noite</label>
        </div>
      </form>
      <pre>
        Primeiro nome: {{pedido.primeiroNome}}
        Sobrenome: {{pedido.sobrenome}}
        Endereço: {{pedido.endereco}}
        CEP: {{pedido.cep}}
        Estado: {{pedido.estado}}
        Cidade: {{pedido.cidade}}
        Pagar na entrega? {{pedido.pagarNaEntrega}}
        Entrega: {{pedido.entrega}}
      </pre>
      
      <div class="form-group">
        <button type="submit" class="btn btn-primary" v-on:click="submitFormulario">Finalizar pedido</button>
      </div>
  
    </b-container>
  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
    name: 'Carrinho',
    /*components: {
      HelloWorld,
    }*/
    props : {
      carrinho : Array,
      totalCompra: Number
    },
    data() {
      return {
        title: "Resumo do pedido",
        fields: ['titulo', 'preço', 'quantidade'],
        pedido:{
          primeiroNome: '',
          sobrenome: '',
          endereco: '',
          cep: '',
          cidade: '',
          estado: '',
          pagarNaEntrega: 'Não',
          simNaEntrega: 'Sim',
          naoNaEntrega: 'Não',
          entrega: 'Tarde'
        },
        estados: {
          AC: 'Acre',
          AL: 'Alagoas',
          AP: 'Amapá',
          AM: 'Amazonas',
          BA: 'Bahia',
          CE: 'Ceará',
          DF: 'Distrito Federal',
          ES: 'Espírito Santo',
          GO: 'Goiás',
          MA: 'Maranhão',
          MT: 'Mato Grosso',
          MS: 'Mato Grosso do Sul',
          MG: 'Minas Gerais',
          PA: 'Pará',
          PB: 'Paraíba',
          PR: 'Paraná',
          PE: 'Pernambuco',
          PI: 'Piauí',
          RJ: 'Rio de Janeiro',
          RN: 'Rio Grande do Norte',
          RS: 'Rio Grande do Sul',
          RO: 'Rondônia',
          RR: 'Roraima',
          SC: 'Santa Catarina',
          SP: 'São Paulo',
          SE: 'Sergipe',
          TO: 'Tocantins'
        }
      };
    },
    methods: {
      submitFormulario(){
        alert('Pedido enviado');
      }
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