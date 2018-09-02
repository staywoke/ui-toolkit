<template>
  <el-form :model="loginForm" :rules="rules" ref="loginForm" label="top" size="small" class="login-form" status-icon>
    <el-alert :title="getErrorMessage" type="error" show-icon v-if="getErrorMessage" @close="hideError" class="login-error" />

    <el-form-item>
      <h2>{{ formHeader }}</h2>
    </el-form-item>

    <el-form-item :label="usernameLabel" prop="username" class="username-wrapper" ref="username">
      <el-input v-if="loginMode === 'username'" @input="changeInput('username')" type="text" name="username" v-username v-model.trim="loginForm.username" />
      <el-input v-if="loginMode === 'phone'" @input="changeInput('username')" type="tel" name="username" v-numbers v-model.trim="loginForm.username" />
      <el-input v-if="loginMode === 'both'" @input="changeInput('username')" type="text" name="username" v-mixed v-model.trim="loginForm.username" />
    </el-form-item>

    <el-form-item label="Password" prop="password" class="password-wrapper" ref="password">
      <el-input name="password" @input="changeInput('password')" type="password" v-model.trim="loginForm.password" />
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
import { Username, Mixed, Numbers } from '../../../../directives'

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
    Mixed,
    Numbers
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
        const validTypes = ['username', 'phone', 'both']
        return validTypes.indexOf(value) !== -1
      }
    }
  },
  computed: {
    usernameLabel () {
      return this.getUsernameLabel()
    },
    getErrorMessage () {
      if (this.formError) {
        return this.formError
      } else if (this.errorMessage) {
        return this.errorMessage
      } else {
        return null
      }
    }
  },
  data () {
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(`Please enter a ${this.getUsernameLabel()}`))
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

    const validatePhoneNumber = (rule, value, callback) => {
      if (!/^([0-9]{10})$/.test(value)) {
        callback(new Error('Invalid Phone Number'))
      }

      callback()
    }

    const validate = (rule, value, callback) => {
      if (/^([^a-zA-Z ]+)$/.test(value)) {
        return validatePhoneNumber(rule, value, callback)
      } else {
        return validateUsername(rule, value, callback)
      }
    }

    return {
      formError: '',
      loginForm: {
        password: '',
        username: ''
      },
      rules: {
        password: [
          { required: true, message: 'Please enter your password', trigger: 'blur' },
          { min: 8, message: 'Password to Short', trigger: 'blur' }
        ],
        username: [
          {
            required: true,
            validator: validate,
            message: 'Invalid Username',
            trigger: 'blur'
          }
        ]
      }
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
        ? 'Username or Phone Number'
        : (this.loginMode === 'username')
          ? 'Username'
          : 'Phone Number'
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
