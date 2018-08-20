import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text, select } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Templates | Forgot Password Form', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const forgotPasswordMode = select(
    'ForgotPassword Mode',
    {
      '': '---',
      'username': 'username',
      'email': 'email',
      'both': 'both'
    },
    ''
  )

  const formHeader = text('Form Header', 'Forgot Password')

  let attributes = ''

  attributes = attributes.concat((forgotPasswordMode !== '' && forgotPasswordMode !== 'both') ? `forgotPassword-mode="${forgotPasswordMode}" ` : '')
    .concat((formHeader !== 'ForgotPassword') ? `form-header="${formHeader}" ` : '')

  attributes = attributes.trim()

  return {
    template: `<sw-forgot-password-form ${attributes}
      @signUp="signUp"
      @hideForgotPasswordError="hideForgotPasswordError"
      @showForgotPasswordError="showForgotPasswordError"
      @forgotPassword="forgotPassword"
      @forgotPasswordSuccess="forgotPasswordSuccess"
      @forgotPasswordError="forgotPasswordError"
    />`,
    methods: {
      signUp: action('Sign Up Clicked'),
      hideForgotPasswordError: action('ForgotPassword Error Hidden'),
      showForgotPasswordError: action('ForgotPassword Error Shown'),
      forgotPassword: action('Forgot Password Clicked'),
      forgotPasswordSuccess: action('ForgotPassword Success'),
      forgotPasswordError: action('ForgotPassword Error')
    }
  }
})
