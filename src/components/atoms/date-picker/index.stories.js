import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean, text, date } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Date Picker', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const size = select(
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

  const types = select(
    'Type',
    {
      '': '---',
      'year': 'year',
      'month': 'month',
      'date': 'date',
      'dates': 'dates',
      'datetime': 'datetime',
      'week': 'week',
      'datetimerange': 'datetimerange',
      'daterange': 'daterange'
    },
    ''
  )

  const align = select(
    'Align',
    {
      '': '---',
      'left': 'left',
      'center': 'center',
      'right': 'right'
    },
    ''
  )

  const readonly = boolean('Readonly', false)
  const disabled = boolean('Disabled', false)
  const editable = boolean('Editable', true)
  const clearable = boolean('Clearable', true)
  const unlinkPanels = boolean('Unlink Panels', false)

  const format = text('Date Format', 'yyyy-MM-dd')

  const today = new Date()
  const value = date('Date', today)

  let attributes = ''

  attributes = attributes.concat((types !== '' && types !== 'date') ? `type="${types}" ` : '')
    .concat((size !== '') ? `size="${size}" ` : '')
    .concat((value !== '') ? `:default-value="${value}" ` : '')
    .concat((align !== '') ? `align="${align}" ` : '')
    .concat((format !== '' && format !== 'yyyy-MM-dd') ? `format="${format}" ` : '')
    .concat((readonly) ? 'readonly ' : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((!editable) ? ':editable="false" ' : '')
    .concat((!clearable) ? ':clearable="false" ' : '')
    .concat((unlinkPanels) ? 'unlink-panels ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-date-picker ${attributes}
      v-model="input"
      placeholder="Pick a day"
      @blur="blurHandler"
      @focus="focusHandler"
      @change="changeHandler">
    </el-date-picker>`,
    data () {
      return {
        input: null
      }
    },
    methods: {
      blurHandler: action('Date Blurred'),
      focusHandler: action('Date Focused'),
      changeHandler: action('Date Changed')
    }
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-date-picker v-model="input" />',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› With Options', () => {
  return {
    template: '<el-date-picker v-model="input" type="date" placeholder="Pick a day" :picker-options="pickerOptions" />',
    data () {
      return {
        input: null,
        pickerOptions: {
          disabledDate (time) {
            return time.getTime() > Date.now()
          },
          shortcuts: [{
            text: 'Today',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: 'Yesterday',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: 'A week ago',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        }
      }
    }
  }
})

stories.add('› Choose Week', () => {
  return {
    template: '<el-date-picker v-model="input" type="week" format="Week WW" placeholder="Pick a week" />',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Choose Month', () => {
  return {
    template: '<el-date-picker v-model="input" type="month" placeholder="Pick a month" />',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Choose Year', () => {
  return {
    template: '<el-date-picker v-model="input" type="year" placeholder="Pick a year" />',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Choose Dates', () => {
  return {
    template: '<el-date-picker v-model="dates" type="dates" placeholder="Pick one or more dates" />',
    data () {
      return {
        dates: []
      }
    }
  }
})

stories.add('› Default Value', () => {
  return {
    template: '<el-date-picker v-model="input" type="date" placeholder="Pick a date" default-value="2018-01-01" />',
    data () {
      return {
        input: ''
      }
    }
  }
})

stories.add('› Date Range', () => {
  return {
    template: '<el-date-picker v-model="input" type="daterange" align="right" start-placeholder="Start Date" end-placeholder="End Date" default-value="2010-10-01" />',
    data () {
      return {
        input: ''
      }
    }
  }
})

stories.add('› Size Large', () => {
  return {
    template: '<el-date-picker v-model="input" size="large" />',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Size Medium', () => {
  return {
    template: '<el-date-picker v-model="input" size="medium" />',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Size Small', () => {
  return {
    template: '<el-date-picker v-model="input" size="small" />',
    data () {
      return {
        input: null
      }
    }
  }
})

stories.add('› Size Mini', () => {
  return {
    template: '<el-date-picker v-model="input" size="mini" />',
    data () {
      return {
        input: null
      }
    }
  }
})
