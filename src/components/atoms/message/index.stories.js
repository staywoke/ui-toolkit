import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs } from '@storybook/addon-knobs/vue'

/* eslint-disable no-unused-vars */
import Component from '.'
import Button from '../../atoms/button'
import README from './README.md'

const stories = storiesOf('Atoms | Message', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$message('This is a message.')
      }
    }
  }
})

stories.add('› Default', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$message('This is a message.')
      }
    }
  }
})

stories.add('› Success', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$message({
          message: 'Congrats, this is a success message.',
          type: 'success'
        })
      }
    }
  }
})

stories.add('› Warning', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$message({
          message: 'Warning, this is a warning message.',
          type: 'warning'
        })
      }
    }
  }
})

stories.add('› Error', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$message.error('Oops, this is a error message.')
      }
    }
  }
})

stories.add('› Closable', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$message({
          duration: 0,
          showClose: true,
          message: 'This is a message.'
        })
      }
    }
  }
})

stories.add('› Centered Text', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$message({
          message: 'Centered text',
          center: true
        })
      }
    }
  }
})
