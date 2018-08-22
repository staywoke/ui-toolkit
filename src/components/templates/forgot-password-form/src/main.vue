<template>
  <el-form :model="forgotPasswordForm" :rules="rules" ref="forgotPasswordForm" label="top" size="small" class="forgot-password-form" status-icon>
    <el-alert :title="getErrorMessage" type="error" show-icon v-if="getErrorMessage" @close="hideError" class="forgot-password-error" />

    <el-form-item>
      <h2>{{ formHeader }}</h2>
    </el-form-item>

    <el-form-item label="Email Address" prop="email" class="email-wrapper" ref="email">
      <el-input @input="changeInput('email')" type="email" name="email" v-email-address v-model.trim="forgotPasswordForm.email" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" class="submit" @click="submitForm('forgotPasswordForm')">Request New Password</el-button>
    </el-form-item>

    <el-form-item class="other-options">
      <el-button type="text" class="login" @click="login">Login</el-button>
      <span>|</span>
      <el-button type="text" class="sign-up" @click="signUp">Sign Up</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { EmailAddress } from '../../../../directives'

import Container from '../../../organisms/container'
import Form from '../../../molecules/form'
import Alert from '../../../atoms/alert'
import FormItem from '../../../atoms/form-item'
import Input from '../../../atoms/input'
import Button from '../../../atoms/button'

export default {
  name: 'ForgotPasswordForm',
  components: {
    Container,
    Form,
    Alert,
    FormItem,
    Input,
    Button
  },
  directives: {
    EmailAddress
  },
  props: {
    errorMessage: {
      type: String,
      default: null
    },
    formHeader: {
      type: String,
      default: 'Forgot Password'
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
  data () {
    return {
      formError: '',
      forgotPasswordForm: {
        email: ''
      },
      rules: {
        email: [
          {
            type: 'email',
            required: true,
            message: 'Invalid Email Address',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    changeInput (inputName) {
      this.$refs[inputName].clearValidate()

      this.$emit('inputChanged', {
        name: inputName,
        value: this.forgotPasswordForm[inputName]
      })
    },
    hideError () {
      this.formError = null
      this.$emit('hideForgotPasswordError')
    },
    showError (message) {
      this.formError = message
      this.$emit('showForgotPasswordError', message)
    },
    login () {
      this.$emit('login')
    },
    signUp () {
      this.$emit('signUp')
    },
    submitForm (formName) {
      this.hideError()
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('forgotPasswordValid', this.forgotPasswordForm)
        } else {
          this.showError('Invalid Email Address')
          this.$emit('forgotPasswordError', 'Invalid Form')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.forgot-password-form {
  max-width: 300px;
  text-align: left;

  .forgot-password-error {
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
