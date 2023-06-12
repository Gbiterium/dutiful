const mutations = {
    logout (state) {
        state.userDetails = {}
        state.isLoggedIn = false
      },
      set_users (state, user) {
        state.userDetails = user
        state.isLoggedIn = true
      },
}

export default mutations