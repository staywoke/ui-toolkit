import Vue from 'vue'
import Switch from '@/components/atoms/switch'

describe('Component › Atom › Switch', () => {
  it('create', () => {
    const Constructor = Vue.extend(Switch)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-switch')).toBe(true)
  })
})
