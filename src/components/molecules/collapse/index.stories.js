import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, boolean } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Molecules | Collapse', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const accordion = boolean('accordion', false)

  let attributes = (accordion) ? 'accordion ' : ''

  return {
    template: `<el-collapse ${attributes} @change="actionLogger">
      <el-collapse-item v-for="item in 4" :key="item" :title="'Section ' + item" :name="item">
        <div>Content {{ item }}</div>
      </el-collapse-item>
    </el-collapse>`,
    methods: {
      actionLogger: action('Slide Changed')
    }
  }
})
