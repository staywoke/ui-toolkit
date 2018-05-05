import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Molecules | Breadcrumb', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const separator = text('Separator', '/')
  const separatorClass = text('Separator Class', '')

  let attributes = ''

  attributes = attributes.concat((separator !== '' && separator !== '/') ? `separator="${separator}" ` : '')
    .concat((separatorClass !== '') ? `separator-class="${separatorClass}" ` : '')

  attributes = attributes.trim()

  return {
    template: `<el-breadcrumb ${attributes}>
      <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/section' }">section</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/section/subsection' }">subsection</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/section/subsection/page' }">page</el-breadcrumb-item>
    </el-breadcrumb>`,
    data () {
      return {
        separator: '/'
      }
    }
  }
})
