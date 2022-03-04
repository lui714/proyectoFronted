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
          <h3 class="offcanvas-title" id="offcanvasExampleLabel">Filtros</h3>
          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <h5>Marca</h5>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
              Nike
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              Adidas
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              Reebook
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              Puma
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              New Balance
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              Vans
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              Kappa
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              Fila
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
            <label class="form-check-label" for="flexRadioDefault2">
              Joma
            </label>
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