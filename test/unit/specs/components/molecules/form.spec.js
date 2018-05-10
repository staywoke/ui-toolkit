import Vue from 'vue'
import Form from '@/components/molecules/form'

describe('Component › Molecule › Form', () => {
  it('create', () => {
    const Constructor = Vue.extend(Form)
    const vm = new Constructor().$mount()

    let elm = vm.$el

    expect(elm.classList.contains('el-form')).toBe(true)
  })
})
