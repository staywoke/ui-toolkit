import { mount } from 'vue-test-utils'

import Vue from 'vue'
import LoginForm from '@/components/templates/login-form'

describe('Component › Templates › Login Form', () => {
  it('create', () => {
    const Constructor = Vue.extend(LoginForm)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-form')).toBe(true)
    expect(elm.classList.contains('login-form')).toBe(true)
  })

  it('header exists', () => {
    const Constructor = Vue.extend(LoginForm)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.querySelector('h2').textContent).toEqual('Login')
  })

  it('correct custom header', () => {
    const Constructor = Vue.extend(LoginForm)
    const vm = new Constructor({
      propsData: {
        formHeader: 'StayWoke Login'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('h2').textContent).toEqual('StayWoke Login')
  })

  it('username label exists', () => {
    const Constructor = Vue.extend(LoginForm)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.querySelector('label[for=username]').textContent).toEqual('Username or Email Address')
  })

  it('correct label for username loginMode', () => {
    const Constructor = Vue.extend(LoginForm)
    const vm = new Constructor({
      propsData: {
        loginMode: 'username'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('label[for=username]').textContent).toEqual('Username')
  })

  it('correct label for email loginMode', () => {
    const Constructor = Vue.extend(LoginForm)
    const vm = new Constructor({
      propsData: {
        loginMode: 'email'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('label[for=username]').textContent).toEqual('Email Address')
  })

  it('correct label for username loginMode', () => {
    const Constructor = Vue.extend(LoginForm)
    const vm = new Constructor({
      propsData: {
        loginMode: 'both'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('label[for=username]').textContent).toEqual('Username or Email Address')
  })

  it('username input exists', () => {
    const Constructor = Vue.extend(LoginForm)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.querySelector('input[name=username]').name).toEqual('username')
  })

  it('password label exists', () => {
    const Constructor = Vue.extend(LoginForm)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.querySelector('label[for=password]').textContent).toEqual('Password')
  })

  it('password input exists', () => {
    const Constructor = Vue.extend(LoginForm)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.querySelector('input[name=password]').name).toEqual('password')
  })

  it('submit button exists', () => {
    const Constructor = Vue.extend(LoginForm)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.querySelector('button.submit span').textContent).toEqual('Login')
  })

  it('forgot password link exists', () => {
    const Constructor = Vue.extend(LoginForm)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.querySelector('button.forgot-password span').textContent).toEqual('Forgot Password')
  })

  it('sign up link exists', () => {
    const Constructor = Vue.extend(LoginForm)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.querySelector('button.sign-up span').textContent).toEqual('Sign Up')
  })

  it('invalid form', () => {
    const wrapper = mount(LoginForm)
    const button = wrapper.find('button.submit')

    wrapper.setProps({
      loginMode: 'username'
    })

    wrapper.setData({
      loginForm: {
        username: '',
        password: ''
      }
    })

    button.trigger('click')

    expect(wrapper.emitted('loginError')).toBeTruthy()
    expect(wrapper.emitted('showLoginError')).toBeTruthy()
    expect(wrapper.find('.username-wrapper').element.classList.contains('is-error')).toBe(true)
    expect(wrapper.find('.password-wrapper').element.classList.contains('is-error')).toBe(true)
  })

  it('valid form', () => {
    const wrapper = mount(LoginForm)
    const button = wrapper.find('button.submit')

    wrapper.setData({
      loginForm: {
        username: 'testuser',
        password: 'abc123'
      }
    })

    button.trigger('click')

    expect(wrapper.emitted('loginSuccess')).toBeTruthy()
    expect(wrapper.find('.username-wrapper').element.classList.contains('is-error')).toBe(false)
    expect(wrapper.find('.password-wrapper').element.classList.contains('is-error')).toBe(false)
  })

  it('invalid email', () => {
    const wrapper = mount(LoginForm)
    const button = wrapper.find('button.submit')

    wrapper.setProps({
      loginMode: 'email'
    })

    wrapper.setData({
      loginForm: {
        username: 'test@',
        password: 'abc123'
      }
    })

    button.trigger('click')

    expect(wrapper.emitted('loginError')).toBeTruthy()
    expect(wrapper.emitted('showLoginError')).toBeTruthy()
    expect(wrapper.find('.username-wrapper').element.classList.contains('is-error')).toBe(true)
  })

  it('invalid username - to short', () => {
    const wrapper = mount(LoginForm)
    const button = wrapper.find('button.submit')

    wrapper.setProps({
      loginMode: 'username'
    })

    wrapper.setData({
      loginForm: {
        username: 'test',
        password: 'abc123'
      }
    })

    button.trigger('click')

    expect(wrapper.emitted('loginError')).toBeTruthy()
    expect(wrapper.emitted('showLoginError')).toBeTruthy()
    expect(wrapper.find('.username-wrapper').element.classList.contains('is-error')).toBe(true)
  })

  it('invalid username - starts with _', () => {
    const wrapper = mount(LoginForm)
    const button = wrapper.find('button.submit')

    wrapper.setProps({
      loginMode: 'username'
    })

    wrapper.setData({
      loginForm: {
        username: '_testabc',
        password: 'abc123'
      }
    })

    button.trigger('click')

    expect(wrapper.emitted('loginError')).toBeTruthy()
    expect(wrapper.emitted('showLoginError')).toBeTruthy()
    expect(wrapper.find('.username-wrapper').element.classList.contains('is-error')).toBe(true)
  })

  it('invalid username - starts with number', () => {
    const wrapper = mount(LoginForm)
    const button = wrapper.find('button.submit')

    wrapper.setProps({
      loginMode: 'username'
    })

    wrapper.setData({
      loginForm: {
        username: '123abc',
        password: 'abc123'
      }
    })

    button.trigger('click')

    expect(wrapper.emitted('loginError')).toBeTruthy()
    expect(wrapper.emitted('showLoginError')).toBeTruthy()
    expect(wrapper.find('.username-wrapper').element.classList.contains('is-error')).toBe(true)
  })

  it('input changed', () => {
    const wrapper = mount(LoginForm)
    const input = wrapper.find('input[name=username]')

    input.trigger('input')

    expect(wrapper.emitted('inputChanged')).toBeTruthy()
  })

  it('error message closed', () => {
    const wrapper = mount(LoginForm)
    const button = wrapper.find('button.submit')

    button.trigger('click')

    const closeButton = wrapper.find('.el-alert__closebtn')

    closeButton.trigger('click')

    expect(wrapper.emitted('hideLoginError')).toBeTruthy()
  })

  it('forgot password clicked', () => {
    const wrapper = mount(LoginForm)
    const button = wrapper.find('button.forgot-password')

    button.trigger('click')

    expect(wrapper.emitted('forgotPassword')).toBeTruthy()
  })

  it('signup clicked', () => {
    const wrapper = mount(LoginForm)
    const button = wrapper.find('button.sign-up')

    button.trigger('click')

    expect(wrapper.emitted('signUp')).toBeTruthy()
  })
})
