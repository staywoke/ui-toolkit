import Vue from 'vue'
import Breadcrumb from '@/components/molecules/breadcrumb'

describe('Component › Molecules › Breadcrumb', () => {
  it('create', () => {
    const Constructor = Vue.extend(Breadcrumb)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-breadcrumb')).toBe(true)
  })
})
