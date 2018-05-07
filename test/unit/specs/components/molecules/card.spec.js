import Vue from 'vue'
import Card from '@/components/molecules/card'

describe('Component › Molecule › Card', () => {
  it('create', () => {
    const Constructor = Vue.extend(Card)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-card')).toBe(true)
  })
})
