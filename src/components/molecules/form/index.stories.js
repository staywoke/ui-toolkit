import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean } from '@storybook/addon-knobs/vue'

/* eslint-disable no-unused-vars */
import Component from '.'
import FormItem from '../../atoms/form-item'
import Input from '../../atoms/input'
import Button from '../../atoms/button'
import DatePicker from '../../atoms/date-picker'
import README from './README.md'

const stories = storiesOf('Molecules | Form', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const position = select(
    'Label Position',
    {
      '': '---',
      'left': 'left',
      'right': 'right',
      'top': 'top'
    },
    ''
  )

  const sizes = select(
    'Size',
    {
      '': '---',
      'large': 'large',
      'medium': 'medium',
      'small': 'small',
      'mini': 'mini'
    },
    ''
  )

  const showMessage = boolean('Show Message', true)
  const inlineMessage = boolean('Inline Message', false)
  const statusIcon = boolean('Status Icon', false)
  const disabled = boolean('Disabled', false)

  let attributes = ''

  attributes = attributes.concat((sizes !== '') ? `size="${sizes}" ` : '')
    .concat((position !== '' && position !== 'right') ? `label-position="${position}" ` : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((inlineMessage) ? 'inline-message ' : '')
    .concat((statusIcon) ? 'status-icon ' : '')
    .concat((!showMessage) ? `:show-message="false" ` : '')

  attributes = attributes.trim()

  return {
    template: `<el-form ${attributes} :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" style="max-width: 480px; text-align: left;">
      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Confirm" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Age" prop="age">
        <el-input v-model.number="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
        <el-button @click="resetForm('ruleForm')">Reset</el-button>
      </el-form-item>
    </el-form>`,
    data () {
      const checkAge = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('Please input the age'))
        }
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'))
        } else {
          if (value < 18) {
            callback(new Error('Age must be greater than 18'))
          } else {
            callback()
          }
        }
      }

      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password'))
        } else {
          this.$refs.ruleForm.validateField('checkPass')
          callback()
        }
      }

      const validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input the password again'))
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('Two inputs don\'t match!'))
        } else {
          callback()
        }
      }

      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('SUCCESS')
          } else {
            console.log('ERROR')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
})

stories.add('› Default', () => {
  return {
    template: `<el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="120px" style="max-width: 480px; text-align: left;">
      <el-form-item label="Username" prop="username">
        <el-input v-model="loginForm.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password" prop="pass">
        <el-input type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">Login</el-button>
      </el-form-item>
    </el-form>`,
    data () {
      const validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input a username'))
        } else {
          callback()
        }
      }

      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please input your password'))
        } else {
          callback()
        }
      }

      return {
        loginForm: {
          pass: '',
          username: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('SUCCESS')
          } else {
            console.log('ERROR')
            return false
          }
        })
      }
    }
  }
})

stories.add('› Inline Form', () => {
  return {
    template: `<el-form :inline="true">
      <el-form-item label="Username">
        <el-input auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Login</el-button>
      </el-form-item>
    </el-form>`
  }
})

