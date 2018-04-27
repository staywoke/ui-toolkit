import VueInfoAddon from 'storybook-addon-vue-info'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, text, number } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'

/* eslint-disable-next-line no-unused-vars */
import Row from '../row'

import README from './README.md'

const stories = storiesOf('Molecules | Columns & Rows', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const span = number('Span', 24, {
    min: 0,
    max: 24
  })

  const offset = number('Offset', 0, {
    min: 0,
    max: 23
  })

  const push = number('Push', 0, {
    min: 0,
    max: 23
  })

  const pull = number('Pull', 0, {
    min: 0,
    max: 23
  })

  const xs = number('xs', 0)
  const sm = number('sm', 0)
  const md = number('md', 0)
  const lg = number('lg', 0)
  const xl = number('xl', 0)

  const tag = text('Tag', '')

  let attributes = ''

  attributes = attributes.concat((span !== 24) ? `span="${span}" ` : '')
    .concat((offset !== 0) ? `offset="${offset}" ` : '')
    .concat((push !== 0) ? `push="${push}" ` : '')
    .concat((pull !== 0) ? `pull="${pull}" ` : '')

    .concat((xs !== 0) ? `xs="${xs}" ` : '')
    .concat((sm !== 0) ? `sm="${sm}" ` : '')
    .concat((md !== 0) ? `md="${md}" ` : '')
    .concat((lg !== 0) ? `lg="${lg}" ` : '')
    .concat((xl !== 0) ? `xl="${xl}" ` : '')

    .concat((tag !== '') ? `tag="${tag}" ` : '')

  attributes = attributes.trim()

  return {
    template: `<el-row type="flex" class="row-bg"><el-col ${attributes}><div class="grid-content bg-purple-dark">COL</div></el-col></el-row>`
  }
})

stories.add('› Default', () => {
  return {
    template: `<el-row>
      <el-col><div class="grid-content bg-purple">A</div></el-col>
    </el-row>`
  }
})

stories.add('› 2 Columns', () => {
  return {
    template: `<el-row>
      <el-col :span="12"><div class="grid-content bg-purple">A</div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light">B</div></el-col>
    </el-row>`
  }
})

stories.add('› 3 Columns', () => {
  return {
    template: `<el-row>
      <el-col :span="8"><div class="grid-content bg-purple">A</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple-light">B</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">C</div></el-col>
    </el-row>`
  }
})

stories.add('› 4 Columns', () => {
  return {
    template: `<el-row>
      <el-col :span="6"><div class="grid-content bg-purple">A</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">B</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">C</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">D</div></el-col>
    </el-row>`
  }
})

stories.add('› 6 Columns', () => {
  return {
    template: `<el-row>
      <el-col :span="4"><div class="grid-content bg-purple">A</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">B</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">C</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">D</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple">E</div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple-light">F</div></el-col>
    </el-row>`
  }
})

stories.add('› Column Spacing', () => {
  return {
    template: `<el-row :gutter="20" class="row-bg">
      <el-col :span="6"><div class="grid-content bg-purple">A</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">B</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">C</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">D</div></el-col>
    </el-row>`
  }
})

stories.add('› Hybrid Layout', () => {
  return {
    template: `<el-row>
      <el-row :gutter="20">
        <el-col :span="16"><div class="grid-content bg-purple">1A</div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">1B</div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4"><div class="grid-content bg-purple">2A</div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple">2B</div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple">2C</div></el-col>
      </el-row>
    </el-row>`
  }
})

stories.add('› Column Offset', () => {
  return {
    template: `<el-row>
    <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">1A</div></el-col>
      <el-col :span="6" :offset="6"><div class="grid-content bg-purple">1B</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6" :offset="6"><div class="grid-content bg-purple">2A</div></el-col>
      <el-col :span="6" :offset="6"><div class="grid-content bg-purple">2B</div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :offset="6"><div class="grid-content bg-purple">3A</div></el-col>
    </el-row>
    </el-row>`
  }
})

stories.add('› Align Start', () => {
  return {
    template: `<el-row type="flex" class="row-bg">
      <el-col :span="6"><div class="grid-content bg-purple">A</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">B</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">C</div></el-col>
    </el-row>`
  }
})

stories.add('› Align End', () => {
  return {
    template: `<el-row type="flex" class="row-bg" justify="end">
      <el-col :span="6"><div class="grid-content bg-purple">A</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">B</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">C</div></el-col>
    </el-row>`
  }
})

stories.add('› Align Center', () => {
  return {
    template: `<el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6"><div class="grid-content bg-purple">A</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">B</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">C</div></el-col>
    </el-row>`
  }
})

stories.add('› Align Space Around', () => {
  return {
    template: `<el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6"><div class="grid-content bg-purple">A</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">B</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">C</div></el-col>
    </el-row>`
  }
})

stories.add('› Align Space Between', () => {
  return {
    template: `<el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6"><div class="grid-content bg-purple">A</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple-light">B</div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">C</div></el-col>
    </el-row>`
  }
})

stories.add('› Responsive Layout', () => {
  return {
    template: `<el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">A</div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light">B</div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple">C</div></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">D</div></el-col>
    </el-row>`
  }
})
