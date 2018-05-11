import FontAwesomeIcon from '@/components/atoms/font-awesome-icon'
import { compileAndMount, mountFromProps } from '../../../util'

describe('Component › Atom › Font Awesome Icon', () => {
  it('create', () => {
    const vm = mountFromProps(FontAwesomeIcon, { icon: 'coffee' })
    const elm = vm.$el

    expect(elm.tagName).toBe('svg')
    expect(elm.classList.contains('svg-inline--fa')).toBe(true)
    expect(elm.classList.contains('fa-coffee')).toBe(true)
    expect(elm.classList.contains('fa-w-20')).toBe(true)
  })

  it('custom size', () => {
    const vm = mountFromProps(FontAwesomeIcon, { icon: 'coffee', size: '4x' })
    const elm = vm.$el

    expect(elm.classList.contains('fa-4x')).toBe(true)
  })

  it('style solid', () => {
    const vm = mountFromProps(FontAwesomeIcon, { icon: ['fas', 'coffee'] })
    const elm = vm.$el

    expect(elm.getAttribute('data-icon')).toEqual('coffee')
    expect(elm.getAttribute('data-prefix')).toEqual('fas')
  })

  it('style regular', () => {
    const vm = mountFromProps(FontAwesomeIcon, { icon: ['far', 'coffee'] })
    const elm = vm.$el

    expect(elm.getAttribute('data-icon')).toEqual('coffee')
    expect(elm.getAttribute('data-prefix')).toEqual('far')
  })

  it('style light', () => {
    const vm = mountFromProps(FontAwesomeIcon, { icon: ['fal', 'coffee'] })
    const elm = vm.$el

    expect(elm.getAttribute('data-icon')).toEqual('coffee')
    expect(elm.getAttribute('data-prefix')).toEqual('fal')
  })

  it('style brand', () => {
    const vm = mountFromProps(FontAwesomeIcon, { icon: ['fab', 'vuejs'] })
    const elm = vm.$el

    expect(elm.getAttribute('data-icon')).toEqual('vuejs')
    expect(elm.getAttribute('data-prefix')).toEqual('fab')
  })

  it('custom color', () => {
    const vm = compileAndMount(`<font-awesome-icon color="#6f4e37" icon="coffee" />`)
    expect(vm.$el.getAttribute('color')).toBe('#6f4e37')
  })
})
