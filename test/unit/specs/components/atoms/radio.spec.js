import Vue from 'vue'
import Radio from '@/components/atoms/radio'

describe('Component › Atom › Radio', () => {
  it('create', () => {
    const Constructor = Vue.extend(Radio)
    const vm = new Constructor({
      propsData: {
        label: 'Option A'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('.el-radio__label').textContent).toEqual('Option A')
  })

  it('name', () => {
    const Constructor = Vue.extend(Radio)
    const vm = new Constructor({
      propsData: {
        label: 'Option A',
        name: 'my-option'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('input').name).toEqual('my-option')
  })

  it('border', () => {
    const Constructor = Vue.extend(Radio)
    const vm = new Constructor({
      propsData: {
        label: 'Option A',
        border: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-bordered')).toBe(true)
  })

  it('border & medium', () => {
    const Constructor = Vue.extend(Radio)
    const vm = new Constructor({
      propsData: {
        label: 'Option A',
        border: true,
        size: 'medium'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-bordered')).toBe(true)
    expect(elm.classList.contains('el-radio--medium')).toBe(true)
  })

  it('border & small', () => {
    const Constructor = Vue.extend(Radio)
    const vm = new Constructor({
      propsData: {
        label: 'Option A',
        border: true,
        size: 'small'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-bordered')).toBe(true)
    expect(elm.classList.contains('el-radio--small')).toBe(true)
  })

  it('border & mini', () => {
    const Constructor = Vue.extend(Radio)
    const vm = new Constructor({
      propsData: {
        label: 'Option A',
        border: true,
        size: 'mini'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-bordered')).toBe(true)
    expect(elm.classList.contains('el-radio--mini')).toBe(true)
  })

  it('disabled', () => {
    const Constructor = Vue.extend(Radio)
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
