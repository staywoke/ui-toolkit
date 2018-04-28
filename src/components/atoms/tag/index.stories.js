import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean, color } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Tag', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const type = select(
    'Type',
    {
      '': '---',
      'success': 'success',
      'info': 'info',
      'warning': 'warning',
      'danger': 'danger'
    },
    ''
  )

  const size = select(
    'Size',
    {
      '': '---',
      'medium': 'medium',
      'small': 'small',
      'mini': 'mini'
    },
    ''
  )

  const colorPicker = color('Color', '')
  const closable = boolean('Closable', false)
  const transitions = boolean('Transitions', true)
  const hit = boolean('Hit', false)

  let attributes = ''

  attributes = attributes.concat((type !== '') ? `type="${type}" ` : '')
    .concat((size !== '') ? `size="${size}" ` : '')
    .concat((closable) ? 'closable ' : '')
    .concat((colorPicker) ? `color="${colorPicker}" ` : '')
    .concat((!transitions) ? 'disable-transitions ' : '')
    .concat((hit) ? 'hit ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-tag ${attributes} @close="actionLogger">Tag</el-tag>`,
    methods: {
      actionLogger: action('Tag Closed')
    }
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-tag>Tag</el-tag>'
  }
})

stories.add('› Closable', () => {
  return {
    template: `<el-tag closable @close="actionLogger">Tag</el-tag>`,
    methods: {
      actionLogger: action('Tag Closed')
    }
  }
})

stories.add('› Size Medium', () => {
  return {
    template: `<el-tag size="medium">Tag</el-tag>`

  }
})

stories.add('› Size Small', () => {
  return {
    template: `<el-tag size="small">Tag</el-tag>`

  }
})

stories.add('› Size Mini', () => {
  return {
    template: `<el-tag size="mini">Tag</el-tag>`
  }
})

stories.add('› Tag Set', () => {
  return {
    template: `<el-container>
      <el-tag :key="tag.name" v-for="tag in tags" :type="tag.type" closable @close="handleClose(tag.name)">{{ tag.name }}</el-tag>
    </el-container>`,
    data () {
      return {
        tags: [
          { name: 'Tag 1', type: '' },
          { name: 'Tag 2', type: 'success' },
          { name: 'Tag 3', type: 'info' },
          { name: 'Tag 4', type: 'warning' },
          { name: 'Tag 5', type: 'danger' }
        ]
      }
    },
    methods: {
      handleClose (name) {
        const index = this.tags.findIndex(tag => tag.name === name)
        this.tags.splice(index, 1)
      }
    }
  }
})
