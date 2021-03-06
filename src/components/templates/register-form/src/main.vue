<template>
  <el-form :model="registerForm" :rules="rules" ref="registerForm" label="top" size="small" class="register-form" status-icon>
    <el-alert :title="getErrorMessage" type="error" show-icon v-if="getErrorMessage" @close="hideError" class="register-error" />

    <el-form-item>
      <h2>{{ formHeader }}</h2>
    </el-form-item>

    <el-form-item label="Invite Code" prop="inviteCode" class="invite-code-wrapper" ref="inviteCode" v-if="inviteOnly">
      <el-input name="inviteCode" maxlength="6" minlength="6" @input="changeInput('inviteCode')" type="text" v-numbers v-model.trim="registerForm.inviteCode" />
    </el-form-item>

    <el-form-item label="Email Address" prop="email" class="email-wrapper" ref="email" v-if="requestEmail">
      <el-input name="email" @input="changeInput('email')" type="email" v-email-address v-model.trim="registerForm.email" />
    </el-form-item>

    <el-form-item label="Phone Number" prop="phone" class="phone-wrapper" ref="phone" v-if="requestPhone">
      <el-input name="phone" maxlength="10" minlength="10" @input="changeInput('phone')" type="tel" v-numbers v-model.trim="registerForm.phone" />
    </el-form-item>

    <el-form-item label="Username" prop="username" class="username-wrapper" ref="username">
      <el-input name="username" @input="changeInput('username')" type="text" v-username v-model.trim="registerForm.username" />
    </el-form-item>

    <el-form-item label="Password" prop="password" class="password-wrapper" ref="password">
      <el-input name="password" @input="changeInput('password')" type="password" v-model.trim="registerForm.password" />
    </el-form-item>

    <el-form-item label="First Name" prop="firstname" class="firstname-wrapper" ref="firstname">
      <el-input name="firstname" @input="changeInput('firstname')" type="text" v-model.trim="registerForm.firstname" />
    </el-form-item>

    <el-form-item label="Last Name" prop="lastname" class="lastname-wrapper" ref="lastname">
      <el-input name="lastname" @input="changeInput('lastname')" type="text" v-model.trim="registerForm.lastname" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" class="submit" @click="submitForm('registerForm')">Register</el-button>
    </el-form-item>

    <el-form-item class="other-options">
      <el-button type="text" class="login" @click="login">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { Username, EmailAddress, Numbers } from '../../../../directives'

import Container from '../../../organisms/container'
import Form from '../../../molecules/form'
import Alert from '../../../atoms/alert'
import FormItem from '../../../atoms/form-item'
import Input from '../../../atoms/input'
import Button from '../../../atoms/button'

export default {
  name: 'RegisterForm',
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
    Numbers
  },
  props: {
    errorMessage: {
      type: String,
      default: null
    },
    formHeader: {
      type: String,
      default: 'Register'
    },
    requestEmail: {
      type: Boolean,
      default: false
    },
    requestPhone: {
      type: Boolean,
      default: true
    },
    inviteOnly: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter a Username'))
      } else {
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

    const validateInviteCode = (rule, value, callback) => {
      if (!/^([0-9]{6})$/.test(value)) {
        callback(new Error('Invalid Invite Code'))
      }

      callback()
    }

    const validatePhoneNumber = (rule, value, callback) => {
      if (!/^([0-9]{10})$/.test(value)) {
        callback(new Error('Invalid Phone Number'))
      }

      callback()
    }

    return {
      formError: '',
      registerForm: {
        inviteCode: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        firstname: '',
        lastname: ''
      },
      rules: {
        password: [
          { required: true, message: 'Please enter a Password', trigger: 'blur' },
          { min: 8, message: 'Password to Short', trigger: 'blur' }
        ],
        email: [
          {
            type: 'email',
            required: this.requestEmail,
            message: 'Invalid Email Address',
            trigger: 'blur'
          }
        ],
        phone: [
          {
            required: this.requestPhone,
            validator: validatePhoneNumber,
            trigger: 'blur'
          }
        ],
        username: [
          {
            required: true,
            validator: validateUsername,
            trigger: 'blur'
          }
        ],
        inviteCode: [
          {
            required: this.inviteOnly,
            validator: validateInviteCode,
            trigger: 'blur'
          }
        ],
        firstname: [
          { required: true, message: 'Please enter your First Name', trigger: 'blur' }
        ],
        lastname: [
          { required: true, message: 'Please enter your Last Name', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
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
  methods: {
    changeInput (inputName) {
      this.$refs[inputName].clearValidate()

      if (inputName !== 'password') {
        this.$emit('inputChanged', {
          name: inputName,
          value: this.registerForm[inputName]
        })
      }
    },
    hideError () {
      this.formError = null
      this.$emit('hideRegisterError')
    },
    showError (message) {
      this.formError = message
      this.$emit('showRegisterError', message)
    },
    login () {
      this.$emit('login')
    },
    submitForm (formName) {
      this.hideError()
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('registerValid', this.registerForm)
        } else {
          this.showError('Check the Form Below')
          this.$emit('registerError', 'Invalid Form')
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
.register-form {
  max-width: 300px;
  text-align: left;

  .register-error {
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
