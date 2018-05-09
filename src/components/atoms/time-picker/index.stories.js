import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Time Picker', module)

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
  const arrowControl = boolean('Arrow Control', false)

  let attributes = ''

  attributes = attributes.concat((size !== '') ? `size="${size}" ` : '')
    .concat((align !== '') ? `align="${align}" ` : '')
    .concat((readonly) ? 'readonly ' : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((!editable) ? ':editable="false" ' : '')
    .concat((!clearable) ? ':clearable="false" ' : '')
    .concat((isRange) ? 'is-range ' : '')
    .concat((arrowControl) ? 'arrow-control ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-time-picker ${attributes}
      v-model="input"
      :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
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
    template: '<el-time-picker v-model="input" />',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Time Range', () => {
  return {
    template: `<el-time-picker
      is-range
      v-model="input"
      range-separator="To"
      start-placeholder="Start time"
      end-placeholder="End time"
    />`,
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› 12 Hour Time', () => {
  return {
    template: `<el-time-picker
      v-model="input"
      :picker-options="{ format: 'hh:mm:ss A' }"
    />`,
    data () {
      return {
        input: null
      }
    }
  }
})
