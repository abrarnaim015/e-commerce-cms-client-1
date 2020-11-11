<template>
  <div id="login-page">
    <div class=" container">
        <div class="row d-flex">
            <div class=" col-sm-8 my-5" style="padding: 0px;">
                <img id="imgLogin" src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjcyNTgzfQ&auto=format&fit=crop&w=1500&q=80" alt="">
            </div>
            <div class=" col-sm-4">
                <div class="card card-signin my-5">
                    <div class="card-body">
                    <h5 class="card-title text-center">Log In</h5>
                    <form @submit.prevent="userLogin" class="form-signin">
                        <div class="form-label-group">
                            <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                            <label for="inputEmail">Email address</label>
                        </div>
                        <div class="form-label-group mb-5">
                            <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                            <label for="inputPassword">Password</label>
                        </div>
                            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit"><router-link class=" text-light" to="/HomePage">Log in</router-link></button>
                        <hr class="my-4">
                            <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                            <button class="btn btn-lg bg-dark btn-block text-uppercase" type="submit"><router-link class="dropdown-item text-decoration-none bg-dark text-light" to="/registerpage">Registration</router-link></button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      email: '',
      password: '',
      access_token: localStorage.getItem('access_token'),
      changePage: ''
    }
  },
  methods: {
    userLogin () {
      const data = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('loginAdmin', data)
      if (this.access_token) {
        this.changePage = '/HomePage'
      }
    }
  },
  created () {
    if (!this.access_token) {
      this.$router.push({ name: 'LoginPage' })
    } else {
      this.$router.push({ name: 'HomePage' })
    }
  }
}
</script>
