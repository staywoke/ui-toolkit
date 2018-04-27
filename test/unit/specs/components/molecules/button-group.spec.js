import Vue from 'vue'
import ButtonGroup from '@/components/molecules/button-group'

describe('Component › Molecules › Button Group', () => {
  it('create', () => {
    const Constructor = Vue.extend(ButtonGroup)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-button-group')).toBe(true)
  })
})
