import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text, boolean, select, color, number } from '@storybook/addon-knobs/vue'

import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Checkbox Group', module)

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

  const min = number('Min', 0, {
    min: 0,
    max: 3,
    step: 1
  })

  const max = number('Max', 3, {
    min: 0,
    max: 3,
    step: 1
  })

  const textColor = color('Text Color', '#ffffff')
  const fillColor = color('Fill Color', '#409EFF')
  const disabled = boolean('Disabled', false)

  let attributes = ''

  attributes = attributes.concat((name !== '') ? `name="${name}" ` : '')
    .concat((sizes !== '') ? `size="${sizes}" ` : '')
    .concat((textColor !== '#ffffff') ? `text-color="${textColor}" ` : '')
    .concat((fillColor !== '#409EFF') ? `fill="${fillColor}" ` : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((min !== 0) ? `min="${min}" ` : '')
    .concat((max !== 3) ? `max="${max}" ` : '')

  attributes = attributes.trim()

  return {
    template: `<el-checkbox-group ${attributes} v-model="checked" @change="actionLogger">
      <el-checkbox-button label="a">Option A</el-checkbox-button>
      <el-checkbox-button label="b">Option B</el-checkbox-button>
      <el-checkbox-button label="c">Option C</el-checkbox-button>
    </el-checkbox-group>`,
    data () {
      return {
        checked: ['a']
      }
    },
    methods: {
      actionLogger: action('Checkbox Clicked')
    }
  }
})

stories.add('› Default', () => {
  return {
    template: `<el-checkbox-group v-model="checked">
      <el-checkbox-button label="a">Option A</el-checkbox-button>
      <el-checkbox-button label="b">Option B</el-checkbox-button>
      <el-checkbox-button label="c">Option C</el-checkbox-button>
    </el-checkbox-group>`,
    data () {
      return {
        checked: ['a']
      }
    }
  }
})

stories.add('› Disabled', () => {
  return {
    template: `<el-checkbox-group v-model="checked" disabled>
      <el-checkbox-button label="a">Option A</el-checkbox-button>
      <el-checkbox-button label="b">Option B</el-checkbox-button>
      <el-checkbox-button label="c">Option C</el-checkbox-button>
    </el-checkbox-group>`,
    data () {
      return {
        checked: ['a']
      }
    }
  }
})

stories.add('› Size Medium', () => {
  return {
    template: `<el-checkbox-group v-model="checked" size="medium">
      <el-checkbox-button label="a">Option A</el-checkbox-button>
      <el-checkbox-button label="b">Option B</el-checkbox-button>
      <el-checkbox-button label="c">Option C</el-checkbox-button>
    </el-checkbox-group>`,
    data () {
      return {
        checked: ['a']
      }
    }
  }
})

stories.add('› Size Small', () => {
  return {
    template: `<el-checkbox-group v-model="checked" size="small">
      <el-checkbox-button label="a">Option A</el-checkbox-button>
      <el-checkbox-button label="b">Option B</el-checkbox-button>
      <el-checkbox-button label="c">Option C</el-checkbox-button>
    </el-checkbox-group>`,
        data () {
      return {
        checked: ['a']
      }
    }
  }
})

stories.add('› Size Mini', () => {
  return {
    template: `<el-checkbox-group v-model="checked" size="mini">
      <el-checkbox-button label="a">Option A</el-checkbox-button>
      <el-checkbox-button label="b">Option B</el-checkbox-button>
      <el-checkbox-button label="c">Option C</el-checkbox-button>
    </el-checkbox-group>`,
    data () {
      return {
        checked: ['a']
      }
    }
  }
})

stories.add('› Basic Group', () => {
  return {
    template: `<el-checkbox-group v-model="checked">
      <el-checkbox label="a">Option A</el-checkbox>
      <el-checkbox label="b">Option B</el-checkbox>
      <el-checkbox label="c">Option C</el-checkbox>
    </el-checkbox-group>`,
    data () {
      return {
        checked: ['a']
      }
    }
  }
})

stories.add('› Basic Group Border', () => {
  return {
    template: `<el-checkbox-group v-model="checked">
      <el-checkbox label="a" border>Option A</el-checkbox>
      <el-checkbox label="b" border>Option B</el-checkbox>
      <el-checkbox label="c" border>Option C</el-checkbox>
    </el-checkbox-group>`,
    data () {
      return {
        checked: ['a']
      }
    }
  }
})

stories.add('› Indeterminate', () => {
  const options = ['Option A', 'Option B', 'Option C', 'Option D']

  return {
    template: `<el-row style="max-width: 430px; margin: 0 auto;">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" style="margin-bottom: 10px;">Check all</el-checkbox>
      <el-checkbox-group v-model="checked" @change="handleCheckedOptionsChange">
        <el-checkbox v-for="option in options" :label="option" :key="option">{{ option }}</el-checkbox>
      </el-checkbox-group>
    </el-row>`,
    data() {
      return {
        checkAll: false,
        checked: ['Option A'],
        options: options,
        isIndeterminate: true
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checked = val ? options : []
        this.isIndeterminate = false
      },
      handleCheckedOptionsChange(value) {
        let checkedCount = value.length
        this.checkAll = checkedCount === this.options.length
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.options.length
      }
    }
  }
})

stories.add('› Limit Checked', () => {
  const options = ['Option A', 'Option B', 'Option C', 'Option D']

  return {
    template: `<el-checkbox-group v-model="checked" :min="1" :max="2">
      <el-checkbox v-for="option in options" :label="option" :key="option">{{ option }}</el-checkbox>
    </el-checkbox-group>`,
    data() {
      return {
        checked: ['Option A'],
        options: options
      }
    }
  }
})
