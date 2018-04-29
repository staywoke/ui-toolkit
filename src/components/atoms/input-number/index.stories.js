import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean, number } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Input Number', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const size = select(
    'Size',
    {
      '': '---',
      'medium': 'medium',
      'small': 'small',
      'mini': 'mini'
    },
    ''
  )

  const position = select(
    'Control Position',
    {
      '': '---',
      'side': 'left & right',
      'right': 'right'
    },
    ''
  )

  const controls = boolean('Controls', true)
  const disabled = boolean('Disabled', false)

  const min = number('Min', 0)
  const max = number('Max', 0)
  const step = number('Step', 1, { min: 0 })

  let attributes = ''

  attributes = attributes.concat((size !== 'large') ? `size="${size}" ` : '')
    .concat((!controls) ? ':controls="false" ' : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((position === 'right') ? `controls-position="${position}" ` : '')
    .concat((min !== 0) ? `min="${min}" ` : '')
    .concat((max !== 0) ? `max="${max}" ` : '')
    .concat((step !== 1) ? `step="${step}" ` : '')

  attributes = attributes.trim()

  return {
    template: `<el-input-number ${attributes}
      placeholder="Placeholder"
      v-model="input"
      @blur="blurHandler"
      @focus="focusHandler"
      @change="changeHandler">
    </el-input>`,
    data () {
      return {
        input: 0
      }
    },
    methods: {
      blurHandler: action('Number Blurred'),
      focusHandler: action('Number Focused'),
      changeHandler: action('Number Changed')
    }
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-input-number v-model="input"></el-input>',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› No Controls', () => {
  return {
    template: '<el-input-number v-model="input" :controls="false"></el-input>',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Controls Right', () => {
  return {
    template: '<el-input-number v-model="input" control-position="right"></el-input>',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Size Medium', () => {
  return {
    template: '<el-input-number v-model="input" size="medium"></el-input>',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Size Small', () => {
  return {
    template: '<el-input-number v-model="input" size="small"></el-input>',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Size Mini', () => {
  return {
    template: '<el-input-number v-model="input" size="mini"></el-input>',
    data () {
      return {
        input: null
      }
    }
  }
})
