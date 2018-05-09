import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean } from '@storybook/addon-knobs/vue'

/* eslint-disable no-unused-vars */
import Component from '.'
import Option from '../option'
import OptionGroup from '../../molecules/option-group'
import README from './README.md'

const stories = storiesOf('Atoms | Select', module)

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

  const clearable = boolean('Clearable', false)
  const disabled = boolean('Disabled', false)
  const readonly = boolean('Readonly', false)
  const multiple = boolean('Multiple', false)
  const collapseTags = boolean('Collapse Tags', false)
  const filterable = boolean('Filterable', false)
  const allowCreate = boolean('Allow Create', false)

  let attributes = ''

  attributes = attributes.concat((size !== '') ? `size="${size}" ` : '')
    .concat((clearable) ? 'clearable ' : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((readonly) ? 'readonly ' : '')
    .concat((filterable) ? 'filterable ' : '')
    .concat((filterable && allowCreate) ? 'allow-create ' : '')
    .concat((multiple) ? 'multiple ' : '')
    .concat((multiple && collapseTags) ? 'collapse-tags ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-select v-model="value" placeholder="Select" ${attributes}>
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>`,
    data () {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
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
    template: `<el-select v-model="value" placeholder="Select">
      <el-option label="Option 1" :value="1" />
      <el-option label="Option 2" :value="2" />
      <el-option label="Option 3" :value="3" />
    </el-select>`,
    data () {
      return {
        value: null
      }
    }
  }
})

stories.add('› Disabled', () => {
  return {
    template: `<el-select v-model="value" placeholder="Select" disabled>
      <el-option label="Option 1" :value="1" />
      <el-option label="Option 2" :value="2" />
      <el-option label="Option 3" :value="3" />
    </el-select>`,
    data () {
      return {
        value: null
      }
    }
  }
})

stories.add('› Disabled Option', () => {
  return {
    template: `<el-select v-model="value" placeholder="Select">
      <el-option label="Option 1" :value="1" />
      <el-option label="Option 2" :value="2" disabled />
      <el-option label="Option 3" :value="3" />
    </el-select>`,
    data () {
      return {
        value: null
      }
    }
  }
})

stories.add('› Clearable', () => {
  return {
    template: `<el-select v-model="value" placeholder="Select" clearable>
      <el-option label="Option 1" :value="1" />
      <el-option label="Option 2" :value="2" />
      <el-option label="Option 3" :value="3" />
    </el-select>`,
    data () {
      return {
        value: null
      }
    }
  }
})

stories.add('› Multiple Select', () => {
  return {
    template: `<el-select v-model="value" placeholder="Select" multiple>
      <el-option label="Option 1" :value="1" />
      <el-option label="Option 2" :value="2" />
      <el-option label="Option 3" :value="3" />
    </el-select>`,
    data () {
      return {
        value: null
      }
    }
  }
})

stories.add('› Multiple Collapsed', () => {
  return {
    template: `<el-select v-model="value" placeholder="Select" multiple collapse-tags>
      <el-option label="Option 1" :value="1" />
      <el-option label="Option 2" :value="2" />
      <el-option label="Option 3" :value="3" />
    </el-select>`,
    data () {
      return {
        value: null
      }
    }
  }
})

stories.add('› Grouping', () => {
  return {
    template: `<el-select v-model="value" placeholder="Select">
      <el-option-group v-for="group in options" :key="group.label" :label="group.label">
        <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value" />
      </el-option-group>
    </el-select>`,
    data () {
      return {
        options: [{
          label: 'Popular cities',
          options: [{
            value: 'Shanghai',
            label: 'Shanghai'
          }, {
            value: 'Beijing',
            label: 'Beijing'
          }]
        }, {
          label: 'City name',
          options: [{
            value: 'Chengdu',
            label: 'Chengdu'
          }, {
            value: 'Shenzhen',
            label: 'Shenzhen'
          }, {
            value: 'Guangzhou',
            label: 'Guangzhou'
          }, {
            value: 'Dalian',
            label: 'Dalian'
          }]
        }],
        value: ''
      }
    }
  }
})

stories.add('› Filterable', () => {
  return {
    template: `<el-select v-model="value" filterable placeholder="Select">
      <el-option v-for="item in options" :key="item.value" :label="item.label":value="item.value" />
    </el-select>`,
    data () {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
})
