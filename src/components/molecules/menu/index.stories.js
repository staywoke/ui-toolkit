import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, boolean, select, color } from '@storybook/addon-knobs/vue'

/* eslint-disable no-unused-vars */
import Component from '.'
import MenuItem from '../../atoms/menu-item'
import SubMenu from '../submenu'
import README from './README.md'

const stories = storiesOf('Molecules | Menu', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const mode = select(
    'mode',
    {
      '': '---',
      'horizontal': 'horizontal',
      'vertical': 'vertical'
    },
    'horizontal'
  )

  const collapse = boolean('collapse', false)

  const backgroundColor = color('Background Color', '#ffffff')
  const textColor = color('Text Color', '#303133')
  const activeTextColor = color('Active Text Color', '#409EFF')

  let attributes = ''

  attributes = attributes.concat((mode === 'horizontal') ? `mode="${mode}" ` : '')
    .concat((backgroundColor !== '#ffffff') ? `background-color="${backgroundColor}" ` : '')
    .concat((textColor !== '#303133') ? `text-color="${textColor}" ` : '')
    .concat((activeTextColor !== '#409EFF') ? `active-text-color="${activeTextColor}" ` : '')
    .concat((collapse && mode === 'vertical') ? 'collapse ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-menu ${attributes} :default-active="activeIndex" @select="actionLogger">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">Home</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-news"></i>
          <span slot="title">Sub Menu</span>
        </template>
        <el-menu-item index="2-1">item 1</el-menu-item>
        <el-menu-item index="2-2">item 2</el-menu-item>
        <el-submenu index="2-3">
          <template slot="title">item 3</template>
          <el-menu-item index="2-3-1">item 1</el-menu-item>
          <el-menu-item index="2-3-2">item 2</el-menu-item>
          <el-menu-item index="2-3-3">item 3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>
        <i class="el-icon-close"></i>
        <span slot="title">Disabled</span>
      </el-menu-item>
    </el-menu>`,
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      actionLogger: action('Slide Changed')
    }
  }
})

stories.add('› Default', () => {
  return {
    template: `<el-menu default-active="1">
      <el-menu-item index="1">Item 1</el-menu-item>
      <el-menu-item index="2">Item 2</el-menu-item>
      <el-menu-item index="3">Item 3</el-menu-item>
    </el-menu>`
  }
})

stories.add('› Horizontal', () => {
  return {
    template: `<el-menu default-active="1" mode="horizontal">
      <el-menu-item index="1">Item 1</el-menu-item>
      <el-menu-item index="2">Item 2</el-menu-item>
      <el-menu-item index="3">Item 3</el-menu-item>
    </el-menu>`
  }
})

stories.add('› Horizontal Sub Menu', () => {
  return {
    template: `<el-menu default-active="1" mode="horizontal">
      <el-menu-item index="1">Home</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Sub Menu</template>
        <el-menu-item index="2-1">item 1</el-menu-item>
        <el-menu-item index="2-2">item 2</el-menu-item>
        <el-submenu index="2-3">
          <template slot="title">item 3</template>
          <el-menu-item index="2-3-1">item 1</el-menu-item>
          <el-menu-item index="2-3-2">item 2</el-menu-item>
          <el-menu-item index="2-3-3">item 3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>Disabled</el-menu-item>
    </el-menu>`
  }
})

stories.add('› Icons', () => {
  return {
    template: `<el-menu default-active="1" mode="horizontal">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">Home</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-news"></i>
        <span slot="title">News</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-search"></i>
        <span slot="title">Search</span>
      </el-menu-item>
    </el-menu>`
  }
})

stories.add('› Collapsed', () => {
  return {
    template: `<el-menu default-active="1" mode="vertical" collapse>
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">Home</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-news"></i>
        <span slot="title">News</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-search"></i>
        <span slot="title">Search</span>
      </el-menu-item>
    </el-menu>`
  }
})

stories.add('› Custom Colors', () => {
  return {
    template: `<el-menu mode="horizontal" background-color="#333333" text-color="#FFFFFF" active-text-color="#F2E325" default-active="1">
      <el-menu-item index="1">Home</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Sub Menu</template>
        <el-menu-item index="2-1">item 1</el-menu-item>
        <el-menu-item index="2-2">item 2</el-menu-item>
        <el-submenu index="2-3">
          <template slot="title">item 3</template>
          <el-menu-item index="2-3-1">item 1</el-menu-item>
          <el-menu-item index="2-3-2">item 2</el-menu-item>
          <el-menu-item index="2-3-3">item 3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>Disabled</el-menu-item>
    </el-menu>`
  }
})
