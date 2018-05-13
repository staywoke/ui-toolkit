import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, boolean, number, select, text } from '@storybook/addon-knobs/vue'

/* eslint-disable no-unused-vars */
import Component from '.'
import Step from '../../atoms/step'
import README from './README.md'

const stories = storiesOf('Molecules | Steps', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const direction = select(
    'Direction',
    {
      '': '---',
      'vertical': 'vertical',
      'horizontal': 'horizontal'
    },
    ''
  )

  const processStatus = select(
    'Process Status',
    {
      '': '---',
      'wait': 'wait',
      'process': 'process',
      'finish': 'finish',
      'error': 'error',
      'success': 'success'
    },
    ''
  )

  const finishStatus = select(
    'Finish Status',
    {
      '': '---',
      'wait': 'wait',
      'process': 'process',
      'finish': 'finish',
      'error': 'error',
      'success': 'success'
    },
    ''
  )

  const active = number('active', 1, { min: 1, max: 4 })
  const space = text('space', '')

  const alignCenter = boolean('align-center', true)
  const simple = boolean('simple', false)

  let attributes = ''

  attributes = attributes.concat((space !== '') ? `space="${space}"` : '')
    .concat((direction === 'vertical') ? `direction="${direction}"` : '')
    .concat((active) ? `:active="${active}" ` : '')
    .concat((processStatus) ? `process-status="${processStatus}"` : '')
    .concat((finishStatus) ? `finish-status="${finishStatus}"` : '')
    .concat((alignCenter) ? 'align-center ' : '')
    .concat((simple) ? 'simple ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-steps ${attributes}>
      <el-step title="Step 1" description="Some description" />
      <el-step title="Step 2" description="Some description" />
      <el-step title="Step 3" description="Some description" />
      <el-step title="Step 4" description="Some description" />
    </el-steps>`
  }
})

stories.add('› Default', () => {
  return {
    template: `<el-steps :active="1">
      <el-step title="Step 1"></el-step>
      <el-step title="Step 2"></el-step>
      <el-step title="Step 3"></el-step>
    </el-steps>`
  }
})

stories.add('› Finish Status', () => {
  return {
    template: `<el-steps :active="1" finish-status="success">
      <el-step title="Step 1"></el-step>
      <el-step title="Step 2"></el-step>
      <el-step title="Step 3"></el-step>
    </el-steps>`
  }
})

stories.add('› Center', () => {
  return {
    template: `<el-steps :active="2" align-center>
    <el-step title="Step 1"></el-step>
    <el-step title="Step 2"></el-step>
    <el-step title="Step 3"></el-step>
    <el-step title="Step 4"></el-step>
  </el-steps>`
  }
})

stories.add('› Descriptions', () => {
  return {
    template: `<el-steps :active="2">
    <el-step title="Step 1" description="Some description"></el-step>
    <el-step title="Step 2" description="Some description"></el-step>
    <el-step title="Step 3" description="Some description"></el-step>
    <el-step title="Step 4" description="Some description"></el-step>
  </el-steps>`
  }
})

stories.add('› Custom Icons', () => {
  return {
    template: `<el-steps :active="1">
    <el-step title="Step 1" icon="el-icon-edit"></el-step>
    <el-step title="Step 2" icon="el-icon-upload"></el-step>
    <el-step title="Step 3" icon="el-icon-picture"></el-step>
  </el-steps>`
  }
})

stories.add('› Vertical', () => {
  return {
    template: `<el-steps direction="vertical" :active="1" style="height: 120px;">
      <el-step title="Step 1"></el-step>
      <el-step title="Step 2"></el-step>
      <el-step title="Step 3"></el-step>
    </el-steps>`
  }
})

stories.add('› Simple', () => {
  return {
    template: `<el-steps :active="1" finish-status="success" simple>
      <el-step title="Step 1" ></el-step>
      <el-step title="Step 2" ></el-step>
      <el-step title="Step 3" ></el-step>
    </el-steps>`
  }
})
