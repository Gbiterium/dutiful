<template>
  <div class="reset-page d-flex align-items-center justify-content-center">
    <div class="col-md-4">
        <div class="text-blue fs-36 font-recoleta font-weight-600">
            Reset password
      </div>
      <span class="text-dark"
        >Set your new password</span
      >
      <ValidationObserver ref="form">
      <div class="mt-5">
        <ValidationProviderWrapper name="password" :rules="['required']">
        <label>Enter new password</label>
        <BaseInput v-model="password" type="password" />
        </ValidationProviderWrapper>
      </div>
      <div class="mt-4">
        <ValidationProviderWrapper
              :rules="['required', 'confirmed:password']"
            >
        <label>Re-enter new password</label>
        <BaseInput v-model="password2" type="password" />
        </ValidationProviderWrapper>
      </div>
      <div class="my-5">
        <button class="btn btn-primary py-3 w-100" :disabled="loading" @click.prevent="resetPassword">Reset password <b-spinner
                  class="ml-1"
                  v-if="loading"
                  label="Spinning"
                  style="width: 1rem; height: 1rem"
                ></b-spinner></button>
        <div class="d-flex align-items-center justify-content-center mt-3">
          <span class="text-light">Or</span> &nbsp;
          <span
            class="text-light-purple pointer"
            @click.prevent="$router.push('/auth/signup')"
            >Create new account.</span
          >
        </div>
      </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import Toast from "@/helpers/Toast";
export default {
    data() {
        return {
            loading: false,
            password: '',
            password2: ''
        }
    }, 
    methods: {
        async checkFormValidity() {
      const result = await this.$refs.form.validate();
      return result;
    },
        async resetPassword() {
            const result = await this.checkFormValidity();
      if (!result) {
        // eslint-disable-next-line no-useless-return
        return;
      }
            try {
                this.loading = true
                const response = await this.$axios.post('/auth/password/reset', {
                    password: this.password,
                    email: this.$route.query.email,
                    otp: this.$route.query.otp
                })
                if(response.status === 200) {
                    Toast('Success', response.data.message, 'success')
                    this.$router.push('/auth/login')
                }
            } catch (error) {
                console.log(error)
            } finally {
                this.loading = false
            }
        }
    }
}
</script>

<style scoped>
.reset-page {
    min-height: 100vh;
}
</style>