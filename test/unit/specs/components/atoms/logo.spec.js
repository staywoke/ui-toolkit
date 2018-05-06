import Vue from 'vue'
import Logo from '@/components/atoms/logo'

describe('Component › Atom › Logo', () => {
  it('create', () => {
    const Constructor = Vue.extend(Logo)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('sw-logo')).toBe(true)
  })

  it('custom size', () => {
    const Constructor = Vue.extend(Logo)
    const vm = new Constructor({
      propsData: {
        size: 300
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.getAttribute('width')).toEqual('300')
    expect(elm.getAttribute('height')).toEqual('300')
    expect(elm.classList.contains('sw-logo--size-300')).toBe(true)
  })

  it('custom colors', () => {
    const Constructor = Vue.extend(Logo)
    const vm = new Constructor({
      propsData: {
        color: '#f2e325',
        background: '#000000'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.style.background).toEqual('rgb(0, 0, 0)')
    expect(elm.querySelector('path').getAttribute('fill')).toEqual('#f2e325')
  })

  it('custom padding', () => {
    const Constructor = Vue.extend(Logo)
    const vm = new Constructor({
      propsData: {
        padding: 20
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.style.padding).toEqual('20px')
  })
})
