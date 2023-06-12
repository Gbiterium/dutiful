<template>
  <div>
    <nav id="navbar" class="navbar navbar-expand-lg d-flex align-items-center justify-content-between py-3 px-lg-5">
      <div class="logo pointer" @click.prevent="$router.push('/')">
      <img src="@/assets/img/logo.png">
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          role="img"
          focusable="false"
        >
          <title>Menu</title>
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="2"
            d="M4 7h22M4 15h22M4 23h22"
          />
        </svg>
      </button>
      <div id="navbarResponsive" class="navbar-nav collapse navbar-collapse">
      <div class="nav-list d-flex align-items-center justify-content-center text-dark mr-3">
        <a class="nav-item nav-link fs-18" href="#">Business Directory</a>
        <a class="nav-item nav-link fs-18" href="#">Features</a>
        <a class="nav-item nav-link fs-18" href="#">Pricing</a>
        <a class="nav-item nav-link fs-18" href="#">Blog</a>
        <div v-if="!isLoggedIn" class="button-mobile d-flex align-items-center justify-content-center">
          <span class="mx-5 pointer text-blue fs-20 pointer font-weight-500" @click.prevent="$router.push('/auth/login')">Login</span>
          <button class="btn btn-outline-primary px-5 py-2 fs-20 font-weight-500" @click.prevent="$router.push('/auth/signup')">Sign up</button>
        </div>
        <div v-else class="d-flex align-items-center justify-content-center">
          <button class="btn btn-outline-primary px-5 py-2 fs-20 font-weight-500" @click.prevent="logout">Logout</button>
        </div>
      </div>
    </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('auth', ['isLoggedIn'])
    },
    methods: {
        logout () {
            this.$store.dispatch('auth/logout')
      this.$router.push('/auth/login')
        }
    }
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
.navbar-collapse {
  flex-grow: 0 !important;
}
@media screen and (max-width: 767px) {
    .nav-list {
        flex-direction: column;
    }
    .button-mobile {
        flex-direction: column;
    }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
    .nav-list {
        flex-direction: column;
    }
    .button-mobile {
        flex-direction: column;
    }
}
</style>