<template>
  <div class="password">
      <input
      v-model="currentValue"
      :type="showPassword ? 'text' : 'password'"
      :placeholder="placeholder"
        class="form-control"
        />
        <b-icon class="text-primary eye-icon fs-20" :icon="showPassword ? 'eye' : 'eye-slash'" @click.prevent="togglePassword"></b-icon>
      </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      showPassword: false
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    togglePassword() {
      //   console.log(this.togglePassword)
      this.showPassword = !this.showPassword
    }
  }
}
</script>

<style scoped>
.password {
    position: relative;
}
.eye-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
}
</style>
