import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs } from '@storybook/addon-knobs/vue'

/* eslint-disable no-unused-vars */
import Component from '.'
import Button from '../../atoms/button'
import README from './README.md'

const stories = storiesOf('Atoms | Message Box', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Alert</el-button>`,
    methods: {
      open () {
        this.$alert('This is a message', 'Title', {
          confirmButtonText: 'OK',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
      }
    }
  }
})

stories.add('› Alert', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Alert</el-button>`,
    methods: {
      open () {
        this.$alert('This is a message', 'Title', {
          confirmButtonText: 'OK',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
      }
    }
  }
})

stories.add('› Confirm', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Confirm</el-button>`,
    methods: {
      open () {
        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          })
        })
      }
    }
  }
})

stories.add('› Prompt', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Prompt</el-button>`,
    methods: {
      open () {
        this.$prompt('Please input your e-mail', 'Tip', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: 'Invalid Email'
        }).then(response => {
          this.$message({
            type: 'success',
            message: 'Your email is: ' + response.value
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Input canceled'
          })
        })
      }
    }
  }
})

stories.add('› Centered', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Custom</el-button>`,
    methods: {
      open () {
        this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: 'Delete completed'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: 'Delete canceled'
          })
        })
      }
    }
  }
})
