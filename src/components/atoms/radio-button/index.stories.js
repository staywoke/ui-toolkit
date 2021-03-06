import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, boolean } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Radio Button', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const disabled = boolean('Disabled', false)

  let attributes = ''

  attributes = attributes.concat((disabled) ? 'disabled ' : '')
  attributes = attributes.trim()

  return {
    template: `<el-radio-button ${attributes} label="myvalue">Option A</el-radio-button>`
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-radio-button label="myvalue">Option A</el-radio-button>'
  }
})

stories.add('› Disabled', () => {
  return {
    template: '<el-radio-button label="myvalue" disabled>Option A</el-radio-button>'
  }
})
