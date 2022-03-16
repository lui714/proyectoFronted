<template>
  <div class="morgado">
    <Header />
    <router-link to="/Zapatos">
      <button class="btn btn-success volver">Volver</button>
    </router-link>
    <div class="cuerpo">
      <div class="hola">
        <div
          class="principal"
          v-for="zapato in result.marcaId"
          :key="zapato.idm"
        >
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
  </div>
</template>

<script>
import Header from "@/components/Estructura/Header";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ShowMarca } from "../../graphql/filtrozapato";

export default {
  name: "ShowMarca",
  components: {
    Header,
    ShowMarca,
  },

  props: ["idm"],

  setup(props) {
    const { result } = useQuery(ShowMarca, () => ({
      idm: props.idm,
    }));
    console.log(result);
    return {
      result,
    };
  },
};
</script>
