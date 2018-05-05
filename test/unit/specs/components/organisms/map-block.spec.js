import Vue from 'vue'
import MapBlock from '@/components/organisms/map-block'

/* eslint-disable no-unused-vars */
import Button from '@/components/atoms/button'
import Col from '@/components/molecules/col'
import Container from '@/components/organisms/container'
import Row from '@/components/molecules/row'

describe('Component › Organism › Map Block', () => {
  it('create', () => {
    const Constructor = Vue.extend(MapBlock)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('sw-map-block')).toBe(true)
  })

  it('hide labels', () => {
    const Constructor = Vue.extend(MapBlock)
    const vm = new Constructor({
      propsData: {
        hideLabels: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('hide-labels')).toBe(true)
  })

  it('size responsive', () => {
    const Constructor = Vue.extend(MapBlock)
    const vm = new Constructor({
      propsData: {
        size: 'responsive'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('sw-map-block--responsive')).toBe(true)
  })

  it('size large', () => {
    const Constructor = Vue.extend(MapBlock)
    const vm = new Constructor({
      propsData: {
        size: 'large'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('sw-map-block--large')).toBe(true)
  })

  it('size medium', () => {
    const Constructor = Vue.extend(MapBlock)
    const vm = new Constructor({
      propsData: {
        size: 'medium'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('sw-map-block--medium')).toBe(true)
  })

  it('size small', () => {
    const Constructor = Vue.extend(MapBlock)
    const vm = new Constructor({
      propsData: {
        size: 'small'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('sw-map-block--small')).toBe(true)
  })

  it('size mini', () => {
    const Constructor = Vue.extend(MapBlock)
    const vm = new Constructor({
      propsData: {
        size: 'mini'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('sw-map-block--mini')).toBe(true)
  })

  it('custom class names', () => {
    const Constructor = Vue.extend(MapBlock)
    const vm = new Constructor({
      propsData: {
        classNames: {
          'TX': 'disabled',
          'NY': 'blue',
          'AL': 'red',
          'MO': 'orange',
          'OR': 'green'
        }
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('.map-state-tx').classList.contains('disabled')).toBe(true)
    expect(elm.querySelector('.map-state-ny').classList.contains('blue')).toBe(true)
    expect(elm.querySelector('.map-state-al').classList.contains('red')).toBe(true)
    expect(elm.querySelector('.map-state-mo').classList.contains('orange')).toBe(true)
    expect(elm.querySelector('.map-state-or').classList.contains('green')).toBe(true)
  })

  it('click', () => {
    const Constructor = Vue.extend(MapBlock)
    const vm = new Constructor().$mount()
    const stub = jest.fn()

    vm.$on('click', stub)

    let elm = vm.$el

    elm.querySelector('.map-state-or').click()

    expect(stub).toBeCalledWith('OR')
  })
})
