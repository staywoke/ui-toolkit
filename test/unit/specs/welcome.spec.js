import Vue from 'vue'
import Welcome from '@/components/welcome'

describe('welcome.vue', () => {
  it('should render welcome screen', () => {
    const Constructor = Vue.extend(Welcome)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.welcome h1').textContent)
      .toEqual('UI Toolkit')
  })
})
