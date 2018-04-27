import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs/vue'

import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Checkbox', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const sizes = select(
    'Size',
    {
      '': '---',
      'medium': 'medium',
      'small': 'small',
      'mini': 'mini'
    },
    ''
  )

  const border = boolean('Border', false)
  const disabled = boolean('Disabled', false)
  const indeterminate = boolean('Indeterminate', false)
  const label = text('Label', 'My Checkbox')
  const trueLabel = text('True Label', '')
  const falseLabel = text('False Label', '')
  const name = text('Name', 'my-checkbox')

  let attributes = ''

  attributes = attributes.concat((border && sizes !== '') ? `size="${sizes}" ` : '')
    .concat((name !== '') ? `name="${name}" ` : '')
    .concat((label !== '') ? `label="${label}" ` : '')
    .concat((trueLabel !== '') ? `true-label="${trueLabel}" ` : '')
    .concat((falseLabel !== '') ? `false-label="${falseLabel}" ` : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((indeterminate) ? 'indeterminate ' : '')
    .concat((border) ? 'border ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-checkbox ${attributes} v-model="checked" @change="actionLogger"></el-checkbox>`,
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
    template: '<el-checkbox v-model="radio" label="myvalue">Option A</el-checkbox>',
    data () {
      return {
        radio: null
      }
    }
  }
})

stories.add('› Disabled', () => {
  return {
    template: '<el-checkbox v-model="radio" label="myvalue" disabled>Option A</el-checkbox>',
    data () {
      return {
        radio: null
      }
    }
  }
})

stories.add('› With Border', () => {
  return {
    template: '<el-checkbox v-model="radio" label="myvalue" border>Option A</el-checkbox>',
    data () {
      return {
        radio: null
      }
    }
  }
})

stories.add('› Size Medium', () => {
  return {
    template: '<el-checkbox v-model="radio" label="myvalue" size="medium" border>Option A</el-checkbox>',
    data () {
      return {
        radio: null
      }
    }
  }
})

stories.add('› Size Small', () => {
  return {
    template: '<el-checkbox v-model="radio" label="myvalue" size="small" border>Option A</el-checkbox>',
    data () {
      return {
        radio: null
      }
    }
  }
})

stories.add('› Size Mini', () => {
  return {
    template: '<el-checkbox v-model="radio" label="myvalue" size="mini" border>Option A</el-checkbox>',
    data () {
      return {
        radio: null
      }
    }
  }
})
