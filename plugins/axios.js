import Toast from '@/helpers/Toast'
export default function ({ $axios, app, store, redirect }) {
  $axios.interceptors.request.use(
    (config) => {
      const token = app.$cookies.get('dutiful-token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => {
      Promise.reject(error)
    },
    $axios.onError((error) => {
      // store.commit('toggleRequestInProgress', false)
      // clearTimeout(networkTimeOut)
      // store.commit('toggleSlowNetwork', false)
  
      if (error.response && error.response.status === 401) {
        store.dispatch('auth/logout')
        redirect('/auth/login');
        if (process.client) {
          Toast('Error', error.response.data.details || '', 'error')
        }
  
  
        return Promise.reject(error)
      }
  
      if (error.response && error.response.status === 400) {
        if (process.client) {
          Toast('Error', error.response.data.error || '', 'error')
        }
  
        return Promise.reject(error)
      }
  
      if (error.response && error.response.status === 404) {
        if (process.client) {
          Toast('Error', error.response.data.details || '', 'error')
        }
  
  
      } else if (error.response && error.response.data) {
        if (process.client) {
          Toast('Error', error.response.data.details || '', 'error')
        }
  
      }
      else {
        if (process.client) {
          Toast('Error', 'Something went wrong', 'error')
        }
  
  
        return Promise.reject(error)
      }
  
      if (error.message) {
        if (process.client) {
          Toast('Error', error.response.data.details || '', 'error')
        }
  
        return Promise.reject(error)
      }
  
      if (process.client) {
        Toast('Error', 'Something went wrong', 'error')
      }
  
  
      return Promise.reject(error)
  
    })
  )
}
