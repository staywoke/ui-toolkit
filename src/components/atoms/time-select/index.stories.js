import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Time Select', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const size = select(
    'Size',
    {
      '': '---',
      'large': 'large',
      'medium': 'medium',
      'small': 'small',
      'mini': 'mini'
    },
    ''
  )

  const align = select(
    'Align',
    {
      '': '---',
      'left': 'left',
      'center': 'center',
      'right': 'right'
    },
    ''
  )

  const readonly = boolean('Readonly', false)
  const disabled = boolean('Disabled', false)
  const editable = boolean('Editable', true)
  const clearable = boolean('Clearable', true)
  const isRange = boolean('Is range', false)

  let attributes = ''

  attributes = attributes.concat((size !== '') ? `size="${size}" ` : '')
    .concat((align !== '') ? `align="${align}" ` : '')
    .concat((readonly) ? 'readonly ' : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((!editable) ? ':editable="false" ' : '')
    .concat((!clearable) ? ':clearable="false" ' : '')
    .concat((isRange) ? 'is-range ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-time-select ${attributes}
      v-model="input"
      :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }"
      placeholder="Select time"
      @blur="blurHandler"
      @focus="focusHandler"
      @change="changeHandler"
    />`,
    data () {
      return {
        input: null
      }
    },
    methods: {
      blurHandler: action('Time Blurred'),
      focusHandler: action('Time Focused'),
      changeHandler: action('Time Changed')
    }
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-time-select v-model="input" />',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Fixed Time Range', () => {
  return {
    template: `<el-time-select
      placeholder="Start time"
      v-model="startTime"
      :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }"
    />`,
    data () {
      return {
        startTime: null
      }
    }
  }
})
