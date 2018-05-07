import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean, text, number } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Popover', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const trigger = select(
    'Trigger',
    {
      '': '---',
      'click': 'click',
      'focus': 'focus',
      'hover': 'hover'
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

  const title = text('Title', 'Title')
  const content = text('Content', 'Here is a helpful message for you to read.')

  const width = number('Width', 150, { min: 150 })
  const offset = number('Offset', 0, { min: 0 })

  const disabled = boolean('Disabled', false)
  const visibleArrow = boolean('Visible Arrow', true)

  const label = (trigger) ? `${trigger} to activate` : 'click to activate'

  let attributes = ''

  attributes = attributes.concat((trigger !== '') ? `trigger="${trigger}" ` : '')
    .concat((placement !== '' && placement !== 'bottom') ? `placement="${placement}" ` : '')
    .concat((transition !== '' && transition !== 'el-fade-in-linear') ? `transition="${transition}" ` : '')
    .concat((title !== '') ? `title="${title}" ` : '')
    .concat((content !== '') ? `content="${content}" ` : '')
    .concat((width !== 150) ? `:width="${width}" ` : '')
    .concat((offset !== 0) ? `:offset="${offset}" ` : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((!visibleArrow) ? ':visible-arrow="false" ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-popover ${attributes} @show="handleShow" @hide="handleHide" @after-enter="handleAfterEnter" @after-leave="handleAfterLeave">
      <el-button slot="reference">${label}</el-button>
    </el-popover>`,
    methods: {
      handleShow: action('Show Popover'),
      handleHide: action('Hide Popover'),
      handleAfterEnter: action('After Enter'),
      handleAfterLeave: action('After Leave')
    }
  }
})

stories.add('› Default', () => {
  return {
    template: `<el-popover title="Title" content="Here is a helpful message for you to read.">
      <el-button slot="reference">click to activate</el-button>
    </el-popover>`
  }
})

stories.add('› Hover', () => {
  return {
    template: `<el-popover trigger="hover" title="Title" content="Here is a helpful message for you to read.">
      <el-button slot="reference">hover to activate</el-button>
    </el-popover>`
  }
})

stories.add('› Focus', () => {
  return {
    template: `<el-popover trigger="focus" title="Title" content="Here is a helpful message for you to read.">
      <el-button slot="reference">focus to activate</el-button>
    </el-popover>`
  }
})

stories.add('› Custom Placement', () => {
  return {
    template: `<el-popover placement="top" title="Title" content="Here is a helpful message for you to read.">
      <el-button slot="reference">click to activate</el-button>
    </el-popover>`
  }
})

stories.add('› Custom Transition', () => {
  return {
    template: `<el-popover transition="el-zoom-in-top" title="Title" content="Here is a helpful message for you to read.">
      <el-button slot="reference">click to activate</el-button>
    </el-popover>`
  }
})

stories.add('› Hide Arrow', () => {
  return {
    template: `<el-popover :visible-arrow="false" title="Title" content="Here is a helpful message for you to read.">
      <el-button slot="reference">click to activate</el-button>
    </el-popover>`
  }
})

stories.add('› Nested Operation', () => {
  return {
    template: `<el-popover placement="top" width="160" v-model="visible">
      <p>Are you sure to delete this?</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible = false">cancel</el-button>
        <el-button type="primary" size="mini" @click="visible = false">confirm</el-button>
      </div>
      <el-button slot="reference">Delete</el-button>
    </el-popover>`,
    data () {
      return {
        visible: false
      }
    }
  }
})
