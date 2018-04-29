import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Color Picker', module)

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

  const colorFormat = select(
    'Format',
    {
      '': '---',
      'hsl': 'hsl',
      'hsv': 'hsv',
      'hex': 'hex',
      'rgb': 'rgb'
    },
    ''
  )

  const disabled = boolean('Disabled', false)
  const showAlpha = boolean('show-alpha', false)

  let attributes = ''

  attributes = attributes.concat((sizes !== '') ? `size="${sizes}" ` : '')
    .concat((colorFormat !== '') ? `color-format="${colorFormat}" ` : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((showAlpha) ? 'show-alpha ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-color-picker ${attributes} v-model="color" :predefine="predefineColors" @change="actionLogger" @active-change="actionActiveLogger"></el-color-picker>`,
    data () {
      return {
        color: '#409EFF',
        predefineColors: [
          '#409EFF',
          '#67C23A',
          '#E6A23C',
          '#F56C6C',
          '#909399'
        ]
      }
    },
    methods: {
      actionLogger: action('Color Change'),
      actionActiveLogger: action('Active Color Change')
    }
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-color-picker v-model="color"></el-color-picker>',
    data () {
      return {
        color: null
      }
    }
  }
})

stories.add('› Set Color', () => {
  return {
    template: '<el-color-picker v-model="color"></el-color-picker>',
    data () {
      return {
        color: '#409EFF'
      }
    }
  }
})

stories.add('› Size Medium', () => {
  return {
    template: '<el-color-picker v-model="color" side="medium"></el-color-picker>',
    data () {
      return {
        color: '#409EFF'
      }
    }
  }
})

stories.add('› Size Small', () => {
  return {
    template: '<el-color-picker v-model="color" side="small"></el-color-picker>',
    data () {
      return {
        color: '#409EFF'
      }
    }
  }
})

stories.add('› Size Mini', () => {
  return {
    template: '<el-color-picker v-model="color" side="mini"></el-color-picker>',
    data () {
      return {
        color: '#409EFF'
      }
    }
  }
})

stories.add('› Alpha Enabled', () => {
  return {
    template: '<el-color-picker v-model="color" show-alpha></el-color-picker>',
    data () {
      return {
        color: '#409EFF'
      }
    }
  }
})

stories.add('› Predefined Colors', () => {
  return {
    template: '<el-color-picker v-model="color" :predefine="predefineColors"></el-color-picker>',
    data () {
      return {
        color: '#409EFF',
        predefineColors: [
          '#409EFF',
          '#67C23A',
          '#E6A23C',
          '#F56C6C',
          '#909399'
        ]
      }
    }
  }
})

stories.add('› Disabled', () => {
  return {
    template: '<el-color-picker v-model="color" disabled></el-color-picker>',
    data () {
      return {
        color: '#409EFF'
      }
    }
  }
})

stories.add('› Format HEX', () => {
  return {
    template: '<el-color-picker v-model="color" color-format="hex"></el-color-picker>',
    data () {
      return {
        color: '#409EFF'
      }
    }
  }
})

stories.add('› Format RGB', () => {
  return {
    template: '<el-color-picker v-model="color" color-format="rgb"></el-color-picker>',
    data () {
      return {
        color: 'rgb(64, 158, 255)'
      }
    }
  }
})

stories.add('› Format HSL', () => {
  return {
    template: '<el-color-picker v-model="color" color-format="hsl"></el-color-picker>',
    data () {
      return {
        color: 'hsl(210.47120418848166, 100%, 63%)'
      }
    }
  }
})

stories.add('› Format HSV', () => {
  return {
    template: '<el-color-picker v-model="color" color-format="hsv"></el-color-picker>',
    data () {
      return {
        color: 'hsv(210.47120418848166, 75%, 100%)'
      }
    }
  }
})
