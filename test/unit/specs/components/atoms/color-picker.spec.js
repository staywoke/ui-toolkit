import Vue from 'vue'
import ColorPicker from '@/components/atoms/color-picker'

describe('Component › Atom › Color Picker', () => {
  it('create', () => {
    const Constructor = Vue.extend(ColorPicker)
    const vm = new Constructor({
      propsData: {}
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-color-picker')).toBe(true)
  })
})
