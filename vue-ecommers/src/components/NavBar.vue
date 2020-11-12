<template>
  <div id="navBar">
    <nav class="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1 shadowNav bgNav">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li id="nameOLS" class="nav-item active">
                    <router-link class=" text-light" to="/homepage">Sainapa-store</router-link>
                </li>
                <li class="nav-item active mt-3 ml-3">
                    <router-link class=" text-light text-decoration-none" to="/addproduct">Add Product<span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item dropdown mt-2">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other</a>
                    <div class="dropdown-menu dropdown-secondary">
                    <router-link class="dropdown-item" to="/cardpage">Show Product</router-link>
                    <router-link class="dropdown-item" to="/editproduct">Edit</router-link>
                    <router-link class="dropdown-item" to="/">Login</router-link>
                    <router-link class="dropdown-item" to="/registerpage">Register</router-link>
                    </div>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto nav-flex-icons">
                <li id="nameOLS_logout" class="nav-item mt-3">
                    <a @click="deleteAccessToken" class="nav-link" href="#">Log Out</a>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    deleteAccessToken () {
      localStorage.clear()
      this.$router.push({ name: 'LoginPage' })
    }
  }
}
</script>

<style>

</style>
