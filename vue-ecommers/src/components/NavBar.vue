<template>
  <div id="navBar">
    <nav class="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1 shadowNav bgNav">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li id="nameOLS" class="nav-item active">
                    <a class="nav-link" href="/homepage">Sainapa-store</a>
                </li>
                <li class="nav-item active mt-3">
                    <a id="add-todo" class="nav-link" href="/addproduct">Add Product<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item dropdown mt-3">
                    <a class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Other</a>
                    <div class="dropdown-menu dropdown-secondary">
                    <a class="dropdown-item" href="/cardpage">Show Product</a>
                    <a class="dropdown-item" href="/editproduct">Edit</a>
                    <a class="dropdown-item" href="/">Login</a>
                    <a class="dropdown-item" href="/registerpage">Register</a>
                    </div>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto nav-flex-icons">
                <li id="nameOLS_logout" class="nav-item mt-2">
                    <a id="btn-logout" class="nav-link" href="/">Log Out</a>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>

</style>
