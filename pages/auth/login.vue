<template>
  <div class="login-page">
    <div class="col-md-4">
      <div class="text-dark">Jump right back in</div>
      <div class="text-blue fs-36 font-recoleta font-weight-600">Login</div>
      <div class="my-4">
        <ValidationObserver ref="form">
          <form @submit.prevent="handleSubmit">
            <div class="mt-4">
              <ValidationProviderWrapper
                  :rules="['required', 'email']"
                >
              <label>Email</label>
              <input v-model="email" type="text" class="form-control" />
              </ValidationProviderWrapper>
            </div>
            <div class="mt-4">
              <ValidationProviderWrapper :rules="['required']">
                <label>Password</label>
                <BaseInput v-model="password" type="password" />
              </ValidationProviderWrapper>
            </div>
            <span
              class="text-primary fs-14 mt-1 d-flex justify-content-end pointer"
              @click.prevent="$router.push('/auth/forgot-password')"
              >Forgot password?</span
            >
            <div class="my-5">
              <button
                class="btn btn-primary py-3 w-100"
                type="submit"
                :disabled="loading"
              >
                Login
                <b-spinner
                  class="ml-1"
                  v-if="loading"
                  label="Spinning"
                  style="width: 1rem; height: 1rem"
                ></b-spinner>
              </button>
              <div
                class="d-flex align-items-center justify-content-center mt-3"
              >
                <span class="text-light">Don’t have an account?</span> &nbsp;
                <span
                  class="text-light-purple pointer"
                  @click.prevent="$router.push('/auth/signup')"
                  >Sign Up</span
                >
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from "@/helpers/Toast";
export default {
  layout: "default",
  data() {
    return {
      email: "",
      password: "",
      loading: false,
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  methods: {
    async checkFormValidity() {
      const result = await this.$refs.form.validate();
      return result;
    },
    async handleSubmit() {
      const result = await this.checkFormValidity();
      if (!result) {
        // eslint-disable-next-line no-useless-return
        return;
      }
      try {
        this.loading = true;
        const response = await this.$axios.post("/auth/login/", {
          email: this.email,
          password: this.password,
        });
        if (response.status === 200) {
          Toast("Success", "Login Successful", "success");
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
label {
  color: #603f8b;
}
</style>
