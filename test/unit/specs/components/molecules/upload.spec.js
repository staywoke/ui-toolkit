import Vue from 'vue'
import Upload from '@/components/molecules/upload'

describe('Component › Molecule › Upload', () => {
  it('create', () => {
    const Constructor = Vue.extend(Upload)
    const vm = new Constructor({
      propsData: {
        action: 'https://jsonplaceholder.typicode.com/posts/'
      }
    }).$mount()

    let elm = vm.$el

    expect(elm.querySelector('.el-upload').classList.contains('el-upload--text')).toBe(true)
  })
})
