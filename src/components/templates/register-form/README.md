Atom › Register Form
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<sw-register-form
  @signUp="signUp"
  @inputChanged="inputChanged"
  @hideRegisterError="hideRegisterError"
  @showRegisterError="showRegisterError"
  @forgotPassword="forgotPassword"
  @registerValid="registerValid"
  @registerError="registerError"
/>
```


#### Script:
```js
import { RegisterForm } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    RegisterForm
  },
  methods: {
    signUp() {
      console.log('Sign Up Clicked')
    },
    inputChanged(input) {
      console.log('Input Changed', input)
    },
    hideRegisterError() {
      console.log('Register Error Hidden')
    },
    showRegisterError(message) {
      console.error('Register Error Shown', message)
    },
    forgotPassword() {
      console.log('Forgot Password Clicked')
    },
    registerValid() {
      console.log('Register Valid')
    },
    registerError(message) {
      console.error('Register Error', message)
    }
  }
}
```


#### Attributes:

Attribute         | Description                    | Type     | Accepted Values       | Default
------------------|--------------------------------|----------|-----------------------|------------
formHeader        | Form Header                    | string   | --                    | StayWoke Register
registerMode      | Register Mode ( username type) | string   | username, email, both | both
signUp            | Sign Up Link Clicked           | function | --                    | --
inputChanged      | Input Changed                  | function | --                    | --
hideRegisterError | Register Error Message Closed  | function | --                    | --
showRegisterError | Register Error Message Shown   | function | --                    | --
forgotPassword    | Forgot Password Link Clicked   | function | --                    | --
registerValid     | Register Form Valid            | function | --                    | --
registerError     | Register Form Invalid          | function | --                    | --


#### Documentation:

* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/templates/register-form)
