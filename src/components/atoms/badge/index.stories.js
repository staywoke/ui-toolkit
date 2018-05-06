import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, boolean, number } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Badge', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const value = number('Value', 12, { min: 0 })
  const max = number('Max', 0, { min: 0 })
  const isDot = boolean('is-dot', false)
  const hidden = boolean('hidden', false)

  let attributes = ''

  attributes = attributes.concat((value !== '') ? `:value="${value}" ` : '')
    .concat((max !== 0) ? `:max="${max}" ` : '')
    .concat((isDot) ? 'is-dot ' : '')
    .concat((hidden) ? 'hidden ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-badge ${attributes} class="badge-item">Some Text</el-badge>`
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-badge value="12" class="badge-item">Some Text</el-badge>'
  }
})

stories.add('› Button', () => {
  return {
    template: `<el-badge value="12" class="badge-item">
      <el-button size="small">comments</el-button>
    </el-badge>`
  }
})

stories.add('› Maxed Out', () => {
  return {
    template: `<el-badge :value="125" :max="99" class="badge-item">
      <el-button size="small">comments</el-button>
    </el-badge>`
  }
})

stories.add('› Text Badge', () => {
  return {
    template: `<el-badge value="new" class="badge-item">
      <el-button size="small">comments</el-button>
    </el-badge>`
  }
})

stories.add('› Dot', () => {
  return {
    template: `<el-badge is-dot>
      <el-button size="small">comments</el-button>
    </el-badge>`
  }
})
