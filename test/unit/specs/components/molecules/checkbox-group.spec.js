import Vue from 'vue'
import CheckboxGroup from '@/components/molecules/checkbox-group'

describe('Component › Molecule › Checkbox Group', () => {
  it('create', () => {
    const Constructor = Vue.extend(CheckboxGroup)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-checkbox-group')).toBe(true)
  })
})
