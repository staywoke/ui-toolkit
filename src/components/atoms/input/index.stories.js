import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Input', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

const icons = {
  '': '---',
  'el-icon-arrow-down': 'arrow-down',
  'el-icon-arrow-left': 'arrow-left',
  'el-icon-arrow-right': 'arrow-right',
  'el-icon-arrow-up': 'arrow-up',
  'el-icon-back': 'back',
  'el-icon-bell': 'bell',
  'el-icon-caret-bottom': 'caret-bottom',
  'el-icon-caret-left': 'caret-left',
  'el-icon-caret-right': 'caret-right',
  'el-icon-caret-top': 'caret-top',
  'el-icon-check': 'check',
  'el-icon-circle-check-outline': 'circle-check-outline',
  'el-icon-circle-check': 'circle-check',
  'el-icon-circle-close-outline': 'circle-close-outline',
  'el-icon-circle-close': 'circle-close',
  'el-icon-circle-plus-outline': 'circle-plus-outline',
  'el-icon-circle-plus': 'circle-plus',
  'el-icon-close': 'close',
  'el-icon-d-arrow-left': 'd-arrow-left',
  'el-icon-d-arrow-right': 'd-arrow-right',
  'el-icon-d-caret': 'd-caret',
  'el-icon-date': 'date',
  'el-icon-delete': 'delete',
  'el-icon-document': 'document',
  'el-icon-download': 'download',
  'el-icon-edit-outline': 'edit-outline',
  'el-icon-edit': 'edit',
  'el-icon-error': 'error',
  'el-icon-goods': 'goods',
  'el-icon-info': 'info',
  'el-icon-loading': 'loading',
  'el-icon-location-outline': 'location-outline',
  'el-icon-location': 'location',
  'el-icon-menu': 'menu',
  'el-icon-message': 'message',
  'el-icon-minus': 'minus',
  'el-icon-mobile-phone': 'mobile-phone',
  'el-icon-more-outline': 'more-outline',
  'el-icon-more': 'more',
  'el-icon-news': 'news',
  'el-icon-phone-outline': 'phone-outline',
  'el-icon-phone': 'phone',
  'el-icon-picture-outline': 'picture-outline',
  'el-icon-picture': 'picture',
  'el-icon-plus': 'plus',
  'el-icon-printer': 'printer',
  'el-icon-question': 'question',
  'el-icon-rank': 'rank',
  'el-icon-refresh': 'refresh',
  'el-icon-remove-outline': 'remove-outline',
  'el-icon-remove': 'remove',
  'el-icon-search': 'search',
  'el-icon-service': 'service',
  'el-icon-setting': 'setting',
  'el-icon-share': 'share',
  'el-icon-sold-out': 'sold-out',
  'el-icon-sort-down': 'sort-down',
  'el-icon-sort-up': 'sort-up',
  'el-icon-sort': 'sort',
  'el-icon-star-off': 'star-off',
  'el-icon-star-on': 'star-on',
  'el-icon-success': 'success',
  'el-icon-tickets': 'tickets',
  'el-icon-time': 'time',
  'el-icon-upload': 'upload',
  'el-icon-upload2': 'upload2',
  'el-icon-view': 'view',
  'el-icon-warning': 'warning',
  'el-icon-zoom-in': 'zoom-in',
  'el-icon-zoom-out': 'zoom-out'
}

stories.add('Component Overview', () => {
  const type = select(
    'Type',
    {
      '': '---',
      'email': 'email',
      'password': 'password',
      'search': 'search',
      'tel': 'tel',
      'text': 'text',
      'textarea': 'textarea',
      'url': 'url'
    },
    ''
  )

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

  const prefixIcon = select('Prefix Icon', icons, '')
  const suffixIcon = select('Suffix Icon', icons, '')

  const clearable = boolean('Clearable', false)
  const disabled = boolean('Disabled', false)
  const readonly = boolean('Readonly', false)
  const autosize = boolean('Autosize', false)

  let attributes = ''

  attributes = attributes.concat((type !== '') ? `type="${type}" ` : '')
    .concat((clearable) ? 'clearable ' : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((readonly) ? 'readonly ' : '')
    .concat((autosize) ? 'autosize ' : '')
    .concat((size !== '') ? `size="${size}" ` : '')
    .concat((prefixIcon !== '') ? `prefix-icon="${prefixIcon}" ` : '')
    .concat((suffixIcon !== '') ? `suffix-icon="${suffixIcon}" ` : '')

  attributes = attributes.trim()

  return {
    template: `<el-input ${attributes}
      placeholder="Placeholder"
      v-model="input"
      @blur="blurHandler"
      @focus="focusHandler"
      @change="changeHandler"
      @clear="clearHandler">
    </el-input>`,
    data () {
      return {
        input: null
      }
    },
    methods: {
      blurHandler: action('Input Blurred'),
      focusHandler: action('Input Focused'),
      changeHandler: action('Input Changed'),
      clearHandler: action('Input Cleared')
    }
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-input placeholder="Please input" v-model="input"></el-input>',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Search', () => {
  return {
    template: '<el-input placeholder="Search ..." v-model="input" type="search" prefix-icon="el-icon-search"></el-input>',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Password', () => {
  return {
    template: '<el-input placeholder="Password" v-model="password" type="password"></el-input>',
    data () {
      return {
        password: null
      }
    }
  }
})

stories.add('› Textarea', () => {
  return {
    template: '<el-input placeholder="Message" v-model="input" type="textarea"></el-input>',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Textarea Autosize', () => {
  return {
    template: '<el-input placeholder="Message" v-model="input" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }"></el-input>',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Clearable', () => {
  return {
    template: '<el-input placeholder="Search ..." v-model="input" prefix-icon="el-icon-search" clearable></el-input>',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Disabled', () => {
  return {
    template: '<el-input placeholder="Search ..." disabled></el-input>'
  }
})