stories.add('› Validate Number', () => {
  return {
    template: `<el-form :model="validateForm" ref="validateForm" label-width="100px" class="demo-ruleForm" style="max-width: 480px; text-align: left;">
      <el-form-item label="Age" prop="age" :rules="rules">
        <el-input type="age" v-model.number="validateForm.age" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('validateForm')">Submit</el-button>
        <el-button @click="resetForm('validateForm')">Reset</el-button>
      </el-form-item>
    </el-form>`,
    data () {
      return {
        validateForm: {
          age: ''
        },
        rules: [
          { required: true, message: 'age is required' },
          { type: 'number', message: 'age must be a number' }
        ]
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('SUCCESS')
          } else {
            console.log('ERROR')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
})

stories.add('› Validate Email', () => {
  return {
    template: `<el-form :model="validateForm" ref="validateForm" label-width="100px" class="demo-ruleForm" style="max-width: 480px; text-align: left;">
      <el-form-item label="Email" prop="email" :rules="rules">
        <el-input type="email" v-model.number="validateForm.email" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('validateForm')">Submit</el-button>
        <el-button @click="resetForm('validateForm')">Reset</el-button>
      </el-form-item>
    </el-form>`,
    data () {
      return {
        validateForm: {
          email: ''
        },
        rules: [
          { required: true, message: 'email is required' },
          { type: 'email', message: 'invalid email address' }
        ]
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('SUCCESS')
          } else {
            console.log('ERROR')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
})

stories.add('› Validate Date', () => {
  return {
    template: `<el-form :model="validateForm" ref="validateForm" label-width="100px" class="demo-ruleForm" style="max-width: 480px; text-align: left;">
      <el-form-item label="Date" prop="date" :rules="rules">
        <el-date-picker type="date" placeholder="Pick a date" v-model="validateForm.date"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('validateForm')">Submit</el-button>
        <el-button @click="resetForm('validateForm')">Reset</el-button>
      </el-form-item>
    </el-form>`,
    data () {
      return {
        validateForm: {
          date: ''
        },
        rules: [
          { required: true, message: 'date is required' },
          { type: 'date', message: 'invalid date' }
        ]
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('SUCCESS')
          } else {
            console.log('ERROR')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
})

stories.add('› Validate Length', () => {
  return {
    template: `<el-form :model="validateForm" ref="validateForm" label-width="100px" class="demo-ruleForm" style="max-width: 480px; text-align: left;">
      <el-form-item label="Name" prop="name" :rules="rules">
        <el-input type="name" v-model.number="validateForm.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('validateForm')">Submit</el-button>
        <el-button @click="resetForm('validateForm')">Reset</el-button>
      </el-form-item>
    </el-form>`,
    data () {
      return {
        validateForm: {
          name: ''
        },
        rules: [
          { required: true, message: 'Name is required' },
          { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
        ]
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('SUCCESS')
          } else {
            console.log('ERROR')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
})

stories.add('› Align Left', () => {
  return {
    template: `<el-form label-width="120px" label-position="left" style="max-width: 480px; text-align: left;">
      <el-form-item label="Username">
        <el-input auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Login</el-button>
      </el-form-item>
    </el-form>`
  }
})

stories.add('› Align Right', () => {
  return {
    template: `<el-form label-width="120px" label-position="right" style="max-width: 480px; text-align: left;">
      <el-form-item label="Username">
        <el-input auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Login</el-button>
      </el-form-item>
    </el-form>`
  }
})

stories.add('› Align Top', () => {
  return {
    template: `<el-form label-width="120px" label-position="top" style="max-width: 480px; text-align: left;">
      <el-form-item label="Username">
        <el-input auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Login</el-button>
      </el-form-item>
    </el-form>`
  }
})

stories.add('› Size Large', () => {
  return {
    template: `<el-form label-width="120px" size="large" style="max-width: 480px; text-align: left;">
      <el-form-item label="Username">
        <el-input auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Login</el-button>
      </el-form-item>
    </el-form>`
  }
})

stories.add('› Size Medium', () => {
  return {
    template: `<el-form label-width="120px" size="medium" style="max-width: 480px; text-align: left;">
      <el-form-item label="Username">
        <el-input auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Login</el-button>
      </el-form-item>
    </el-form>`
  }
})

stories.add('› Size Small', () => {
  return {
    template: `<el-form label-width="120px" size="small" style="max-width: 480px; text-align: left;">
      <el-form-item label="Username">
        <el-input auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Login</el-button>
      </el-form-item>
    </el-form>`
  }
})

stories.add('› Size Mini', () => {
  return {
    template: `<el-form label-width="120px" size="mini" style="max-width: 480px; text-align: left;">
      <el-form-item label="Username">
        <el-input auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input type="password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Login</el-button>
      </el-form-item>
    </el-form>`
  }
})
