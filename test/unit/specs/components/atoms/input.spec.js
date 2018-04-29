import Vue from 'vue'
import Input from '@/components/atoms/input'

describe('Component › Atom › Input', () => {
  it('create', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        label: 'Option A'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-input')).toBe(true)
  })

  it('medium', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        size: 'medium'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-input--medium')).toBe(true)
  })

  it('small', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        size: 'small'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-input--small')).toBe(true)
  })

  it('mini', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        size: 'mini'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-input--mini')).toBe(true)
  })

  it('disabled', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-disabled')).toBe(true)
  })
})
