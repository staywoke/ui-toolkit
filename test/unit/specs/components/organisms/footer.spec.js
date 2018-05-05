import Vue from 'vue'
import Footer from '@/components/organisms/footer'

describe('Component › Organism › Footer', () => {
  it('create', () => {
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-footer')).toBe(true)
  })
})
