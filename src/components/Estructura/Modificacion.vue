<template>
  <div class="algo">
    <div class="luis">
        <Header />
    </div>
        <button class="mod btn btn-primary">
            <span class="material-icons-round">add_circle_outline</span>
        </button>
        <div class="centrar">
            <table class="tabla" v-for="zapato in zapatoList" :key="zapato.id">
                <tr class="id">
                    <th>{{ zapato.id }}</th>
                </tr>
                <tr>
                    <td class="tres"><img :src="zapato.thumbnailUrl" class="card-img-top" height="50" width="50"></td>
                    <td>{{ zapato.marca }}</td>
                    <td>{{ zapato.modelo }}</td>
                </tr>
                <div class="botones">
                    <button class="mod btn btn-danger">
                        <span class="material-icons-round">delete</span>
                    </button>
                    <router-link to='/Update'> 
                        <button class="mod btn btn-success">
                            <span class="material-icons-round">edit</span>
                        </button>
                    </router-link>
                </div>
            </table>
        </div>
  </div> 
</template>

<script>
// @ is an alias to /src
import Modificacion from "@/components/Estructura/Modificacion";
import Header from "@/components/Estructura/Header";
import { useQuery, useResult } from "@vue/apollo-composable";
import { ref } from "vue";
import zapatoListQuery from "../../graphql/zapato.query.gql";

export default {
  name: "Modificacion",
  components: {
    Header,
    Modificacion,
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