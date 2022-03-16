<template>
  <div>
    <div class="luis">
      <Header />
    </div>
    <div class="botonLateral">
      <a
        class="btn btn-primary"
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Filtros
      </a>
      <div
        class="offcanvas offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="offcanvasExampleLabel">Filtros</h3>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <div>
            <h5>Marca</h5>
          </div>
          <div
            class="form-check"
            v-for="marcas in marcasList"
            :key="marcas.marca"
          >
            <router-link
              :to="{ name: 'ShowMarca', params: { idm: marcas.idm } }"
            >
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {{ marcas.marca }}
              </label>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="hola">
      <div class="principal" v-for="zapato in zapatoList" :key="zapato.id">
        <router-link :to="{ name: 'Detalles', params: { id: zapato.id } }">
          <div class="card btn btn-warning">
            <div class="imagen">
              <img :src="zapato.thumbnailUrl" class="card-img-top" />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ zapato.marca }}</h5>
              <p class="card-text">{{ zapato.precio }}</p>
              <a href="#" class="btn btn-primary">{{ zapato.status }}</a>
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
import zapatoListQuery from "../../graphql/zapato.query.gql";
import marcasListQuery from "../../graphql/marca.query.gql";

export default {
  name: "Listar",
  components: {
    Header,
    Listar,
  },
  setup() {
    const { result: resultz } = useQuery(zapatoListQuery);
    const { result } = useQuery(marcasListQuery);
    const zapatoList = useResult(resultz, null, (data) => data.zapatoList);
    const marcasList = useResult(result, null, (data) => data.marcasList);
    console.log(resultz, result);
    return { zapatoList, marcasList };
  },
};
</script>
