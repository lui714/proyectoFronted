<template>
<div class="header">
    <div class="collapse" id="navbarToggleExternalContent">
    <nav class="bg-dark p-4">
        <a href="#" class="text-white h5">LISTAR</a> <br>
        <a href="#" class="text-white h5">INSERTAR</a>
    </nav>
    </div>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <h3 class="titulo">ZAPATERIA</h3>
            </div>
        </nav>
</div>
</template>

<script>
import Header from "@/components/Estructura/Header";

export default ({
     name: "Header",
  components: {
    Header,
  },
})
</script>
