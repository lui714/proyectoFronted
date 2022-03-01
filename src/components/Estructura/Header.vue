<template>
<div class="header">
    <div class="collapse" id="navbarToggleExternalContent">
        <nav class="nav-header bg-dark p-4">
            <router-link to="/Zapatos">
                <a href="#" class="text-white h5">LISTAR</a>
            </router-link>
            <router-link to="/Modificacion">
                <a href="#" class="text-white h5">MODIFICACION</a>
            </router-link>
        </nav>
    </div>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            <router-link to="/" class="titulo">
                <h3 class="titulo">ZAPATERIA</h3>
            </router-link>
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
