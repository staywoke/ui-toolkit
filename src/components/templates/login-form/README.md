Atom › Login Form
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<sw-login-form
  @signUp="signUp"
  @hideLoginError="hideLoginError"
  @showLoginError="showLoginError"
  @forgotPassword="forgotPassword"
  @loginSuccess="loginSuccess"
  @loginError="loginError"
/>
```


#### Script:
```js
import { LoginForm } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    LoginForm
  },
  methods: {
    signUp() {
      console.log('Sign Up Clicked')
    },
    hideLoginError() {
      console.log('Login Error Hidden')
    },
    showLoginError(message) {
      console.error('Login Error Shown', message)
    },
    forgotPassword() {
      console.log('Forgot Password Clicked')
    },
    loginSuccess() {
      console.log('Login Success')
    },
    loginError(message) {
      console.error('Login Error', message)
    }
  }
}
```


#### Attributes:

Attribute      | Description                  | Type     | Accepted Values       | Default
---------------|------------------------------|----------|-----------------------|------------
formHeader     | Form Header                  | string   | --                    | StayWoke Login
loginMode      | Login Mode ( username type)  | string   | username, email, both | both
signUp         | Sign Up Link Clicked         | function | --                    | --
hideLoginError | Login Error Message Closed   | function | --                    | --
showLoginError | Login Error Message Shown    | function | --                    | --
forgotPassword | Forgot Password Link Clicked | function | --                    | --
loginSuccess   | Login Form Valid             | function | --                    | --
loginError     | Login Form Invalid           | function | --                    | --


#### Documentation:

* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/templates/login-form)
