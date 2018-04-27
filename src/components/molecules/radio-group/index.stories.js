import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text, boolean, select, color } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Molecules | Radio Group', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const name = text('Name', 'my-option')
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
      'a': 'A',
      'b': 'B',
      'c': 'C'
    },
    'a'
  )

  const textColor = color('Text Color', '#ffffff')
  const fillColor = color('Fill Color', '#409EFF')
  const disabled = boolean('Disabled', false)

  let attributes = ''

  attributes = attributes.concat((name !== '') ? `name="${name}" ` : '')
    .concat((sizes !== '') ? `size="${sizes}" ` : '')
    .concat((textColor !== '#ffffff') ? `text-color="${textColor}" ` : '')
    .concat((fillColor !== '#409EFF') ? `fill="${fillColor}" ` : '')
    .concat((disabled) ? 'disabled ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-radio-group ${attributes} v-model="radio" @change="actionLogger">
      <el-radio-button label="a">Option A</el-radio-button>
      <el-radio-button label="b">Option B</el-radio-button>
      <el-radio-button label="c">Option C</el-radio-button>
    </el-radio-group>`,
    data () {
      return {
        radio: value
      }
    },
    methods: {
      actionLogger: action('Radio Clicked')
    }
  }
})

stories.add('› Default', () => {
  return {
    template: `<el-radio-group v-model="radio">
      <el-radio-button label="a">Option A</el-radio-button>
      <el-radio-button label="b">Option B</el-radio-button>
      <el-radio-button label="c">Option C</el-radio-button>
    </el-radio-group>`,
    data () {
      return {
        radio: 'a'
      }
    }
  }
})

stories.add('› Disabled', () => {
  return {
    template: `<el-radio-group v-model="radio" disabled>
      <el-radio-button label="a">Option A</el-radio-button>
      <el-radio-button label="b">Option B</el-radio-button>
      <el-radio-button label="c">Option C</el-radio-button>
    </el-radio-group>`,
    data () {
      return {
        radio: 'a'
      }
    }
  }
})

stories.add('› Size Medium', () => {
  return {
    template: `<el-radio-group v-model="radio" size="medium">
      <el-radio-button label="a">Option A</el-radio-button>
      <el-radio-button label="b">Option B</el-radio-button>
      <el-radio-button label="c">Option C</el-radio-button>
    </el-radio-group>`,
    data () {
      return {
        radio: 'a'
      }
    }
  }
})

stories.add('› Size Small', () => {
  return {
    template: `<el-radio-group v-model="radio" size="small">
      <el-radio-button label="a">Option A</el-radio-button>
      <el-radio-button label="b">Option B</el-radio-button>
      <el-radio-button label="c">Option C</el-radio-button>
    </el-radio-group>`,
    data () {
      return {
        radio: 'a'
      }
    }
  }
})

stories.add('› Size Mini', () => {
  return {
    template: `<el-radio-group v-model="radio" size="mini">
      <el-radio-button label="a">Option A</el-radio-button>
      <el-radio-button label="b">Option B</el-radio-button>
      <el-radio-button label="c">Option C</el-radio-button>
    </el-radio-group>`,
    data () {
      return {
        radio: 'a'
      }
    }
  }
})
