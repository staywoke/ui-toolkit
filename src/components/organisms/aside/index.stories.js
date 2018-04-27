import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Organisms | Aside', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const width = text('Width', '300px')

  let attributes = ''

  attributes = attributes.concat((width !== '300px') ? `width="${width}" ` : '')
  attributes = attributes.trim()

  return {
    template: `<el-aside ${attributes}>Aside</el-aside>`
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-aside>Aside</el-aside>'
  }
})

stories.add('› Set Width', () => {
  return {
    template: '<el-aside width="500px">Aside</el-aside>'
  }
})
