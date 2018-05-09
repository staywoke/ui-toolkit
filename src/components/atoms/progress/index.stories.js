import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean, number, color } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Progress', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const type = select(
    'Type',
    {
      '': '---',
      'line': 'line',
      'circle': 'circle'
    },
    ''
  )

  const status = select(
    'Status',
    {
      '': '---',
      'success': 'success',
      'exception': 'exception'
    },
    ''
  )

  const percentage = number('Percentage', 50, { min: 0, max: 100 })
  const strokeWidth = number('Stroke Width', 6, { min: 1 })
  const width = number('Width', 126, { min: 1 })

  const barColor = color('Color', '')

  const textInside = boolean('Text Inside', false)
  const showText = boolean('Show Text', true)

  let attributes = ''

  attributes = attributes.concat((type === 'circle') ? `type="${type}" ` : '')
    .concat((status !== '') ? `status="${status}" ` : '')
    .concat((percentage) ? `:percentage="${percentage}" ` : '')
    .concat((strokeWidth !== 6) ? `:stroke-width="${strokeWidth}" ` : '')
    .concat((type === 'circle' && width !== 126) ? `:width="${width}" ` : '')
    .concat((type !== 'circle' && textInside) ? 'text-inside ' : '')
    .concat((!showText) ? ':show-text="false" ' : '')
    .concat((barColor !== '') ? `color="${barColor}"` : '')

  attributes = attributes.trim()

  return {
    template: `<el-progress ${attributes} />`
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-progress :percentage="80" />'
  }
})

stories.add('› Success', () => {
  return {
    template: '<el-progress :percentage="100" status="success" />'
  }
})

stories.add('› Exception', () => {
  return {
    template: '<el-progress :percentage="80" status="exception" />'
  }
})

stories.add('› Internal Text', () => {
  return {
    template: '<el-progress :text-inside="true" :stroke-width="18" :percentage="70" />'
  }
})

stories.add('› Hide Text', () => {
  return {
    template: '<el-progress :show-text="false" :percentage="70" />'
  }
})

stories.add('› Circular', () => {
  return {
    template: '<el-progress type="circle" :percentage="25" />'
  }
})

stories.add('› Circular Success', () => {
  return {
    template: '<el-progress type="circle" :percentage="100" status="success" />'
  }
})

stories.add('› Circular Exception', () => {
  return {
    template: '<el-progress type="circle" :percentage="80" status="exception" />'
  }
})

stories.add('› Circular Width', () => {
  return {
    template: '<el-progress type="circle" :percentage="80" :width="200" />'
  }
})

stories.add('› Circular Stroke', () => {
  return {
    template: '<el-progress type="circle" :show-text="false" :percentage="80" :stroke-width="3" :width="40" />'
  }
})
