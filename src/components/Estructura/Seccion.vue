<template>
   <div class="hola">
    <div class="principal" v-for="zapato in zapatoList" :key="zapato.id">
      <div class="card">
        <div class="imagen">
          <img :src="zapato.thumbnailUrl" class="card-img-top">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ zapato.marca }}</h5>
          <p class="card-text">{{zapato.precio}}</p>
          <p>
            <a class="btn btn-info" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              Ver Descripcion
            </a>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="adios">
              {{zapato.longDescription}}
            </div>
          </div>
          <a href="#" class="btn btn-primary">Comprar</a>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
// @ is an alias to /src
import Seccion from "@/components/Estructura/Seccion";
import { useQuery, useResult } from "@vue/apollo-composable";
import { ref } from "vue";
import zapatoListQuery from "../../graphql/zapato.query.gql";

export default {
  name: "Seccion",
  components: {
    Seccion,
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