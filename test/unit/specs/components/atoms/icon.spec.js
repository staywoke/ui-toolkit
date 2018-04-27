import Vue from 'vue'
import Icon from '@/components/atoms/icon'

describe('Component › Atom › Icon', () => {
  it('create', () => {
    const Constructor = Vue.extend(Icon)
    const vm = new Constructor({
      propsData: {
        name: 'search'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-icon-search')).toBe(true)
  })
})
