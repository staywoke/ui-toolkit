import Vue from 'vue'
import Button from '@/components/atoms/button'

describe('Component › Atom › Button', () => {
  it('create', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        type: 'primary'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-button--primary')).toBe(true)
  })

  it('icon', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'el-icon-search'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('.el-icon-search')).not.toBeNull()
  })

  it('nativeType', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        nativeType: 'submit'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.getAttribute('type')).toEqual('submit');
  })

  it('loading', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        loading: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-loading')).toBe(true)
    expect(elm.querySelector('.el-icon-loading')).not.toBeNull()
  })

  it('disabled', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-disabled')).toBe(true)
  })

  it('size', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        size: 'medium'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-button--medium')).toBe(true)
  })

  it('plain', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        plain: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-plain')).toBe(true)
  })

  it('round', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        round: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-round')).toBe(true)
  })

  it('circle', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        circle: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('is-circle')).toBe(true)
  })

  it('click', () => {
    let clicked = false;

    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        circle: true
      },
      methods: {
        handleClick() {
          clicked = true
        }
      }
    }).$mount()

    let elm = vm.$el

    elm.click()

    expect(clicked).toBe(true)
  })
})
