import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text, boolean, color, number } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Switch', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const activeText = text('Active Text', '')
  const inactiveText = text('Inactive Text', '')
  const activeValue = text('Active Value', '')
  const inactiveValue = text('Inactive Value', '')

  const activeColor = color('Active Color', '#409EFF')
  const inactiveColor = color('Inactive Color', '#C0CCDA')

  const width = number('Width', 40)

  const disabled = boolean('Disabled', false)

  let attributes = ''

  attributes = attributes.concat((width !== 40) ? `:width=${width}` : '')
    .concat((activeColor !== '#409EFF') ? `active-color="${activeColor}" ` : '')
    .concat((inactiveColor !== '#C0CCDA') ? `inactive-color="${inactiveColor}" ` : '')
    .concat((activeText !== '') ? `active-text="${activeText}" ` : '')
    .concat((inactiveText !== '') ? `inactive-text="${inactiveText}" ` : '')
    .concat((activeValue !== '') ? `active-value="${activeValue}" ` : '')
    .concat((inactiveValue !== '') ? `inactive-value="${inactiveValue}" ` : '')
    .concat((disabled) ? 'disabled ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-switch ${attributes} v-model="value" @change="actionLogger" />`,
    data () {
      return {
        value: true
      }
    },
    methods: {
      actionLogger: action('Switch Changed')
    }
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-switch v-model="value" />',
    data () {
      return {
        value: true
      }
    }
  }
})

stories.add('› Text Labels', () => {
  return {
    template: '<el-switch v-model="value" active-text="On" inactive-text="Off" />',
    data () {
      return {
        value: true
      }
    }
  }
})

stories.add('› Custom Colors', () => {
  return {
    template: '<el-switch v-model="value" active-color="#67C23A" inactive-color="#F56C6C" />',
    data () {
      return {
        value: true
      }
    }
  }
})

stories.add('› Custom Width', () => {
  return {
    template: '<el-switch v-model="value" :width=80 />',
    data () {
      return {
        value: true
      }
    }
  }
})

stories.add('› Disabled', () => {
  return {
    template: '<el-switch v-model="value" disabled />',
    data () {
      return {
        value: true
      }
    }
  }
})
