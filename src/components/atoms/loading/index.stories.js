import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs } from '@storybook/addon-knobs/vue'

/* eslint-disable no-unused-vars */
import Component from '.'
import Button from '../../atoms/button'
import README from './README.md'

const stories = storiesOf('Atoms | Loading', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  return {
    template: `<el-button type="primary" @click="openFullScreen">Show Loading Screen</el-button>`,
    methods: {
      openFullScreen () {
        const loading = this.$loading()
        setTimeout(() => {
          loading.close()
        }, 3000)
      }
    }
  }
})

stories.add('› Default', () => {
  return {
    template: `<el-button type="primary" @click="openFullScreen">Show Loading Screen</el-button>`,
    methods: {
      openFullScreen () {
        const loading = this.$loading()
        setTimeout(() => {
          loading.close()
        }, 3000)
      }
    }
  }
})

stories.add('› Custom Loader', () => {
  return {
    template: `<el-button type="primary" @click="openFullScreen">Show Loading Screen</el-button>`,
    methods: {
      openFullScreen () {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.9)'
        })

        setTimeout(() => {
          loading.close()
        }, 3000)
      }
    }
  }
})
