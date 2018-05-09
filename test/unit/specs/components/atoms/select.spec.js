import Vue from 'vue'
import Select from '@/components/atoms/select'

describe('Component › Atom › Select', () => {
  it('create', () => {
    const Constructor = Vue.extend(Select)
    const vm = new Constructor({
      propsData: {
        label: 'Option A',
        value: 'Option A'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-select')).toBe(true)
  })

  it('medium', () => {
    const Constructor = Vue.extend(Select)
    const vm = new Constructor({
      propsData: {
        size: 'medium',
        value: 'Option A'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-select--medium')).toBe(true)
  })

  it('small', () => {
    const Constructor = Vue.extend(Select)
    const vm = new Constructor({
      propsData: {
        size: 'small',
        value: 'Option A'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-select--small')).toBe(true)
  })

  it('mini', () => {
    const Constructor = Vue.extend(Select)
    const vm = new Constructor({
      propsData: {
        size: 'mini',
        value: 'Option A'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-select--mini')).toBe(true)
  })

  it('disabled', () => {
    const Constructor = Vue.extend(Select)
    const vm = new Constructor({
      propsData: {
        disabled: true,
        value: 'Option A'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('.el-input').classList.contains('is-disabled')).toBe(true)
  })
})
