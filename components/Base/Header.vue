<template>
  <div>
    <nav class="navbar d-flex align-items-center justify-content-between py-3 px-lg-5">
      <div class="logo pointer" @click.prevent="$router.push('/')">
      <img src="@/assets/img/logo.png">
      </div>
      <div class=" d-flex align-items-center justify-content-center text-dark mr-3">
        <a class="nav-item nav-link fs-18" href="#">Business Directory</a>
        <a class="nav-item nav-link fs-18" href="#">Features</a>
        <a class="nav-item nav-link fs-18" href="#">Pricing</a>
        <a class="nav-item nav-link fs-18" href="#">Blog</a>
        <div class="d-flex align-items-center justify-content-center">
          <span class="mx-5 pointer text-blue fs-20 pointer font-weight-500" @click.prevent="$router.push('/auth/login')">Login</span>
          <button class="btn btn-outline-primary px-5 py-2 fs-20 font-weight-500" @click.prevent="$router.push('/auth/signup')">Sign up</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo img {
  width: 120px;
  height: 54px;
}
a {
  color: #686868;
}
a:hover {
  color: #686868;
}
</style>