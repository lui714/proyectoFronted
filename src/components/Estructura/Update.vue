<template>
    <div class="form">
        <Header />
        <h1>ACTUALIZACION DE UN ZAPATO</h1>
        <div class="center">
            <form id="inserccion" class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">ID</label>
                    <input type="text" class="form-control" id="id">
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Marca</label>
                    <input type="text" class="form-control" id="marca">
                </div>
                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">Modelo</label>
                    <input type="text" class="form-control" id="modelo">
                </div>
                <div class="col-md-4">
                    <label for="validationCustom03" class="form-label">publishedDate</label>
                    <input type="text" class="form-control" id="publishedDate">
                </div>
                <div class="col-md-4">
                    <label for="validationCustom04" class="form-label">thumbnailUrl</label>
                    <input type="text" class="form-control" id="thumbnailUrl">
                    
                </div>
                <div class="col-md-4">
                    <label for="validationCustom05" class="form-label">Precio</label>
                    <input type="text" class="form-control" id="precio">
                </div>
                <div class="col-md-6">
                    <label for="validationCustomUsername" class="form-label">longDescription</label>
                    <input type="text" class="form-control" id="longDescription">
                </div>
                <div class="col-md-6">
                    <label for="validationCustomUsername" class="form-label">tallas</label>
                    <input type="text" class="form-control" id="tallas">
                </div>
                <div class="col-12">
                    <router-link to="/Modificacion">
                        <button class="btn btn-primary" @click="zapatoid()" type="submit">Actualizar</button>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import Update from "@/components/Estructura/Update";
import Header from "@/components/Estructura/Header";

export default {
  name: "Insertar",
  components: {
    Header,
    Update,
  }
};
</script>
