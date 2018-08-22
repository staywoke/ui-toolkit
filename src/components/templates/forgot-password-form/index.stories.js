import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Templates | Forgot Password Form', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const formHeader = text('Form Header', 'Forgot Password')
  const errorMessage = text('Error Message', '')

  let attributes = ''

  attributes = attributes.concat((formHeader !== 'Forgot Password') ? `form-header="${formHeader}" ` : '')
    .concat((errorMessage !== '') ? `error-message="${errorMessage}" ` : '')

  return {
    template: `<sw-forgot-password-form ${attributes} :style="{ maxWidth: '360px', margin: '0 auto', textAlign: 'left' }"
      @login="login"
      @signUp="signUp"
      @inputChanged="inputChanged"
      @hideForgotPasswordError="hideForgotPasswordError"
      @showForgotPasswordError="showForgotPasswordError"
      @forgotPasswordValid="forgotPasswordValid"
      @forgotPasswordError="forgotPasswordError"
    />`,
    methods: {
      login: action('Login Clicked'),
      signUp: action('Sign Up Clicked'),
      inputChanged: action('Input Clicked'),
      hideForgotPasswordError: action('Forgot Password Error Hidden'),
      showForgotPasswordError: action('Forgot Password Error Shown'),
      forgotPasswordValid: action('Forgot Password Valid'),
      forgotPasswordError: action('Forgot Password Error')
    }
  }
})
