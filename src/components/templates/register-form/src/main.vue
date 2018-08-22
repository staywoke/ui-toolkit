<template>
  <el-form :model="registerForm" :rules="rules" ref="registerForm" label="top" size="small" class="register-form" status-icon autocomplete="off">
    <el-alert :title="formError" type="error" show-icon v-if="formError" @close="hideError" class="register-error" />

    <el-form-item>
      <h2>{{ formHeader }}</h2>
    </el-form-item>

    <el-form-item label="Invite Code" prop="inviteCode" class="invite-code-wrapper" ref="inviteCode" v-if="inviteOnly">
      <el-input name="inviteCode" maxlength="6" minlength="6" @input="changeInput('inviteCode')" type="text" v-numbers v-model.trim="registerForm.inviteCode" autocomplete="off" />
    </el-form-item>

    <el-form-item label="Email Address" prop="email" class="email-wrapper" ref="email">
      <el-input name="email" @input="changeInput('email')" type="email" v-email-address v-model.trim="registerForm.email" autocomplete="off" />
    </el-form-item>

    <el-form-item label="Username" prop="username" class="username-wrapper" ref="username">
      <el-input name="username" @input="changeInput('username')" type="text" v-username v-model.trim="registerForm.username" autocomplete="off" />
    </el-form-item>

    <el-form-item label="Password" prop="password" class="password-wrapper" ref="password">
      <el-input name="password" @input="changeInput('password')" type="password" v-model.trim="registerForm.password" autocomplete="off" />
    </el-form-item>

    <el-form-item label="First Name" prop="firstname" class="firstname-wrapper" ref="firstname">
      <el-input name="firstname" @input="changeInput('firstname')" type="text" v-model.trim="registerForm.firstname" autocomplete="off" />
    </el-form-item>

    <el-form-item label="Last Name" prop="lastname" class="lastname-wrapper" ref="lastname">
      <el-input name="lastname" @input="changeInput('lastname')" type="text" v-model.trim="registerForm.lastname" autocomplete="off" />
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
    formHeader: {
      type: String,
      default: 'Register'
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

    return {
      formError: null,
      registerForm: {
        inviteCode: '',
        username: '',
        email: '',
        password: '',
        firstname: '',
        lastname: ''
      },
      rules: {
        password: [
          { required: true, message: 'Please enter a Password', trigger: 'blur' },
          { min: 6, message: 'Password to Short', trigger: 'blur' }
        ],
        email: [
          {
            type: 'email',
            required: true,
            message: 'Invalid Email Address',
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
