import Vue from 'vue'
import Badge from '@/components/atoms/badge'

describe('Component › Atom › Badge', () => {
  it('create', () => {
    const Constructor = Vue.extend(Badge)
    const vm = new Constructor({
      propsData: {
        value: '12'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-badge')).toBe(true)
    expect(elm.querySelector('.el-badge__content').textContent).toEqual('12')
  })
})
