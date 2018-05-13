import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs } from '@storybook/addon-knobs/vue'

/* eslint-disable no-unused-vars */
import Component from '.'
import Button from '../../atoms/button'
import README from './README.md'

const stories = storiesOf('Atoms | Notification', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$notify({
          title: 'Title',
          message: 'This is a message'
        })
      }
    }
  }
})

stories.add('› Default', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$notify({
          title: 'Title',
          message: 'This is a message'
        })
      }
    }
  }
})

stories.add('› Success', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        })
      }
    }
  }
})

stories.add('› Info', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$notify.info({
          title: 'Info',
          message: 'This is an info message',
          type: 'info'
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
        this.$notify({
          title: 'Warning',
          message: 'This is a warning message',
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
        this.$notify.error({
          title: 'Error',
          message: 'This is an error message'
        })
      }
    }
  }
})

stories.add('› Stay Open', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$notify({
          title: 'Close Me',
          message: 'Click X to Close',
          duration: 0
        })
      }
    }
  }
})

stories.add('› Top Right', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$notify({
          title: 'Info',
          message: 'This is an info message'
        })
      }
    }
  }
})

stories.add('› Bottom Right', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$notify({
          title: 'Info',
          message: 'This is an info message',
          position: 'bottom-right'
        })
      }
    }
  }
})

stories.add('› Top Left', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$notify({
          title: 'Info',
          message: 'This is an info message',
          position: 'top-left'
        })
      }
    }
  }
})

stories.add('› Bottom Left', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$notify({
          title: 'Info',
          message: 'This is an info message',
          position: 'bottom-left'
        })
      }
    }
  }
})

stories.add('› Offset', () => {
  return {
    template: `<el-button type="primary" @click="open">Show Message</el-button>`,
    methods: {
      open () {
        this.$notify({
          title: 'Info',
          message: 'This is an info message',
          type: 'info',
          offset: 100
        })
      }
    }
  }
})
