import Vue from 'vue'
import Dialog from '@/components/atoms/dialog'

describe('Component › Atom › Dialog', () => {
  it('create', () => {
    const Constructor = Vue.extend(Dialog)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-dialog__wrapper')).toBe(true)
  })
})
