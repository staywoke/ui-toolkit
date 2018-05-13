import Vue from 'vue'
import Pagination from '@/components/molecules/pagination'

describe('Component › Molecule › Pagination', () => {
  it('create', () => {
    const Constructor = Vue.extend(Pagination)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-pagination')).toBe(true)
  })
})
