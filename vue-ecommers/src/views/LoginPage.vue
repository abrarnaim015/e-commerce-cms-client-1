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
                    <form class="form-signin">
                        <div class="form-label-group">
                            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                            <label for="inputEmail">Email address</label>
                        </div>
                        <div class="form-label-group">
                            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                            <label for="inputPassword">Password</label>
                        </div>
                        <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="customCheck1">
                            <label class="custom-control-label" for="customCheck1">Remember password</label>
                        </div>
                            <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Log in</button>
                        <hr class="my-4">
                            <button class="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                            <button class="btn btn-lg btn-facebook btn-block text-uppercase" type="submit">Registration</button>
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
  name: 'Home'
}
</script>
