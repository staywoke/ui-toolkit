import Vue from 'vue'
import TimeSelect from '@/components/atoms/time-select'

describe('Component › Atom › Time Select', () => {
  it('create', () => {
    const Constructor = Vue.extend(TimeSelect)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-date-editor')).toBe(true)
  })

  it('large', () => {
    const Constructor = Vue.extend(TimeSelect)
    const vm = new Constructor({
      propsData: {
        size: 'large'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-input--large')).toBe(true)
  })

  it('medium', () => {
    const Constructor = Vue.extend(TimeSelect)
    const vm = new Constructor({
      propsData: {
        size: 'medium'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-input--medium')).toBe(true)
  })

  it('small', () => {
    const Constructor = Vue.extend(TimeSelect)
    const vm = new Constructor({
      propsData: {
        size: 'small'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-input--small')).toBe(true)
  })

  it('mini', () => {
    const Constructor = Vue.extend(TimeSelect)
    const vm = new Constructor({
      propsData: {
        size: 'mini'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-input--mini')).toBe(true)
  })

  it('disabled', () => {
    const Constructor = Vue.extend(TimeSelect)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-disabled')).toBe(true)
  })
})
