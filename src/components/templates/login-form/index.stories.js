import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text, select } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Templates | Login Form', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const loginMode = select(
    'Login Mode',
    {
      '': '---',
      'username': 'username',
      'email': 'email',
      'both': 'both'
    },
    ''
  )

  const formHeader = text('Form Header', 'StayWoke Login')

  let attributes = ''

  attributes = attributes.concat((loginMode !== '' && loginMode !== 'both') ? `login-mode="${loginMode}" ` : '')
    .concat((formHeader !== 'StayWoke Login') ? `form-header="${formHeader}" ` : '')

  attributes = attributes.trim()

  return {
    template: `<sw-login-form ${attributes}
      @signUp="signUp"
      @hideLoginError="hideLoginError"
      @showLoginError="showLoginError"
      @forgotPassword="forgotPassword"
      @loginSuccess="loginSuccess"
      @loginError="loginError"
    />`,
    methods: {
      signUp: action('Sign Up Clicked'),
      hideLoginError: action('Login Error Hidden'),
      showLoginError: action('Login Error Shown'),
      forgotPassword: action('Forgot Password Clicked'),
      loginSuccess: action('Login Success'),
      loginError: action('Login Error')
    }
  }
})
