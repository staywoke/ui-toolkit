import Vue from 'vue'
import Carousel from '@/components/molecules/carousel'

describe('Component › Molecule › Carousel', () => {
  it('create', () => {
    const Constructor = Vue.extend(Carousel)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-carousel')).toBe(true)
  })
})
