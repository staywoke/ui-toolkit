import Vue from 'vue'
import InputNumber from '@/components/atoms/input-number'

describe('Component › Atom › Input Number', () => {
  it('create', () => {
    const Constructor = Vue.extend(InputNumber)
    const vm = new Constructor({
      propsData: {}
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-input-number')).toBe(true)
  })

  it('medium', () => {
    const Constructor = Vue.extend(InputNumber)
    const vm = new Constructor({
      propsData: {
        size: 'medium'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-input-number--medium')).toBe(true)
  })

  it('small', () => {
    const Constructor = Vue.extend(InputNumber)
    const vm = new Constructor({
      propsData: {
        size: 'small'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-input-number--small')).toBe(true)
  })

  it('mini', () => {
    const Constructor = Vue.extend(InputNumber)
    const vm = new Constructor({
      propsData: {
        size: 'mini'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-input-number--mini')).toBe(true)
  })

  it('disabled', () => {
    const Constructor = Vue.extend(InputNumber)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-disabled')).toBe(true)
  })
})
