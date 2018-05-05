import Vue from 'vue'
import Container from '@/components/organisms/container'

describe('Component › Organism › Container', () => {
  it('create', () => {
    const Constructor = Vue.extend(Container)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-container')).toBe(true)
  })
})
