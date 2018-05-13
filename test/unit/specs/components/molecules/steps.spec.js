import Vue from 'vue'
import Steps from '@/components/molecules/steps'

describe('Component › Molecule › Steps', () => {
  it('create', () => {
    const Constructor = Vue.extend(Steps)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-steps')).toBe(true)
  })
})
