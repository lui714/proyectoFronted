<template>
    <div>
        <Header />
        <h1>INSERCCION DE UN ZAPATO</h1>
        <div class="insert">
            <div class="formulario">
                <input type="text" class="form-control" placeholder="ID" aria-label="Username" aria-describedby="basic-addon1">
                <input type="text" class="form-control" placeholder="marca" aria-label="Username" aria-describedby="basic-addon1">
                <input type="text" class="form-control" placeholder="modelo" aria-label="Username" aria-describedby="basic-addon1">
                <input type="text" class="form-control" placeholder="fecha de publicacion" aria-label="Username" aria-describedby="basic-addon1">
                <input type="text" class="form-control" placeholder="descripcion" aria-label="Username" aria-describedby="basic-addon1">
                <input type="text" class="form-control" placeholder="foto" aria-label="Username" aria-describedby="basic-addon1">
                <input type="text" class="form-control" placeholder="precio" aria-label="Username" aria-describedby="basic-addon1">
                <div class="input-group mb-3">
                  <select class="form-select" id="inputGroupSelect01" placeholder="status">
                    <option selected>Publish</option>
                    <option value="2">Unpublish</option>
                  </select>
                </div>
                <input type="text" class="form-control" placeholder="tallas" aria-label="Username" aria-describedby="basic-addon1">
                <button class="btn btn-primary">Insertar</button>
            </div>
        </div>
    </div>
</template>
<script>
import Insertar from "@/components/Estructura/Insertar";
import Header from "@/components/Estructura/Header";

export default {
  name: "Insertar",
  components: {
    Header,
    Insertar,
  }
};
</script>
