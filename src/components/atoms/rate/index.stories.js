import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, boolean, color, number } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Rate', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const max = number('Max', 5, { min: 1 })
  const lowThreshold = number('Low Threshold', 2, { min: 1 })
  const highThreshold = number('High Threshold', 4, { min: 1 })

  const voidColor = color('voidColor', '#C6D1DE')
  const disabledVoidColor = color('Disabled Void Color', '#EFF2F7')
  const textColor = color('Text Color', '#1F2D3D')
  const lowColor = color('Low Color', '#F7BA2A')
  const medColor = color('Medium Color', '#F7BA2A')
  const highColor = color('High Color', '#F7BA2A')

  const disabled = boolean('Disabled', false)
  const allowHalf = boolean('Allow Half', false)
  const showText = boolean('Show Text', false)
  const showScore = boolean('Show Score', false)

  let attributes = ''

  attributes = attributes.concat((max !== 5) ? `:max="${max}" ` : '')
    .concat((lowThreshold !== 2) ? `:low-threshold="${lowThreshold}" ` : '')
    .concat((highThreshold !== 4) ? `:high-threshold="${highThreshold}" ` : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((allowHalf) ? 'allow-half ' : '')
    .concat((showText) ? 'show-text ' : '')
    .concat((showText) ? `:texts="['Poor', 'Below Average', 'Average', 'Above Average', 'Excellent']" ` : '')
    .concat((showScore) ? 'show-score ' : '')
    .concat((voidColor !== '#C6D1DE') ? `void-color="${voidColor}"` : '')
    .concat((disabledVoidColor !== '#EFF2F7') ? `void-color="${disabledVoidColor}"` : '')
    .concat((textColor !== '#1F2D3D') ? `text-color="${textColor}"` : '')
    .concat((lowColor !== '#F7BA2A' || medColor !== '#F7BA2A' || highColor !== '#F7BA2A') ? `:colors="['${lowColor}', '${medColor}', '${highColor}']"` : '')

  attributes = attributes.trim()

  return {
    template: `<el-rate v-model="value" ${attributes} @change="actionLogger" />`,
    data () {
      return {
        value: 0
      }
    },
    methods: {
      actionLogger: action('Rate Changed')
    }
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-rate v-model="value" />',
    data () {
      return {
        value: 0
      }
    }
  }
})

stories.add('› Color Levels', () => {
  return {
    template: `<el-rate
      v-model="value"
      :colors="['#F56C6C', '#E6A23C', '#67C23A']"
      :high-threshold="5"
    />`,
    data () {
      return {
        value: 0
      }
    }
  }
})

stories.add('› With Text', () => {
  return {
    template: `<el-rate
      v-model="value"
      :texts="['Poor', 'Below Average', 'Average', 'Above Average', 'Excellent']"
      show-text
    />`,
    data () {
      return {
        value: 0
      }
    }
  }
})

stories.add('› Custom Icons', () => {
  return {
    template: `<el-rate
      v-model="value"
      void-icon-class="icon-rate-face-off"
      :icon-classes="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
      :colors="['#F56C6C', '#E6A23C', '#67C23A']"
      :low-threshold="1"
      :high-threshold="5"
    />`,
    data () {
      return {
        value: 0
      }
    }
  }
})

stories.add('› Read-only', () => {
  return {
    template: '<el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value} points" />',
    data () {
      return {
        value: 3.7
      }
    }
  }
})
