<template>
  <div class="home">
    <div class="cabecera">
      <Header />
    </div>
    <div class="bienvenida">
      <div class="uno">
        <h1>BIENVENIDO A LA ZAPATERIA DE LUIS Y SERGIO</h1>
      </div>
    </div>  
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Estructura/Header";


export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>
