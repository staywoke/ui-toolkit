import Vue from 'vue'
import Main from '@/components/organisms/main'

describe('Component › Organism › Main', () => {
  it('create', () => {
    const Constructor = Vue.extend(Main)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-main')).toBe(true)
  })
})
