import Vue from 'vue'
import Transfer from '@/components/molecules/transfer'

describe('Component › Molecule › Transfer', () => {
  it('create', () => {
    const Constructor = Vue.extend(Transfer)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-transfer')).toBe(true)
  })
})
