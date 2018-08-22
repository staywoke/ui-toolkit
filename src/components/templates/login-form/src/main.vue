<template>
  <el-form :model="loginForm" :rules="rules" ref="loginForm" label="top" size="small" class="login-form" status-icon>
    <el-alert :title="formError" type="error" show-icon v-if="formError" @close="hideError" class="login-error" />

    <el-form-item>
      <h2>{{ formHeader }}</h2>
    </el-form-item>

    <el-form-item :label="usernameLabel" prop="username" class="username-wrapper" ref="username">
      <el-input v-if="loginMode === 'username'" @input="changeInput('username')" type="text" name="username" v-username v-model.trim="loginForm.username" autocomplete="off" />
      <el-input v-if="loginMode === 'email'" @input="changeInput('username')" type="email" name="username" v-email-address v-model.trim="loginForm.username" autocomplete="off" />
      <el-input v-if="loginMode === 'both'" @input="changeInput('username')" type="text" name="username" v-mixed v-model.trim="loginForm.username" autocomplete="off" />
    </el-form-item>

    <el-form-item label="Password" prop="password" class="password-wrapper" ref="password">
      <el-input name="password" @input="changeInput('password')" type="password" v-model.trim="loginForm.password" autocomplete="off" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" class="submit" @click="submitForm('loginForm')">Login</el-button>
    </el-form-item>

    <el-form-item class="other-options">
      <el-button type="text" class="forgot-password" @click="forgotPassword">Forgot Password</el-button>
      <span>|</span>
      <el-button type="text" class="sign-up" @click="signUp">Sign Up</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Username, EmailAddress, Mixed } from '../../../../directives'

import Container from '../../../organisms/container'
import Form from '../../../molecules/form'
import Alert from '../../../atoms/alert'
import FormItem from '../../../atoms/form-item'
import Input from '../../../atoms/input'
import Button from '../../../atoms/button'

export default {
  name: 'LoginForm',
  components: {
    Container,
    Form,
    Alert,
    FormItem,
    Input,
    Button
  },
  directives: {
    Username,
    EmailAddress,
    Mixed
  },
  props: {
    errorMessage: {
      type: String,
      default: null
    },
    formHeader: {
      type: String,
      default: 'Login'
    },
    loginMode: {
      type: String,
      default: 'both',
      validator: value => {
        const validTypes = ['username', 'email', 'both']
        return validTypes.indexOf(value) !== -1
      }
    }
  },
  computed: {
    usernameLabel () {
      return this.getUsernameLabel()
    }
  },
  data () {
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(`Please enter a ${this.getUsernameLabel()}`))
      }

      if (value !== '' && value.indexOf('@') !== -1 && !this.validEmail(value)) {
        callback(new Error('Invalid Email Address'))
      }

      if (value !== '' && value.indexOf('@') === -1) {
        if (value.length < 6) {
          callback(new Error('Username to Short'))
        } else if (value.charAt(0) === '_') {
          callback(new Error('Username cannot start with _'))
        } else if (!this.validUsername(value)) {
          callback(new Error('Invalid Username'))
        }
      }

      callback()
    }

    return {
      formError: this.errorMessage  || '',
      loginForm: {
        password: '',
        username: ''
      },
      rules: {
        password: [
          { required: true, message: 'Please enter your password', trigger: 'blur' },
          { min: 6, message: 'Password to Short', trigger: 'blur' }
        ],
        username: [
          {
            type: (this.loginMode === 'email') ? 'email' : null,
            required: true,
            validator: (this.loginMode === 'email') ? null : validateUsername,
            message: (this.loginMode === 'email') ? 'Invalid Email Address' : null,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  watch: {
    errorMessage: (error) => {
      this.formError = error
    }
  },
  methods: {
    changeInput (inputName) {
      this.$refs[inputName].clearValidate()

      if (inputName !== 'password') {
        this.$emit('inputChanged', {
          name: inputName,
          value: this.loginForm[inputName]
        })
      }
    },
    getUsernameLabel () {
      return (this.loginMode === 'both')
        ? 'Username or Email Address'
        : (this.loginMode === 'username')
          ? 'Username'
          : 'Email Address'
    },
    hideError () {
      this.formError = null
      this.$emit('hideLoginError')
    },
    showError (message) {
      this.formError = message
      this.$emit('showLoginError', message)
    },
    forgotPassword () {
      this.$emit('forgotPassword')
    },
    signUp () {
      this.$emit('signUp')
    },
    submitForm (formName) {
      this.hideError()
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('loginValid', this.loginForm)
        } else {
          this.showError('Check your Username & Password')
          this.$emit('loginError', 'Invalid Form')
          return false
        }
      })
    },
    validUsername (username) {
      var re = /^([a-zA-Z][a-zA-Z0-9_]{4,28}[a-zA-Z0-9]$)$/
      return re.test(username)
    },
    validEmail (email) {
      // eslint-disable-next-line no-useless-escape
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  max-width: 300px;
  text-align: left;

  .login-error {
    margin-bottom: 20px;
  }

  h2 {
    font-weight: 400;
    padding: 0;
    margin: 0;
  }

  .other-options {
    color: #909399;

    span {
      display: inline-block;
      padding: 0 8px;
      color: #DDD;
    }

    .el-button {
      color: #606266;
      font-weight: 400;
      transition: all 0.25s ease-in-out;

      &:hover {
        color: #409EFF;
      }
    }
  }
}
</style>
