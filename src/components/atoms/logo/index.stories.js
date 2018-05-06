import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, color, number } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | StayWoke Logo', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const fill = color('Color', '#000000')
  const background = color('Background', 'transparent')

  const size = number('Size', 200, { min: 16, max: 500 })
  const padding = number('Padding', 0, { min: 0, max: 50 })

  let attributes = ''

  attributes = attributes.concat((fill !== '#000000') ? `color="${fill}" ` : '')
    .concat((background !== 'transparent') ? `background="${background}" ` : '')
    .concat((size !== 200) ? `:size="${size}" ` : '')
    .concat((padding !== 0) ? `:padding="${padding}" ` : '')

  attributes = attributes.trim()

  return {
    template: `<sw-logo ${attributes} />`
  }
})

stories.add('› Default ', () => {
  return {
    template: '<sw-logo />'
  }
})

stories.add('› Custom Size ', () => {
  return {
    template: '<sw-logo :size="300" />'
  }
})

stories.add('› Dark Background', () => {
  return {
    template: '<sw-logo color="#f2e325" background="#000000" :padding="20" />'
  }
})
