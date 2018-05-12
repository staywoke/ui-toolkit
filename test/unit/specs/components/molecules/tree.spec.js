import Vue from 'vue'
import Tree from '@/components/molecules/tree'

describe('Component › Molecule › Tree', () => {
  it('create', () => {
    const Constructor = Vue.extend(Tree)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-tree')).toBe(true)
  })
})
