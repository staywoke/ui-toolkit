import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Templates | Register Form', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const inviteOnly = boolean('Invite Only', true)
  const requestEmail = boolean('Request Email', false)
  const requestPhone = boolean('Request Phone', true)

  const formHeader = text('Form Header', 'Register')
  const errorMessage = text('Error Message', '')

  let attributes = ''

  attributes = attributes.concat((formHeader !== 'Register') ? `form-header="${formHeader}" ` : '')
    .concat((inviteOnly) ? 'invite-only ' : '')
    .concat((requestEmail) ? 'request-email ' : '')
    .concat((requestPhone) ? 'request-phone ' : '')
    .concat((errorMessage !== '') ? `error-message="${errorMessage}" ` : '')

  attributes = attributes.trim()

  return {
    template: `<sw-register-form ${attributes} :style="{ maxWidth: '360px', margin: '0 auto', textAlign: 'left' }"
      @signUp="signUp"
      @inputChanged="inputChanged"
      @hideRegisterError="hideRegisterError"
      @showRegisterError="showRegisterError"
      @forgotPassword="forgotPassword"
      @registerValid="registerSuccess"
      @registerError="registerValid"
    />`,
    methods: {
      signUp: action('Sign Up Clicked'),
      inputChanged: action('Input Changed'),
      hideRegisterError: action('Register Error Hidden'),
      showRegisterError: action('Register Error Shown'),
      forgotPassword: action('Forgot Password Clicked'),
      registerSuccess: action('Register Success'),
      registerValid: action('Register Valid')
    }
  }
})
