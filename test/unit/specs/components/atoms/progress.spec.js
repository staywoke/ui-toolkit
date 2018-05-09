import Vue from 'vue'
import Progress from '@/components/atoms/progress'

describe('Component › Atom › Progress', () => {
  it('create', () => {
    const Constructor = Vue.extend(Progress)
    const vm = new Constructor({
      propsData: {
        percentage: 80
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-progress')).toBe(true)
  })
})
