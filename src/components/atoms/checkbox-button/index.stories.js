import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, boolean, text } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Checkbox Button', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const label = text('Label', 'My Checkbox')
  const trueLabel = text('True Label', '')
  const falseLabel = text('False Label', '')
  const disabled = boolean('Disabled', false)
  const name = text('Name', 'my-checkbox')

  let attributes = ''

  attributes = attributes.concat((label !== '') ? `label="${label}" ` : '')
    .concat((trueLabel !== '') ? `true-label="${trueLabel}" ` : '')
    .concat((falseLabel !== '') ? `false-label="${falseLabel}" ` : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((name !== '') ? `name="${name}" ` : '')

  attributes = attributes.trim()

  return {
    template: `<el-checkbox-button ${attributes} v-model="checked" @change="actionLogger"></el-checkbox-button>`,
    data () {
      return {
        checked: false
      }
    },
    methods: {
      actionLogger: action('Checkbox Clicked')
    }
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-checkbox-button v-model="radio" label="myvalue">Option A</el-checkbox-button>',
    data () {
      return {
        radio: null
      }
    }
  }
})

stories.add('› Disabled', () => {
  return {
    template: '<el-checkbox-button v-model="radio" label="myvalue" disabled>Option A</el-checkbox-button>',
    data () {
      return {
        radio: null
      }
    }
  }
})
