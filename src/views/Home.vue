<template>
  <div class="home">
    <Header />
    <Seccion />
  </div>
</template>

<script>
// @ is an alias to /src
import Seccion from "@/components/Estructura/Seccion";
import Header from "@/components/Estructura/Header";


export default {
  name: "Home",
  components: {
    Header,
    Seccion,
  },
};
</script>
