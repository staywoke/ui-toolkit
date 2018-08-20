Atom › Forgot Password Form
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<sw-forgot-password-form
  @signUp="signUp"
  @hideForgotPasswordError="hideForgotPasswordError"
  @showForgotPasswordError="showForgotPasswordError"
  @forgotPassword="forgotPassword"
  @forgotPasswordSuccess="forgotPasswordSuccess"
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
    signUp() {
      console.log('Sign Up Clicked')
    },
    hideForgotPasswordError() {
      console.log('Forgot Password Error Hidden')
    },
    showForgotPasswordError(message) {
      console.error('Forgot Password Error Shown', message)
    },
    forgotPassword() {
      console.log('Forgot Password Clicked')
    },
    forgotPasswordSuccess() {
      console.log('Forgot Password Success')
    },
    forgotPasswordError(message) {
      console.error('Forgot Password Error', message)
    }
  }
}
```


#### Attributes:

Attribute      | Description                  | Type     | Accepted Values       | Default
---------------|------------------------------|----------|-----------------------|------------
formHeader     | Form Header                  | string   | --                    | StayWoke ForgotPassword
forgotPasswordMode      | Forgot Password Mode ( username type)  | string   | username, email, both | both
signUp         | Sign Up Link Clicked         | function | --                    | --
hideForgotPasswordError | Forgot Password Error Message Closed   | function | --                    | --
showForgotPasswordError | Forgot Password Error Message Shown    | function | --                    | --
forgotPassword | Forgot Password Link Clicked | function | --                    | --
forgotPasswordSuccess   | Forgot Password Form Valid             | function | --                    | --
forgotPasswordError     | Forgot Password Form Invalid           | function | --                    | --


#### Documentation:

* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/templates/forgot-password-form)
