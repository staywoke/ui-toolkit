import Vue from 'vue'
import Rate from '@/components/atoms/rate'

describe('Component › Atom › Rate', () => {
  it('create', () => {
    const Constructor = Vue.extend(Rate)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-rate')).toBe(true)
  })
})
