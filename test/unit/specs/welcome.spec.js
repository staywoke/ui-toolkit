import Vue from 'vue'
import Welcome from '@/components/welcome'

describe('Welcome', () => {
  it('create', () => {
    const Constructor = Vue.extend(Welcome)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.welcome h1').textContent)
      .toEqual('UI Toolkit')
  })
})
