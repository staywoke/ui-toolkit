import Vue from 'vue'
import Alert from '@/components/atoms/alert'

describe('Component › Atom › Alert', () => {
  it('create', () => {
    const Constructor = Vue.extend(Alert)
    const vm = new Constructor({
      propsData: {
        title: 'Test Title',
        showIcon: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('.el-alert__title').textContent).toEqual('Test Title')
    expect(elm.classList.contains('el-alert--info')).toBe(true)
  })

  it('type', () => {
    const Constructor = Vue.extend(Alert)
    const vm = new Constructor({
      propsData: {
        title: 'Test Title',
        type: 'success',
        showIcon: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-alert--success')).toBe(true)
  })

  it('description', () => {
    const Constructor = Vue.extend(Alert)
    const vm = new Constructor({
      propsData: {
        title: 'Test Title',
        description: 'This is a Test Description',
        showIcon: true
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('.el-alert__description').textContent).toEqual('This is a Test Description')
  })

  it('close', () => {
    let closed = false

    const Constructor = Vue.extend(Alert)
    const vm = new Constructor({
      propsData: {
        title: 'Test Title'
      },
      methods: {
        close () {
          closed = true
        }
      }
    }).$mount()

    let elm = vm.$el

    elm.querySelector('.el-alert__closebtn').click()

    expect(closed).toBe(true)
  })
})
