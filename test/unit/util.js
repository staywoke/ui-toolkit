import Vue from 'vue'
import VueDist from 'vue/dist/vue'

/**
 * Mount Component from Props
 * @param  {Object} Component      Vue Component
 * @param  {Object} [propsData={}] Optional Data Props to pass to Compiler
 * @return {Object}                Mounted Vue Component
 */
export function mountFromProps (Component, propsData = {}) {
  const vm = new Vue({
    render: (h) => h(Component, { props: propsData })
  })

  vm.$mount()

  return vm
}

/**
 * Compile and Mount
 * @param  {String} template    Vue Template to Combile
 * @param  {Object} [params={}] Optional Params to pass to Compiler
 * @return {Object}             Mounted Vue Component
 */
export function compileAndMount (template, params = {}) {
  const res = VueDist.compile(template)
  const vm = new Vue({
    ...params,
    render: res.render,
    staticRenderFn: res.staticRenderFn
  })

  vm.$mount()

  return vm
}
