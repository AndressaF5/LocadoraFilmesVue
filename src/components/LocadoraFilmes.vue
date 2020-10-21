<template>
  <div id="locadora">
      <h1> Bem vindo a {{ title }}</h1>
      <h3 v-if="horas >= 9 && horas < 17" id="aberta">Estamos abertos</h3>
      <h3 v-else-if="horas >= 17 && horas < 18" id="quase-fechando">Estamos quase fechando</h3>
      <h3 v-else id="fechada">Estamos fechados</h3>  
  </div>
</template>

<script>

export default {
  name: 'app',
    data: function(){
        return {
            title: "Locadora de Filmes",
            horas: new Date().getHours()
        }
    }
}
</script>

<style>

</style>