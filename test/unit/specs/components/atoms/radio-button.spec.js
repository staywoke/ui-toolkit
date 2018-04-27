import Vue from 'vue'
import RadioButton from '@/components/atoms/radio-button'

describe('Component › Atom › Radio Button', () => {
  it('create', () => {
    const Constructor = Vue.extend(RadioButton)
    const vm = new Constructor({
      propsData: {
        label: 'Option A'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('.el-radio-button__inner').textContent).toEqual('Option A')
  })

  it('name', () => {
    const Constructor = Vue.extend(RadioButton)
    const vm = new Constructor({
      propsData: {
        label: 'Option A',
        name: 'my-option'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('input').name).toEqual('my-option')
  })

  it('disabled', () => {
    const Constructor = Vue.extend(RadioButton)
    const vm = new Constructor({
      propsData: {
        label: 'Option A',
        disabled: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-disabled')).toBe(true)
  })
})
