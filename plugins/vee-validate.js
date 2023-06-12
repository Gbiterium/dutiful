import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import {
  required,
  email,
  confirmed,
  // eslint-disable-next-line camelcase
  alpha_spaces,
  digits,
  // eslint-disable-next-line camelcase
  max_value
} from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('email', {
  ...email,
  message: 'This email field is not an email format'
})
extend('confirmed', {
  ...confirmed,
  message: 'Password does not match'
})
extend('alpha_spaces', {
  // eslint-disable-next-line camelcase
  ...alpha_spaces,
  message: 'must be alphabetic'
})
extend('digits', {
  ...digits,
  message: 'Must be an 11 digit number'
})
extend('max_value', {
  // eslint-disable-next-line camelcase
  ...max_value,
  message: 'Maximum value exceeded'
})
extend('dot', {
  validate: (value) => {
    return /\./.test(value)
  },
  message: (fieldName) => {
    return `The ${fieldName} field must contain a dot.`
  }
})
extend('phone', {
  validate: (value) => {
    const regex = /^\+(?:\d{3,3} ?){3,3}\d{4,4}$/
    return regex.test(value)
  },
  message: 'Please enter a valid phone number'
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
