import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue'

/* eslint-disable no-unused-vars */
import Component from '.'
import Container from '../../organisms/container'
import Button from '../../atoms/button'
import README from './README.md'

const stories = storiesOf('Atoms | Dialog', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const title = text('Title', 'Dialog Title')
  const width = text('width', '30%')
  const top = text('Top', '15vh')

  const center = boolean('Center', false)
  const fullscreen = boolean('Fullscreen', false)
  const modal = boolean('Modal', true)
  const lockScroll = boolean('Lock Scroll', true)
  const closeOnClickModal = boolean('Close on Modal', true)
  const closeOnPressEscape = boolean('Close on Escape', true)
  const showClose = boolean('Show Close', true)

  let attributes = ''

  attributes = attributes.concat((title !== '') ? `title="${title}" ` : '')
    .concat((width !== '' && !fullscreen) ? `width="${width}" ` : '')
    .concat((top !== '') ? `top="${top}" ` : '')
    .concat((center) ? 'center ' : '')
    .concat((fullscreen) ? 'fullscreen width="100%" ' : '')
    .concat((!modal) ? ':modal="false" ' : '')
    .concat((!lockScroll) ? ':lock-scroll="false" ' : '')
    .concat((!closeOnClickModal) ? ':close-on-click-modal="false" ' : '')
    .concat((!closeOnPressEscape) ? ':close-on-press-escape="false" ' : '')
    .concat((!showClose) ? ':show-close="false" ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-container>
      <el-button @click="dialogVisible = true" style="margin: 0 auto;">
        Open Dialog
      </el-button>
      <el-dialog ${attributes} :visible.sync="dialogVisible" :modal-append-to-body="false">
        <span>This is a message</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span>
      </el-dialog>
    </el-container>`,
    data () {
      return {
        dialogVisible: false
      }
    }
  }
})
