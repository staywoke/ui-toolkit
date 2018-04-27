import Vue from 'vue'
import CheckboxButton from '@/components/atoms/checkbox-button'

describe('Component › Atom › Checkbox Button', () => {
  it('create', () => {
    const Constructor = Vue.extend(CheckboxButton)
    const vm = new Constructor({
      propsData: {
        label: 'My Checkbox'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('.el-checkbox-button__inner').textContent).toEqual('My Checkbox')
  })

  it('name', () => {
    const Constructor = Vue.extend(CheckboxButton)
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
    const Constructor = Vue.extend(CheckboxButton)
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
    const Constructor = Vue.extend(CheckboxButton)
    const vm = new Constructor({
      propsData: {
        label: 'My Checkbox',
        falseLabel: 'no'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('input').getAttribute('false-value')).toEqual('no')
  })

  it('disabled', () => {
    const Constructor = Vue.extend(CheckboxButton)
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
    const Constructor = Vue.extend(CheckboxButton)
    const vm = new Constructor({
      propsData: {
        label: 'My Checkbox',
        checked: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-checked')).toBe(true)
  })
})
