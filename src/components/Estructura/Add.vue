<template>
  <div class="form">
    <Header />
    <h1>INSERCCION DE UN ZAPATO</h1>
    <div class="center">
      <form id="inserccion" class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">ID</label>
          <input type="text" class="form-control" v-model="zapato.id" id="id" />
        </div>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Marca</label>
          <select class="form-select" v-model="zapato.marca" id="marca">
            <option selected>Selecciona una marca</option>
            <option v-for="marcas in marcasList" :key="marcas.marca">
              {{ marcas.marca }}
            </option>
          </select>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label"
            >Modelo</label
          >
          <input
            type="text"
            class="form-control"
            v-model="zapato.modelo"
            id="modelo"
          />
        </div>
        <div class="col-md-4">
          <label for="validationCustom03" class="form-label"
            >publishedDate</label
          >
          <input
            type="text"
            class="form-control"
            v-model="zapato.publishedDate"
            id="publishedDate"
          />
        </div>
        <div class="col-md-4">
          <label for="validationCustom04" class="form-label"
            >thumbnailUrl</label
          >
          <input
            type="text"
            class="form-control"
            v-model="zapato.thumbnailUrl"
            id="thumbnailUrl"
          />
        </div>
        <div class="col-md-4">
          <label for="validationCustom05" class="form-label">Precio</label>
          <input
            type="text"
            class="form-control"
            v-model="zapato.precio"
            id="precio"
          />
        </div>
        <div class="col-md-6">
          <label for="validationCustomUsername" class="form-label"
            >longDescription</label
          >
          <input
            type="text"
            class="form-control"
            v-model="zapato.longDescription"
            id="longDescription"
          />
        </div>
        <div class="col-md-6">
          <label for="validationCustomUsername" class="form-label"
            >tallas</label
          >
          <input
            type="text"
            class="form-control"
            v-model="zapato.status"
            id="tallas"
          />
        </div>
        <div class="col-12">
          <router-link to="/Modificacion">
            <button class="btn btn-primary" @click="zapatoid()" type="submit">
              Insertar
            </button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import Add from "@/components/Estructura/Add";
import Header from "@/components/Estructura/Header";
import { useMutation } from "@vue/apollo-composable";
import { useQuery, useResult } from "@vue/apollo-composable";
import marcasListQuery from "../../graphql/marca.query.gql";
import { ref } from "vue";
import gql from "graphql-tag";

export default {
  name: "Add",
  components: {
    Header,
    Add,
  },
  setup() {
    /* LISTADO DE MARCAS */
    const message = ref("hola sergio");
    const { result } = useQuery(marcasListQuery);
    const marcasList = useResult(result, null, (data) => data.marcasList);

    /* MUTACION DE INSERCCION DE UN ZAPATO */
    const zapato = {
      id: "",
      marca: "",
      modelo: "",
      marca: "",
      publishedDate: "",
      thumbnailUrl: "",
      Precio: "",
      longDescription: "",
      tallas: "",
    };
    const { mutate: zapatoid } = useMutation(
      gql`
        mutation AddZapato($zapato: ZapatoInput!) {
          addZapato(Zapato: $zapato) {
            data {
              ... on Zapato {
                id
                marca
                modelo
                publishedDate
                thumbnailUrl
                precio
                longDescription
                tallas
              }
            }
          }
        }
      `,
      () => ({
        variables: {
          zapato: {
            id: id.value,
            marca: marca.value,
            modelo: modelo.value,
            publishedDate: publishedDate.value,
            thumbnailUrl: thumbnailUrl.value,
            precio: precio.value,
            longDescription: longDescription.value,
            tallas: tallas.value,
          },
        },
      })
    );
    console.log(zapato, marcasList);
    return {
      zapato,
      zapatoid,
      message,
      marcasList,
    };
  },
};
</script>
