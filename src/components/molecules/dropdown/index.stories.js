import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Molecules | Dropdown', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const sizes = select(
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

  const trigger = select(
    'Trigger',
    {
      '': '---',
      'hover': 'hover',
      'click': 'click'
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
      'bottom-end': 'bottom-end'
    },
    ''
  )

  const splitButton = boolean('Split Button', false)
  const hideOnClick = boolean('Hide On Click', true)

  const label = (splitButton) ? 'Dropdown List' : 'Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>'
  let attributes = ''

  attributes = attributes.concat((sizes !== '') ? `size="${sizes}" ` : '')
    .concat((placement !== '' && placement !== 'bottom-end') ? `placement="${placement}" ` : '')
    .concat((trigger === 'click') ? `trigger="${trigger}" ` : '')
    .concat((splitButton) ? 'split-button ' : '')
    .concat((!hideOnClick) ? ':hide-on-click="false" ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-dropdown ${attributes} @click="handleClick" @command="handleCommand" @visible-change="handleVisibleChange">
      <span class="el-dropdown-link">
        ${label}
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">Action 1</el-dropdown-item>
        <el-dropdown-item command="b">Action 2</el-dropdown-item>
        <el-dropdown-item command="c">Action 3</el-dropdown-item>
        <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
        <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>`,
    methods: {
      handleClick: action('Button Clicked'),
      handleCommand: action('Received Command'),
      handleVisibleChange: action('Visible Change')
    }
  }
})
