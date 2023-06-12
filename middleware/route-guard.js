import Toast from '@/helpers/Toast'

export default function ({ store, redirect, route }) {
  if (requireAuth(route) && store.getters['auth/isLoggedIn'] === false) {
    Toast(' ', 'You must be logged in to access this page', 'warning')
    return redirect('/auth/login')
  }
}

const requireAuth = (route) => {
  return ['/dashboard'].includes(route.path)
}
