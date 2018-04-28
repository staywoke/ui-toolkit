import Vue from 'vue'
import Tag from '@/components/atoms/tag'

describe('Component › Atom › Tag', () => {
  it('create', () => {
    const Constructor = Vue.extend(Tag)
    const vm = new Constructor({
      propsData: {
        type: 'success'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-tag')).toBe(true)
    expect(elm.classList.contains('el-tag--success')).toBe(true)
  })
})
