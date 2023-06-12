import Toast from "@/helpers/Toast";
const actions = {
    async LOGIN_USER ({ commit }, payload) {
        try {
          const response = await this.$axios.post('auth/login', payload)
          commit('set_users', response.data.data)
          if (response.status === 200) {
            Toast("Success", "Login Successful", "success");
            this.$router.push('/dashboard')
          }
          this.$cookies.set('dutiful-token', response.data.data.token)
              this.$cookies.set('dutiful-user', response.data.data)
              this.$cookies.set('loggedIn', true)
        } catch (error) {
            console.log(error)
        }
      },
      logout ({ commit }) {
        commit('logout')
        this.$cookies.remove('dutiful-token')
        this.$cookies.remove('dutiful-user')
        this.$cookies.remove('loggedIn')
      }
}

export default actions