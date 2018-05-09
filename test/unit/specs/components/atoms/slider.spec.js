import Vue from 'vue'
import Slider from '@/components/atoms/slider'

describe('Component › Atom › Slider', () => {
  it('create', () => {
    const Constructor = Vue.extend(Slider)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-slider')).toBe(true)
  })
})
