<template>
    <div class="morgado">
      <Header />
      <router-link to="/Zapatos">
        <button class="btn btn-success volver">Volver</button>
      </router-link>
      <div class="cuerpo">
          <div id="imagen">
              <img :src="result.zapatoId.data.thumbnailUrl" class="logo" width="500" height="500">
          </div>
          <div class="textoDetalles">
            <p>{{ result.zapatoId.data.marca }}</p>
            <p>{{ result.zapatoId.data.modelo }}</p>
            <p>{{ result.zapatoId.data.precio }}</p>
            <p>{{ result.zapatoId.data.longDescription}}</p>
            <p>
              <a class="btn btn-info" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" 
              aria-controls="collapseExample">
                Ver Tallas
              </a>
            </p>
            <div class="collapse" id="collapseExample">
              <div class="adios">
                {{result.zapatoId.data.tallas}}
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import Detalles from "@/components/Estructura/Detalles";
import Header from "@/components/Estructura/Header";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default {
  name: "Detalles",
  components: {
    Header,
    Detalles,
  },

  props: ["id"],

  setup(props) {
    const { result } = useQuery(
      gql`
        query ($id: ID!) {
          zapatoId(id: $id) {
            data {
              ... on Zapato {
                id
                marca
                modelo
                publishedDate
                longDescription
                thumbnailUrl
                precio
                status
                tallas
              }
            }
          }
        }
      `,
      () => ({
        id: props.id,
      })
    );
    console.log(result);
    return {
      result,
    };
  },
};
</script>