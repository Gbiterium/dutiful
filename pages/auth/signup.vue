<template>
  <div
    class="signup-page d-flex align-items-center justify-content-center py-5"
  >
    <div class="col-md-6 col-lg-4">
      <div class="text-dark">Sign up for free!</div>
      <div class="text-blue fs-36 font-weight-600">Get started</div>
      <div class="my-4">
        <div class="d-flex align-items-center justify-content-between">
          <div
            class="border-1 py-4 px-3 register pointer mr-2"
            :class="[!active ? 'disable' : '']"
            @click.prevent="user"
          >
            <span
              class="iconify text-primary fs-24 mr-2"
              data-icon="solar:user-linear"
              :class="[!active ? 'disable2' : '']"
            ></span>
            <span class="text-darker fs-18" :class="[!active ? 'disable2' : '']"
              >Regular user</span
            >
            <div class="icon-abs" v-if="active">
              <span
                class="iconify text-primary fs-24"
                data-icon="tabler:circle-check-filled"
              ></span>
            </div>
          </div>
          <div
            class="border-1 py-4 px-3 pointer register"
            :class="[!vendor ? 'disable' : '']"
            @click.prevent="provider"
          >
            <span
              class="iconify text-primary fs-24 mr-2"
              :class="[!vendor ? 'disable2' : '']"
              data-icon="clarity:store-solid"
              ></span>
            <span class="text-darker fs-18" :class="[!vendor ? 'disable2' : '']"
              >Service provider</span
            >
            <div class="icon-abs" v-if="vendor">
              <span
                class="iconify text-primary fs-24"
                data-icon="tabler:circle-check-filled"
              ></span>
            </div>
          </div>
        </div>
      </div>
      <ValidationObserver ref="form">
        <form @submit.prevent="handleSubmit">
          <div class="mt-4">
            <ValidationProviderWrapper :rules="['required']">
              <label>Full name</label>
              <input v-model="name" type="text" class="form-control" />
            </ValidationProviderWrapper>
          </div>
          <div class="mt-4">
            <ValidationProviderWrapper :rules="['required', 'email']">
              <label>Email</label>
              <input v-model="email" type="text" class="form-control" />
            </ValidationProviderWrapper>
          </div>
          <div class="mt-4">
            <ValidationProviderWrapper :rules="['required']">
              <label>Phone number</label>
              <input v-model="phone" type="tel" class="form-control" />
            </ValidationProviderWrapper>
          </div>
          <div class="mt-4">
            <ValidationProviderWrapper name="password" :rules="['required']">
              <label>Password</label>
              <BaseInput v-model="password" type="password" />
            </ValidationProviderWrapper>
          </div>
          <div class="mt-4">
            <ValidationProviderWrapper
              :rules="['required', 'confirmed:password']"
            >
              <label>Re-enter password</label>
              <BaseInput v-model="password2" type="password" />
            </ValidationProviderWrapper>
          </div>
          <div class="mt-4 d-flex align-items-center">
            <input type="checkbox" v-model="check" class="mr-2" />
            <span class="fs-14"
              >I agree to Dutiful’s
              <span class="text-primary text-decoration-underline"
                >terms and conditions</span
              ></span
            >
          </div>
          <div class="my-5">
            <button
              class="btn btn-primary py-3 w-100"
              :disabled="loading"
              type="submit"
            >
              Sign up
              <b-spinner
                class="ml-1"
                v-if="loading"
                label="Spinning"
                style="width: 1rem; height: 1rem"
              ></b-spinner>
            </button>
            <div class="d-flex align-items-center justify-content-center mt-3">
              <span class="text-light">Already have an account?</span> &nbsp;
              <span class="text-light-purple pointer" @click.prevent="login"
                >Login</span
              >
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import Toast from "@/helpers/Toast";
export default {
  layout: "default",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      password: "",
      password2: "",
      check: false,
      loading: false,
      active: true,
      vendor: false,
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  methods: {
    login() {
      this.$router.push("/auth/login");
    },
    provider() {
      this.active = false;
      this.vendor = true;
    },
    user() {
      this.active = true;
      this.vendor = false;
    },
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
        if (this.check) {
        const response = await this.$axios.post("/auth/register/", {
          name: this.name,
          email: this.email,
          phone: this.phone,
          password: this.password,
        });
        if (response.status === 200) {
          Toast("Success", "Registration Successful", "success");
          this.$router.push('/auth/login')
        }
    } else {
        Toast("Error", 'Please accept terms and condition before you proceed', 'error')
    }
      } catch (error) {
        if (error.response.data && error.response) {
          const keys = Object.keys(error.response.data.details);
          keys.forEach((key) => {
            Toast(
              "Error",
              `${key} - ${error.response.data.details[key][0]}`,
              "error"
            );
          });
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.signup-page {
  min-height: 100vh;
}
.register {
  position: relative;
  z-index: 1001;
}
.icon-abs {
  position: absolute;
  top: -10px;
  right: -10px;
  z-index: 1;
}
.disable {
  color: #b1bdca !important;
  border: 1px solid #eeeeff !important;
}
.disable2 {
  color: #b1bdca !important;
}
label {
  color: #603f8b;
  font-size: 18px;
}
@media screen and (max-width: 767px) {
    .register span {
        font-size: 14px !important;
    }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
    .register span {
        font-size: 16px !important;
    }
}
</style>
