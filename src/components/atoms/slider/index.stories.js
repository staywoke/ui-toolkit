import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean, number, text } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Slider', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const size = select(
    'Input Size',
    {
      '': '---',
      'large': 'large',
      'medium': 'medium',
      'small': 'small',
      'mini': 'mini'
    },
    ''
  )

  const min = number('Min', 0)
  const max = number('Max', 100)
  const step = number('Step', 1, { min: 0 })

  const height = text('Height', '100px')

  const disabled = boolean('Disabled', false)
  const showInput = boolean('Show Input', false)
  const showInputControls = boolean('Show Input Controls', true)
  const showStops = boolean('Show Stops', false)
  const showTooltip = boolean('Show Tooltip', true)
  const range = boolean('Range', false)
  const vertical = boolean('Vertical', false)

  let attributes = ''

  attributes = attributes.concat((size !== 'small') ? `input-size="${size}" ` : '')
    .concat((min !== 0) ? `:min="${min}" ` : '')
    .concat((max !== 0) ? `:max="${max}" ` : '')
    .concat((step !== 1) ? `:step="${step}" ` : '')
    .concat((vertical && height !== '') ? `height="${height}" ` : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((showInput) ? 'show-input ' : '')
    .concat((!showTooltip) ? ':show-tooltip="false" ' : '')
    .concat((showStops) ? 'show-stops ' : '')
    .concat((range) ? 'range ' : '')
    .concat((vertical) ? 'vertical ' : '')
    .concat((showInput && !showInputControls) ? ':show-input-controls="false" ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-slider ${attributes}
      placeholder="Placeholder"
      v-model="input"
      @change="changeHandler"
    />`,
    data () {
      return {
        input: 0
      }
    },
    methods: {
      changeHandler: action('Slider Changed')
    }
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-slider v-model="input" />',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Initial Value', () => {
  return {
    template: '<el-slider v-model="input" />',
    data () {
      return {
        input: 5
      }
    }
  }
})

stories.add('› Hide Tooltip', () => {
  return {
    template: '<el-slider v-model="input" :show-tooltip="false" />',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Format Tooltip', () => {
  return {
    template: '<el-slider v-model="input" :format-tooltip="formatTooltip" />',
    data () {
      return {
        input: null
      }
    },
    methods: {
      formatTooltip (val) {
        return val / 100
      }
    }
  }
})

stories.add('› Custom Steps', () => {
  return {
    template: '<el-slider v-model="input" :step="10" />',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Show Stops', () => {
  return {
    template: '<el-slider v-model="input" :step="10" show-stops />',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Slider with Input', () => {
  return {
    template: '<el-slider v-model="input" show-input />',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Range Selection', () => {
  return {
    template: '<el-slider v-model="input" range :max="10" />',
    data () {
      return {
        input: [4, 8]
      }
    }
  }
})

stories.add('› Vertical Mode', () => {
  return {
    template: '<el-slider v-model="input" vertical height="200px" />',
    data () {
      return {
        input: [4, 8]
      }
    }
  }
})
