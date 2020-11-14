<template>
  <div id="login-page">
    <div class=" container">
        <div class="row d-flex">
            <div class=" col-sm-8 my-5" style="padding: 0px;">
              <!-- https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjcyNTgzfQ&auto=format&fit=crop&w=1500&q=80 -->
                <img id="imgLogin" src="../assets/img/bgLogin.jpg" alt="">
            </div>
            <div class=" col-sm-4 cardLogin">
                <div class="card card-signin my-5 text-center">
                <h1 class=" h1 mb-0 mt-2"><u class="nameLogin">Sainapa-Store</u></h1>
                    <div class=" card-body">
                    <h6 class=" card-title text-center mb-2">Log In</h6>
                    <form @submit.prevent="userLogin" class="form-signin">
                        <div class="form-label-group">
                            <input v-model="email" type="email" id="inputEmail" class=" form-control" placeholder="Email address" required autofocus>
                            <label for="inputEmail">Email address</label>
                        </div>
                        <div class="form-label-group mb-5">
                            <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                            <label for="inputPassword">Password</label>
                        </div>
                            <button class=" btn btn-lg btn-primary btn-block text-uppercase" type="submit"><router-link class=" text-light" :to="changePage">Log in</router-link></button>
                        <!-- <hr class="my-4"> -->
                            <!-- <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                            <button class="btn btn-lg bg-dark btn-block text-uppercase" type="submit"><router-link class="dropdown-item text-decoration-none bg-dark text-light" to="/registerpage">Registration</router-link></button> -->
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Swal from 'sweetalert2'

export default {
  name: 'Home',
  data () {
    return {
      email: '',
      password: '',
      changePage: '',
      access_token: ''
    }
  },
  methods: {
    userLogin () {
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('loginAdmin', data)
        .then(({ data }) => {
          const accesstoken = data.access_token
          localStorage.setItem('access_token', accesstoken)
          console.log(accesstoken)
          this.$router.push({ name: 'HomePage' })
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Welcome',
            showConfirmButton: false,
            timer: 1500
          })
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Oops, Sorry...',
            text: 'Something went wrong, Internal Server ERROR',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(err)
        })
    }
  },
  created () {
    if (!localStorage.getItem('access_token')) {
      this.$router.push({ name: 'LoginPage' })
    } else {
      this.$router.push({ name: 'HomePage' })
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
.cardLogin{
  margin-top: 10vh;
}
.nameLogin{
  font-family: 'Pacifico', cursive;
  color: #223B4C;
}
.btn{
  background-color: #223B4C;
}
.btn:hover{
  background-color: #659BB5;
}
</style>
