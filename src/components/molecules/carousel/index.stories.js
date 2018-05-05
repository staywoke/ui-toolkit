import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text, boolean, select, number } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Molecules | Carousel', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const type = select(
    'Type',
    {
      '': '---',
      'card': 'card'
    },
    ''
  )

  const trigger = select(
    'Trigger',
    {
      '': '---',
      'hover': 'hover',
      'click': 'click'
    },
    ''
  )

  const position = select(
    'Indicator Position',
    {
      '': '---',
      'outside': 'outside',
      'none': 'none'
    },
    ''
  )

  const arrow = select(
    'Indicator Position',
    {
      '': '---',
      'always': 'always',
      'hover': 'hover',
      'never': 'never'
    },
    ''
  )

  const height = text('Height', '150px')

  const interval = number('interval', 3000, { min: 0 })
  const initialIndex = number('Initial Index', 0, { min: 0 })

  const autoplay = boolean('autoplay', false)

  let attributes = ''

  attributes = attributes.concat((type !== '') ? `type="${type}" ` : '')
    .concat((trigger === 'click') ? `trigger="${trigger}" ` : '')
    .concat((height !== '') ? `height="${height}" ` : '')
    .concat((arrow !== '' && arrow !== 'hover') ? `arrow="${arrow}" ` : '')
    .concat((position !== '') ? `indicator-position="${position}" ` : '')
    .concat((!autoplay) ? `:autoplay="false" ` : '')
    .concat((initialIndex > 0) ? `initial-index="${initialIndex}" ` : '')
    .concat((interval > 0) ? `interval="${interval}" ` : '')

  attributes = attributes.trim()

  return {
    template: `<el-carousel ${attributes} @change="actionLogger">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>Slide {{ item }}</h3>
      </el-carousel-item>
    </el-carousel>`,
    methods: {
      actionLogger: action('Slide Changed')
    }
  }
})
