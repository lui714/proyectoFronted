<template>
  <div>
    <div class="luis">
        <Header />
    </div>
    <div class="botonLateral">
      <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        Filtros
      </a>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
          </div>
          <div class="dropdown mt-3">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
              Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="hola">
      <div class="principal" v-for="zapato in zapatoList" :key="zapato.id">
        <router-link :to="{name: 'Detalles', params: {id: zapato.id}}">
          <div class="card btn btn-warning">
            <div class="imagen">
              <img :src="zapato.thumbnailUrl" class="card-img-top">
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ zapato.marca }}</h5>
              <p class="card-text">{{zapato.precio}}</p>
              <a href="#" class="btn btn-primary">{{zapato.status}}</a>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div> 
</template>

<script>
// @ is an alias to /src
import Listar from "@/components/Estructura/Listar";
import Header from "@/components/Estructura/Header";
import { useQuery, useResult } from "@vue/apollo-composable";
import { ref } from "vue";
import zapatoListQuery from "../../graphql/zapato.query.gql";

export default {
  name: "Listar",
  components: {
    Header,
    Listar,
  },
  setup() {
    const message = ref("hola sergio");
    const { result } = useQuery(zapatoListQuery);

    // console.log(result)
    const zapatoList = useResult(result, null, (data) => data.zapatoList);

    return { message, zapatoList };
  },
};
</script>