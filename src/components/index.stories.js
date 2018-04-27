import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'

import Welcome from './welcome.vue'
import README from './README.md'

const stories = storiesOf('UI Toolkit | Welcome', module)

stories.addDecorator(Centered)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Getting Started', () => ({
  render: h => h(Welcome)
}))
