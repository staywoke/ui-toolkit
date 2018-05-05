import Vue from 'vue'
import Aside from '@/components/organisms/aside'

describe('Component › Organism › Aside', () => {
  it('create', () => {
    const Constructor = Vue.extend(Aside)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-aside')).toBe(true)
  })
})
