import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Organisms | Footer', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const height = text('Height', '60px')

  let attributes = ''

  attributes = attributes
    .concat((height !== '60px') ? `height="${height}" ` : '')
    .concat((height !== '60px') ? `style="line-height: ${height}" ` : '')

  attributes = attributes.trim()

  return {
    template: `<el-footer ${attributes}>Footer</el-footer>`
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-footer>Footer</el-footer>'
  }
})

stories.add('› Set Height', () => {
  return {
    template: '<el-footer height="80px" style="line-height: 80px">Footer</el-footer>'
  }
})
