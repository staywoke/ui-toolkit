import Vue from 'vue'
import Header from '@/components/organisms/header'

describe('Component › Organism › Header', () => {
  it('create', () => {
    const Constructor = Vue.extend(Header)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-header')).toBe(true)
  })
})
