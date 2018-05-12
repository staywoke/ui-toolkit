import Vue from 'vue'
import Tabs from '@/components/molecules/tabs'

describe('Component › Molecule › Tabs', () => {
  it('create', () => {
    const Constructor = Vue.extend(Tabs)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-tabs')).toBe(true)
  })
})
