const getters = {
    getUser: state => state.userDetails,
  isLoggedIn: state =>  state.userDetails?.token !== '' && state.userDetails?.token !== undefined,
}

export default getters