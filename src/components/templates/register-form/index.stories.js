import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text, select } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Templates | Register Form', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const registerMode = select(
    'Register Mode',
    {
      '': '---',
      'username': 'username',
      'email': 'email',
      'both': 'both'
    },
    ''
  )

  const formHeader = text('Form Header', 'Register')

  let attributes = ''

  attributes = attributes.concat((registerMode !== '' && registerMode !== 'both') ? `register-mode="${registerMode}" ` : '')
    .concat((formHeader !== 'Register') ? `form-header="${formHeader}" ` : '')

  attributes = attributes.trim()

  return {
    template: `<sw-register-form ${attributes}
      @signUp="signUp"
      @hideRegisterError="hideRegisterError"
      @showRegisterError="showRegisterError"
      @forgotPassword="forgotPassword"
      @registerSuccess="registerSuccess"
      @registerError="registerError"
    />`,
    methods: {
      signUp: action('Sign Up Clicked'),
      hideRegisterError: action('Register Error Hidden'),
      showRegisterError: action('Register Error Shown'),
      forgotPassword: action('Forgot Password Clicked'),
      registerSuccess: action('Register Success'),
      registerError: action('Register Error')
    }
  }
})
