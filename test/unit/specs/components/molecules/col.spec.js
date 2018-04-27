import Vue from 'vue'
import Col from '@/components/molecules/col'

describe('Component › Molecules › Column', () => {
  it('create', () => {
    const Constructor = Vue.extend(Col)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-col')).toBe(true)
  })
})
