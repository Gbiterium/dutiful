<template>
  <div class="forget-password d-flex align-items-center justify-content-center">
    <div class="col-md-6 col-lg-4">
      <div v-if="!email_sent">
      <div class="mb-5">
        <span class="arrow-icon p-2 pointer" @click.prevent="$router.go(-1)">
          <b-icon-arrow-left class="text-primary text-center" />
        </span>
      </div>
      <div class="text-blue fs-36 font-recoleta font-weight-600">
        Forgot password
      </div>
      <span class="text-dark"
        >Enter your email and well send you a mail on how to reset your
        password.</span
      >
      <ValidationObserver ref="form">
      <div class="mt-5 email-form">
        <ValidationProviderWrapper
                  :rules="['required', 'email']"
                >
        <label>Email</label>
        <input v-model="email" type="text" class="form-control" />
        <span
          class="iconify fs-20 text-primary icon-abs text-primary"
          data-icon="ic:outline-email"
        ></span>
        </ValidationProviderWrapper>
      </div>
      <div class="my-5">
        <button class="btn btn-primary py-3 w-100" :disabled="loading" @click.prevent="sendEmail">Send email <b-spinner
                  class="ml-1"
                  v-if="loading"
                  label="Spinning"
                  style="width: 1rem; height: 1rem"
                ></b-spinner></button>
        <div class="d-flex align-items-center justify-content-center mt-3">
          <span class="text-light">Or</span> &nbsp;
          <span
            class="text-light-purple pointer"
            @click.prevent="$router.push('/auth/login')"
            >Login</span
          >
        </div>
      </div>
      </ValidationObserver>
      </div>
      <div v-else>
        <div class="d-flex justify-content-center">
        <img src="@/assets/img/email.png" />
        </div>
        <p class="text-center mt-2">An OTP code has been sent to {{email}}. 
Check your email to get the code</p>
<button class="btn btn-primary mt-4 py-3 w-100" @click.prevent="$router.push({path: '/auth/verify-account', query: {email: email}})">Next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      email_sent: false,
      email: '',
      loading: false
    }
  },
  created() {
    window.scrollTo(0, 0);
  },
  methods: {
    async checkFormValidity() {
      const result = await this.$refs.form.validate();
      return result;
    },
    async sendEmail() {
      const result = await this.checkFormValidity();
      if (!result) {
        // eslint-disable-next-line no-useless-return
        return;
      }
      try {
        this.loading = true
        const response = await this.$axios.post('/auth/password/email', {
          email: this.email
        })
        console.log(response)
        if (response.status === 200) {
          this.email_sent = true
        }
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
};
</script>

<style scoped>
.forget-password {
  min-height: 100vh;
}
label {
  color: #603f8b;
}
.email-form input {
  position: relative;
}
.icon-abs {
  position: absolute;
  right: 25px;
  top: 57%;
  transform: translateY(-70%);
}
.arrow-icon {
  border: 1px solid #e5e7ea;
  border-radius: 50%;
  /* padding: 20px; */
}
</style>
