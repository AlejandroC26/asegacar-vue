<template>
  <div class="login">
    
    <main>
      <section class="text-center text-lg-start">
          <!-- Jumbotron -->
          <div class="container py-4" style="max-width: 1200px">
            <div class="row g-0">
              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="login-logo">
                  <img src="../assets/img/logo/logo2.png" alt="logo.png">
                </div>
              </div>
    
              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="info-card" style="max-width: 410px; margin: 0 auto;">
                  <form @submit.prevent="LogIn()">
                      <!-- Email input -->
                    <div class="form-outline mb-4">
                      <input type="text" v-model="user.login" class="form-control" placeholder="Usuario"/>
                    </div>
                    <!-- Password input -->
                    <div class="form-outline mb-4">
                      <input type="password" v-model="user.password" class="form-control" placeholder="Contraseña"/>
                    </div>
                    <!-- Submit button -->
                    <button type="submit" class="btn-login btn-block mb-4" style="width: 100%; font-weight: bold">
                      Iniciar Sesión
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- Jumbotron -->
      </section>
    </main>
  </div>
</template>

<script>
import axiosServices from '../store/axiosServices';
import { mapActions, mapMutations, mapState } from 'vuex'
/* import axios from "axios" */
export default {
  name: 'Login',
  components: {},
  data: function () {
    return {
      user: {
        login: "",
        password: "",
      },
    };
  },
  methods: {
    LogIn() {
      axiosServices.onAxiosPostLogin('auth/login', this.user).then(res => {
          if(res.data.authorisation.token){
            this.setToken(res.data.authorisation.token);
            localStorage.setItem('token', res.data.authorisation.token);
            this.$router.push({
              path: 'admin'
            })
        }
      })
      .catch(err => {
        console.log(err)
        if(err) return this.launchAlert({type: 'error', title: '¡Usuario o contraseña incorrectos!'})
      })
    },
    resultStatus(status) {if(status == 'success') return $('#modal-register').modal('hide')},
    launchAlert(config){
        if(!config.timeout) config.timeout = 2500;
        const Toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: config.timeout,
        })
        Toast.fire({
            icon: config.type,
            title: config.title,
            text: config.message,
        })
    },
    ...mapMutations(["setToken"]),
  },
  mounted: function(){
    $('.modal-backdrop').remove();
  },
  computed: {
    ...mapState("auth", ["error"]),
    ...mapState(["api_url"]),
  },

}
</script>
<style scoped>
  a {
    cursor: pointer;
  }
  .login{
    background-color: rgba(225, 245, 255, .3);
    font-family: 'Tahoma', sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .login main {min-width: 100vw; margin-top: 0;}
  .info-text{padding: 3rem 2rem 1rem 2rem; text-align: left;}
  .info-text h1{
    display: inline;
    font-size: 2.8rem;
    font-weight: bold;
    color: var(--color-forms);
    text-shadow: 0 0 1px  var(--color-forms);
  }
  .info-text h2 {
    font-size: 1.6rem;
    color: var(--color-forms-second);
    text-shadow: 0 0 1px  var(--color-forms-second);
  }
  .info-text h3 {
    font-size: 1.3rem;
    color: var(--color-dark-variant);
  }
  .login-logo {
    padding: 2rem .5rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius-2);
  }
  .login-logo img{
    width: 100%;
    max-width: 350px;
  }
  .form-control{
    font-size: 1.2rem;
    padding: .5rem 1.2rem;
  }
  .btn-login,
  .btn-register{
    padding: .5rem 1.2rem;
    border-radius: .2rem;
    font-size: 1.5rem;
    font-family: "Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",
    Roboto,"Helvetica Neue",Arial,sans-serif,
    "Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  }
  .btn-login{
    color: #fff;
    background-color: var(--color-forms);
  }
  .btn-register{
    display: block;
    text-align: center;
    padding: 0 1rem;
  }
  @media screen and (max-width: 992px){
    .info-text{padding: 3rem 2rem 1rem 2rem; text-align: center;}
  }
</style>
