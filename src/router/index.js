import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/welcome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      props: { message: 'TO GET STARTED <span style="font-size: 20px;">&rsaquo;</span> <span style="text-transform: lowercase; color: #444; padding: 0 2px; font-weight: 500; letter-spacing: 1px; font-size: 17px;"><span style="color: #4fc08d;">npm</span> run storybook</span>' }
    }
  ]
})
