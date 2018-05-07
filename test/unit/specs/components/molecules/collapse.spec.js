import Vue from 'vue'
import Collapse from '@/components/molecules/collapse'

describe('Component › Molecule › Collapse', () => {
  it('create', () => {
    const Constructor = Vue.extend(Collapse)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-collapse')).toBe(true)
  })
})
