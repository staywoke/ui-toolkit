import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Organisms | Container', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const direction = select(
    'Direction',
    {
      '': '---',
      'horizontal': 'horizontal',
      'vertical': 'vertical'
    },
    ''
  )

  let attributes = ''

  attributes = attributes.concat((direction !== '') ? `direction="${direction}" ` : '')
  attributes = attributes.trim()

  return {
    template: `<el-container>
    <el-aside>Aside</el-aside>
      <el-container ${attributes}>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>`
  }
})

stories.add('› Full Page', () => {
  return {
    template: `<el-container>
    <el-aside>Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>`
  }
})

stories.add('› Full Page Alt 1', () => {
  return {
    template: `<el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>`
  }
})

stories.add('› Full Page Alt 2', () => {
  return {
    template: `<el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside>Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>`
  }
})

stories.add('› Full Page Alt 3', () => {
  return {
    template: `<el-container>
      <el-container>
        <el-aside>Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>`
  }
})

stories.add('› Aside & Main', () => {
  return {
    template: `<el-container>
      <el-aside>Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>`
  }
})

stories.add('› Header & Main', () => {
  return {
    template: `<el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>`
  }
})

stories.add('› Header, Main & Aside', () => {
  return {
    template: `<el-container>
      <el-aside>Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>`
  }
})

stories.add('› Footer & Main', () => {
  return {
    template: `<el-container>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>`
  }
})

stories.add('› Footer, Main & Aside', () => {
  return {
    template: `<el-container>
      <el-aside>Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>`
  }
})

stories.add('› Main, Header, & Footer', () => {
  return {
    template: `<el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>`
  }
})
