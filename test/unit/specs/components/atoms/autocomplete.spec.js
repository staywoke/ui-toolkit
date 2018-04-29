import Vue from 'vue'
import AutoComplete from '@/components/atoms/autocomplete'

describe('Component › Atom › Autocomplete', () => {
  it('create', () => {
    const Constructor = Vue.extend(AutoComplete)
    const vm = new Constructor({
      propsData: {}
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-autocomplete')).toBe(true)
  })
})
