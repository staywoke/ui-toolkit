import Vue from 'vue'
import Checkbox from '@/components/atoms/checkbox'

describe('Component › Atom › Checkbox', () => {
  it('create', () => {
    const Constructor = Vue.extend(Checkbox)
    const vm = new Constructor({
      propsData: {
        label: 'My Checkbox'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('.el-checkbox__label').textContent).toEqual('My Checkbox')
  })

  it('name', () => {
    const Constructor = Vue.extend(Checkbox)
    const vm = new Constructor({
      propsData: {
        label: 'My Checkbox',
        name: 'my-checkbox'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('input').name).toEqual('my-checkbox')
  })

  it('true-label', () => {
    const Constructor = Vue.extend(Checkbox)
    const vm = new Constructor({
      propsData: {
        label: 'My Checkbox',
        trueLabel: 'yes'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('input').getAttribute('true-value')).toEqual('yes')
  })

  it('false-label', () => {
    const Constructor = Vue.extend(Checkbox)
    const vm = new Constructor({
      propsData: {
        label: 'My Checkbox',
        falseLabel: 'no'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('input').getAttribute('false-value')).toEqual('no')
  })

  it('border', () => {
    const Constructor = Vue.extend(Checkbox)
    const vm = new Constructor({
      propsData: {
        label: 'My Checkbox',
        border: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-bordered')).toBe(true)
  })

  it('border & medium', () => {
    const Constructor = Vue.extend(Checkbox)
    const vm = new Constructor({
      propsData: {
        label: 'My Checkbox',
        border: true,
        size: 'medium'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-bordered')).toBe(true)
    expect(elm.classList.contains('el-checkbox--medium')).toBe(true)
  })

  it('border & small', () => {
    const Constructor = Vue.extend(Checkbox)
    const vm = new Constructor({
      propsData: {
        label: 'My Checkbox',
        border: true,
        size: 'small'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-bordered')).toBe(true)
    expect(elm.classList.contains('el-checkbox--small')).toBe(true)
  })

  it('border & mini', () => {
    const Constructor = Vue.extend(Checkbox)
    const vm = new Constructor({
      propsData: {
        label: 'My Checkbox',
        border: true,
        size: 'mini'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-bordered')).toBe(true)
    expect(elm.classList.contains('el-checkbox--mini')).toBe(true)
  })

  it('disabled', () => {
    const Constructor = Vue.extend(Checkbox)
    const vm = new Constructor({
      propsData: {
        label: 'My Checkbox',
        disabled: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-disabled')).toBe(true)
  })

  it('checked', () => {
    const Constructor = Vue.extend(Checkbox)
    const vm = new Constructor({
      propsData: {
        label: 'My Checkbox',
        checked: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-checked')).toBe(true)
  })

  it('indeterminate', () => {
    const Constructor = Vue.extend(Checkbox)
    const vm = new Constructor({
      propsData: {
        label: 'My Checkbox',
        indeterminate: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('.el-checkbox__input').classList.contains('is-indeterminate')).toBe(true)
  })
})
