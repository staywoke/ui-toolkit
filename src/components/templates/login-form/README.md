Atom › Login Form
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<sw-login-form
  @signUp="signUp"
  @inputChanged="inputChanged"
  @hideLoginError="hideLoginError"
  @showLoginError="showLoginError"
  @forgotPassword="forgotPassword"
  @loginValid="loginValid"
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
    inputChanged(input) {
      console.log('Input Changed', input)
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
    loginValid() {
      console.log('Login Valid')
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
inputChanged   | Input Changed                | function | --                    | --
hideLoginError | Login Error Message Closed   | function | --                    | --
showLoginError | Login Error Message Shown    | function | --                    | --
forgotPassword | Forgot Password Link Clicked | function | --                    | --
loginValid     | Login Form Valid             | function | --                    | --
loginError     | Login Form Invalid           | function | --                    | --


#### Documentation:

* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/templates/login-form)
