<template>
  <div class="verify-page d-flex align-items-center justify-content-center">
    <div class="col-md-4">
      <div class="d-flex align-items-center justify-content-center otp-input">
        <input
      v-for="(otpInput, index) in otpInputs"
      :key="index"
      :ref="'otpInput-' + index"
      type="text"
      class="form-control mr-2"
      v-model="otpInputs[index]"
      maxlength="1"
      @input="handleInput(index)"
      @keydown="handleKeydown(index, $event)"
    >
      </div>
        <p class="text-center text-dark mt-4">Enter OTP code that was sent to your email, {{ $route.query.email ? $route.query.email : '' }}.</p>
        <button class="btn btn-primary py-3 w-100 mt-5" :disabled="loading" @click.prevent="confirmOtp">Confirm OTP <b-spinner
                  class="ml-1"
                  v-if="loading"
                  label="Spinning"
                  style="width: 1rem; height: 1rem"
                ></b-spinner></button>
        <div class="d-flex align-items-center justify-content-center mt-3">
        <span class="text-light">Didn't get a code?</span> &nbsp; <span class="text-light-purple pointer" @click.prevent="$router.push('/auth/forgot-password')">Resend</span>
    </div>
    </div>
  </div>
</template>

<script>
import Toast from "@/helpers/Toast";
export default {
  data() {
  return {
    otpInputs: ['', '', '', '', '', ''],
    loading: false
  };
},
methods: {
  handleInput(index) {
    if (this.otpInputs[index].length === 1 && index < this.otpInputs.length - 1) {
      this.$refs['otpInput-' + (index + 1)][0].focus(); // Focus on the next input field
    }
  },
  handleKeydown(index, event) {
    if (event.key === 'Backspace' && index > 0 && this.otpInputs[index].length === 0) {
      this.$refs['otpInput-' + (index - 1)][0].focus(); // Focus on the previous input field
    }
  },
  async confirmOtp() {
    try {
      this.loading = true
      const response = await this.$axios.post('/auth/password/verify', {
        email: this.$route.query.email,
        otp: this.otpInputs.join('')
      })
      if (response.status === 200) {
        Toast('Success', response.data.message, 'success')
        this.$router.push({path: '/auth/reset-password', query: {email: this.$route.query.email, otp: this.otpInputs.join('')}})
      }
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      this.loading = false
    }
  }
},
}
</script>

<style scoped>
  .verify-page {
    min-height: 100vh
  }
  .form-control {
    width: 75px;
    height: 75px;
  }
  .otp-input input {
    font-size: 24px;
    text-align: center;
  }
</style>