import VueCookies from "vue-cookies"

const userDetails = VueCookies.get('dutiful-user')

const state = () => ({
    userDetails: userDetails || {},
  isLoggedIn: false,
})

export default state