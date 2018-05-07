import Vue from 'vue'
import Menu from '@/components/molecules/menu'

describe('Component › Molecules › Menu', () => {
  it('create', () => {
    const Constructor = Vue.extend(Menu)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-menu')).toBe(true)
  })
})
