import Vue from 'vue'
import { localize, ValidationProvider, extend, ValidationObserver } from 'vee-validate'
import en from 'vee-validate/dist/locale/pt_BR.json'
import { required, min, max } from 'vee-validate/dist/rules'

extend('required', required)
extend('min', min)
extend('max', max)

extend('checkValue', {
  validate: function (value) {
    const valid = value !== 'R$ 0,00' ? true : false
    return valid
  },
  message: 'Campo obrigatório'
})

extend('checkLetters', {
  validate: function (value) {
    debugger
    let valid = false
    const regex = /^([A-z\-' ÀÁÂÃÇÈÉÊÌÍàáâãçèéêìíÒÓÔÕÙÚòóôõùú]*$)/

    valid = regex.test(value)
    return valid
  },
  message: 'Somente letras'
})

localize({
  en: {
    messages: {
      required: 'Campo obrigatório.',
      min: 'Mínimo 3 caracteres',
      max: 'Máximo 60 caracteres'
    }
  }
})
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)