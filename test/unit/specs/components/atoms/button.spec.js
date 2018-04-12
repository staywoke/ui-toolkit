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

    let buttonElm = vm.$el

    expect(buttonElm.classList.contains('el-button--primary')).toBe(true)
  })

  it('icon', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'el-icon-search'
      }
    }).$mount()

    let buttonElm = vm.$el

    expect(buttonElm.querySelector('.el-icon-search')).not.toBeNull()
  })

  it('nativeType', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        nativeType: 'submit'
      }
    }).$mount()

    let buttonElm = vm.$el

    expect(buttonElm.getAttribute('type')).toEqual('submit');
  })

  it('loading', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        loading: true
      }
    }).$mount()

    let buttonElm = vm.$el

    expect(buttonElm.classList.contains('is-loading')).toBe(true)
    expect(buttonElm.querySelector('.el-icon-loading')).not.toBeNull()
  })

  it('disabled', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()

    let buttonElm = vm.$el

    expect(buttonElm.classList.contains('is-disabled')).toBe(true)
  })

  it('size', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        size: 'medium'
      }
    }).$mount()

    let buttonElm = vm.$el

    expect(buttonElm.classList.contains('el-button--medium')).toBe(true)
  })

  it('plain', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        plain: true
      }
    }).$mount()

    let buttonElm = vm.$el

    expect(buttonElm.classList.contains('is-plain')).toBe(true)
  })

  it('round', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        round: true
      }
    }).$mount()

    let buttonElm = vm.$el

    expect(buttonElm.classList.contains('is-round')).toBe(true)
  })

  it('circle', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        circle: true
      }
    }).$mount()

    let buttonElm = vm.$el

    expect(buttonElm.classList.contains('is-circle')).toBe(true)
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

    let buttonElm = vm.$el

    buttonElm.click()

    expect(clicked).toBe(true)
  })
})
