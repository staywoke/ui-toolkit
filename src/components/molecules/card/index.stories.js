import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Molecules | Card', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const shadow = select(
    'Shadow',
    {
      '': '---',
      'always': 'always',
      'hover': 'hover',
      'never': 'never'
    },
    ''
  )

  let attributes = (shadow !== '' & shadow !== 'always') ? `shadow="${shadow}"` : ''

  return {
    template: `<el-card ${attributes} class="card-demo" :body-style="{ padding: '0px' }">
      <img :src="image" class="image">
      <div style="padding: 14px;">
        <span>{{ title }}</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">Button</el-button>
        </div>
      </div>
    </el-card>`,
    data () {
      return {
        image: 'https://images.unsplash.com/photo-1522199780729-a356c844222a?w=250&q=80',
        title: 'Coffee Time',
        currentDate: 'May 5th, 2018'
      }
    }
  }
})
