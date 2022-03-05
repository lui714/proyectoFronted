<template>
    <div>
        <Header />
        <section class="login" style="background-color: #e9e4f0;">
        <div class="container py-5">
            <div class="row d-flex justify-content-center align-items-center">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card shadow-2-" style="border-radius: 1rem;" >
                <div class="card-body p-5 text-center row d-flex justify-content-center align-items-center">

                    <h3 class="mb-5">Sign in</h3>

                    <div class="form-outline mb-4">
                    <input type="email" id="typeEmailX-2" class="form-control form-control-lg"  placeholder="Email" />
                    <label class="form-label" for="typeEmailX-2"></label>
                    </div>

                    <div class="form-outline mb-4">
                    <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Password" />
                    <label class="form-label" for="typePasswordX-2"></label>
                    </div>

                    <!-- Checkbox -->
                    <div class="form-check d-flex justify-content-start mb-4">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                    />
                    <label class="form-check-label" for="form1Example3"> Remember password </label>
                    </div>
                    <router-link to="/Modificacion">
                        <button class="btn btn-primary btn-lg btn-block" type="submit">Iniciar Sesion</button>
                    </router-link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        </div>
</template>
<script>
import Login from "@/components/Estructura/Login";
import Header from "@/components/Estructura/Header";

export default {
  name: "Login",
  components: {
    Header,
    Login,
  },
};
</script>
