import Vue from 'vue'
import Table from '@/components/molecules/table'

describe('Component › Molecule › Table', () => {
  it('create', () => {
    const Constructor = Vue.extend(Table)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-table')).toBe(true)
  })
})
