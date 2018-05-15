import Vue from 'vue'
import LoginForm from '@/components/templates/login-form'

describe('Component › Templates › Login Form', () => {
  it('create', () => {
    const Constructor = Vue.extend(LoginForm)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('login-form')).toBe(true)
  })
})
