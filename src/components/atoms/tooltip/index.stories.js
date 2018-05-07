import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Tooltip', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const theme = select(
    'Theme',
    {
      '': '---',
      'dark': 'dark',
      'light': 'light'
    },
    ''
  )

  const placement = select(
    'Placement',
    {
      '': '---',
      'top': 'top',
      'top-start': 'top-start',
      'top-end': 'top-end',
      'bottom': 'bottom',
      'bottom-start': 'bottom-start',
      'bottom-end': 'bottom-end',
      'left': 'left',
      'left-start': 'left-start',
      'left-end': 'left-end',
      'right': 'right',
      'right-start': 'right-start',
      'right-end': 'right-end'
    },
    ''
  )

  const transition = select(
    'Transition',
    {
      '': '---',
      'el-fade-in-linear': 'el-fade-in-linear',
      'el-fade-in': 'el-fade-in',
      'el-zoom-in-center': 'el-zoom-in-center',
      'el-zoom-in-top': 'el-zoom-in-top',
      'el-zoom-in-bottom': 'el-zoom-in-bottom',
      'el-zoom-in-left': 'el-zoom-in-left'
    },
    ''
  )

  const content = text('Content', 'Here is a helpful tip.')

  const offset = number('Offset', 0, { min: 0 })

  const disabled = boolean('Disabled', false)
  const visibleArrow = boolean('Visible Arrow', true)

  let attributes = ''

  attributes = attributes.concat((theme === 'light') ? `effect="${theme}" ` : '')
    .concat((placement !== '' && placement !== 'bottom') ? `placement="${placement}" ` : '')
    .concat((transition !== '' && transition !== 'el-fade-in-linear') ? `transition="${transition}" ` : '')
    .concat((content !== '') ? `content="${content}" ` : '')
    .concat((offset !== 0) ? `:offset="${offset}" ` : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((!visibleArrow) ? ':visible-arrow="false" ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-tooltip ${attributes}>
      <el-button>hover to activate</el-button>
    </el-tooltip>`
  }
})

stories.add('› Default', () => {
  return {
    template: `<el-tooltip content="Here is a helpful tip.">
      <el-button>hover to activate</el-button>
    </el-tooltip>`
  }
})

stories.add('› Custom Placement', () => {
  return {
    template: `<el-tooltip placement="top" content="Here is a helpful tip.">
      <el-button>hover to activate</el-button>
    </el-tooltip>`
  }
})

stories.add('› Custom Transition', () => {
  return {
    template: `<el-tooltip transition="el-zoom-in-top" content="Here is a helpful tip.">
      <el-button>hover to activate</el-button>
    </el-tooltip>`
  }
})

stories.add('› Hide Arrow', () => {
  return {
    template: `<el-tooltip :visible-arrow="false" content="Here is a helpful tip.">
      <el-button>hover to activate</el-button>
    </el-tooltip>`
  }
})
