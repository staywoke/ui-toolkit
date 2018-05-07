import Vue from 'vue'
import RadioGroup from '@/components/molecules/radio-group'

describe('Component › Molecule › Radio Group', () => {
  it('create', () => {
    const Constructor = Vue.extend(RadioGroup)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-radio-group')).toBe(true)
  })
})
