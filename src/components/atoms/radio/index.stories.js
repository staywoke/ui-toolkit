import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, boolean, select } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Radio', module)

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

  const value = select(
    'Value',
    {
      '': '---',
      'myvalue': 'myvalue'
    },
    ''
  )

  const border = boolean('Border', false)
  const disabled = boolean('Disabled', false)

  let attributes = ''

  attributes = attributes.concat((border && sizes !== '') ? `size="${sizes}" ` : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((border) ? 'border ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-radio ${attributes} v-model="radio" label="myvalue" @change="actionLogger">Option A</el-radio>`,
    data () {
      return {
        radio: value
      }
    },
    methods: {
      actionLogger () {
        action('Radio Clicked')
      }
    }
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-radio v-model="radio" label="myvalue">Option A</el-radio>',
    data () {
      return {
        radio: null
      }
    }
  }
})

stories.add('› Disabled', () => {
  return {
    template: '<el-radio v-model="radio" label="myvalue" disabled>Option A</el-radio>',
    data () {
      return {
        radio: null
      }
    }
  }
})

stories.add('› With Border', () => {
  return {
    template: '<el-radio v-model="radio" label="myvalue" border>Option A</el-radio>',
    data () {
      return {
        radio: null
      }
    }
  }
})

stories.add('› Size Medium', () => {
  return {
    template: '<el-radio v-model="radio" label="myvalue" size="medium" border>Option A</el-radio>',
    data () {
      return {
        radio: null
      }
    }
  }
})

stories.add('› Size Small', () => {
  return {
    template: '<el-radio v-model="radio" label="myvalue" size="small" border>Option A</el-radio>',
    data () {
      return {
        radio: null
      }
    }
  }
})

stories.add('› Size Mini', () => {
  return {
    template: '<el-radio v-model="radio" label="myvalue" size="mini" border>Option A</el-radio>',
    data () {
      return {
        radio: null
      }
    }
  }
})
