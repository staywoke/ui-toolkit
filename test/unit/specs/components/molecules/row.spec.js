import Vue from 'vue'
import Row from '@/components/molecules/row'

describe('Component › Molecules › Row', () => {
  it('create', () => {
    const Constructor = Vue.extend(Row)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-row')).toBe(true)
  })
})
