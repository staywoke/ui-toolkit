Atom › Forgot Password Form
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<sw-forgot-password-form
  @login="login"
  @signUp="signUp"
  @inputChanged="inputChanged"
  @hideForgotPasswordError="hideForgotPasswordError"
  @showForgotPasswordError="showForgotPasswordError"
  @forgotPasswordValid="forgotPasswordValid"
  @forgotPasswordError="forgotPasswordError"
/>
```


#### Script:
```js
import { ForgotPasswordForm } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    ForgotPasswordForm
  },
  methods: {
    login() {
      console.log('Login Clicked')
    },
    signUp() {
      console.log('Sign Up Clicked')
    },
    inputChanged(input) {
      console.log('Input Changed', input)
    },
    hideForgotPasswordError() {
      console.log('Forgot Password Error Hidden')
    },
    showForgotPasswordError(message) {
      console.error('Forgot Password Error Shown', message)
    },
    forgotPasswordValid() {
      console.log('Forgot Password Valid')
    },
    forgotPasswordError(message) {
      console.error('Forgot Password Error', message)
    }
  }
}
```


#### Attributes:

Attribute               | Description                          | Type     | Accepted Values       | Default
------------------------|--------------------------------------|----------|-----------------------|------------
formHeader              | Form Header                          | string   | --                    | StayWoke ForgotPassword
errorMessage            | Error Message                        | string   | --                    | --
login                   | Login Link Clicked                   | function | --                    | --
signUp                  | Sign Up Link Clicked                 | function | --                    | --
inputChanged            | Input Changed                        | function | --                    | --
hideForgotPasswordError | Forgot Password Error Message Closed | function | --                    | --
showForgotPasswordError | Forgot Password Error Message Shown  | function | --                    | --
forgotPasswordSuccess   | Forgot Password Form Valid           | function | --                    | --
forgotPasswordError     | Forgot Password Form Invalid         | function | --                    | --


#### Documentation:

* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/templates/forgot-password-form)
