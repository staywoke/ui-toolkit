import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'

/* eslint-disable-next-line no-unused-vars */
import Row from '../row'

import README from './README.md'

const stories = storiesOf('Molecules | Cascader', module)

const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency'
          }, {
            value: 'feedback',
            label: 'Feedback'
          }, {
            value: 'efficiency',
            label: 'Efficiency'
          }, {
            value: 'controllability',
            label: 'Controllability'
          }
        ]
      }, {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation'
          }, {
            value: 'top nav',
            label: 'Top Navigation'
          }
        ]
      }
    ]
  }, {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout'
          }, {
            value: 'color',
            label: 'Color'
          }, {
            value: 'typography',
            label: 'Typography'
          }, {
            value: 'icon',
            label: 'Icon'
          }, {
            value: 'button',
            label: 'Button'
          }
        ]
      }, {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio'
          }, {
            value: 'checkbox',
            label: 'Checkbox'
          }, {
            value: 'input',
            label: 'Input'
          }, {
            value: 'input-number',
            label: 'InputNumber'
          }, {
            value: 'select',
            label: 'Select'
          }, {
            value: 'cascader',
            label: 'Cascader'
          }, {
            value: 'switch',
            label: 'Switch'
          }, {
            value: 'slider',
            label: 'Slider'
          }, {
            value: 'time-picker',
            label: 'TimePicker'
          }, {
            value: 'date-picker',
            label: 'DatePicker'
          }, {
            value: 'datetime-picker',
            label: 'DateTimePicker'
          }, {
            value: 'upload',
            label: 'Upload'
          }, {
            value: 'rate',
            label: 'Rate'
          }, {
            value: 'form',
            label: 'Form'
          }
        ]
      }, {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table'
          }, {
            value: 'tag',
            label: 'Tag'
          }, {
            value: 'progress',
            label: 'Progress'
          }, {
            value: 'tree',
            label: 'Tree'
          }, {
            value: 'pagination',
            label: 'Pagination'
          }, {
            value: 'badge',
            label: 'Badge'
          }
        ]
      }, {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert'
          }, {
            value: 'loading',
            label: 'Loading'
          }, {
            value: 'message',
            label: 'Message'
          }, {
            value: 'message-box',
            label: 'MessageBox'
          }, {
            value: 'notification',
            label: 'Notification'
          }
        ]
      }, {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'NavMenu'
          }, {
            value: 'tabs',
            label: 'Tabs'
          }, {
            value: 'breadcrumb',
            label: 'Breadcrumb'
          }, {
            value: 'dropdown',
            label: 'Dropdown'
          }, {
            value: 'steps',
            label: 'Steps'
          }
        ]
      }, {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog'
          }, {
            value: 'tooltip',
            label: 'Tooltip'
          }, {
            value: 'popover',
            label: 'Popover'
          }, {
            value: 'card',
            label: 'Card'
          }, {
            value: 'carousel',
            label: 'Carousel'
          }, {
            value: 'collapse',
            label: 'Collapse'
          }
        ]
      }
    ]
  }, {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components'
      }, {
        value: 'sketch',
        label: 'Sketch Templates'
      }, {
        value: 'docs',
        label: 'Design Documentation'
      }
    ]
  }
]

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

  const expandTrigger = select(
    'Expand Trigger',
    {
      '': '---',
      'click': 'click',
      'hover': 'hover'
    },
    ''
  )

  const disabled = boolean('Disabled', false)
  const clearable = boolean('Clearable', false)
  const showAllLevels = boolean('Show All Levels', true)
  const filterable = boolean('Filterable', false)
  const changeOnSelect = boolean('Change on Select', false)

  const separator = text('Separator', '/')

  let attributes = ''

  attributes = attributes.concat((sizes !== '') ? `size="${sizes}" ` : '')
    .concat((expandTrigger !== '') ? `expand-trigger="${expandTrigger}" ` : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((clearable) ? 'clearable ' : '')
    .concat((filterable) ? 'filterable ' : '')
    .concat((changeOnSelect) ? 'change-on-select ' : '')
    .concat((!showAllLevels) ? ':show-all-levels="false" ' : '')
    .concat((separator !== '/') ? `separator="${separator}" ` : '')

  attributes = attributes.trim()

  return {
    template: `<el-cascader ${attributes} :options="options" v-model="selectedOptions" @change="actionLogger" />`,
    data () {
      return {
        options: options,
        selectedOptions: []
      }
    },
    methods: {
      actionLogger: action('Selection Changed')
    }
  }
})

stories.add('› Expand on Click', () => {
  return {
    template: `<el-cascader :options="options" v-model="selectedOptions" />`,
    data () {
      return {
        options: options,
        selectedOptions: []
      }
    }
  }
})

stories.add('› Expand on Hover', () => {
  return {
    template: `<el-cascader :options="options" expand-trigger="hover" v-model="selectedOptions" />`,
    data () {
      return {
        options: options,
        selectedOptions: []
      }
    }
  }
})

stories.add('› Size Medium', () => {
  return {
    template: `<el-cascader :options="options" size="medium" v-model="selectedOptions" />`,
    data () {
      return {
        options: options,
        selectedOptions: []
      }
    }
  }
})

stories.add('› Size Small', () => {
  return {
    template: `<el-cascader :options="options" size="small" v-model="selectedOptions" />`,
    data () {
      return {
        options: options,
        selectedOptions: []
      }
    }
  }
})

stories.add('› Size Mini', () => {
  return {
    template: `<el-cascader :options="options" size="mini" v-model="selectedOptions" />`,
    data () {
      return {
        options: options,
        selectedOptions: []
      }
    }
  }
})

stories.add('› Disabled', () => {
  return {
    template: `<el-cascader :options="options" disabled v-model="selectedOptions" />`,
    data () {
      return {
        options: options,
        selectedOptions: []
      }
    }
  }
})
