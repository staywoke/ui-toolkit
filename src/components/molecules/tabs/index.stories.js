import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean } from '@storybook/addon-knobs/vue'

/* eslint-disable no-unused-vars */
import Component from '.'
import TabPane from '../../atoms/tab-pane'
import README from './README.md'

const stories = storiesOf('Molecules | Tabs', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const type = select(
    'Type',
    {
      '': '---',
      'card': 'card',
      'border-card': 'border-card'
    },
    ''
  )

  const tabPosition = select(
    'Tab Position',
    {
      '': '---',
      'top': 'top',
      'right': 'right',
      'bottom': 'bottom',
      'left': 'left'
    },
    ''
  )

  const closable = boolean('closable', false)
  const addable = boolean('addable', false)
  const editable = boolean('editable', false)

  let attributes = ''

  attributes = attributes.concat((type !== '') ? `type="${type}"` : '')
    .concat((tabPosition !== '' && tabPosition !== 'top') ? `tab-position="${tabPosition}"` : '')
    .concat((closable) ? 'closable ' : '')
    .concat((addable) ? 'addable ' : '')
    .concat((editable) ? 'editable ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-tabs ${attributes} v-model="editableTabsValue" @tab-click="handleClick" @edit="handleTabsEdit">
      <el-tab-pane v-for="(item, index) in editableTabs" :key="item.name" :label="item.title" :name="item.name">
        {{item.content}}
      </el-tab-pane>
    </el-tabs>`,
    data () {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleClick () {},
      handleTabsEdit (targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + ''
          this.editableTabs.push({
            title: `Tab ${newTabName}`,
            name: newTabName,
            content: `Tab ${newTabName} content`
          })
          this.editableTabsValue = newTabName
        }
        if (action === 'remove') {
          let tabs = this.editableTabs
          let activeName = this.editableTabsValue
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                  activeName = nextTab.name
                }
              }
            })
          }

          this.editableTabsValue = activeName
          this.editableTabs = tabs.filter(tab => tab.name !== targetName)
        }
      }
    }
  }
})

stories.add('› Default', () => {
  return {
    template: `<el-tabs v-model="activeName">
      <el-tab-pane label="Tab 1" name="1">Tab 1</el-tab-pane>
      <el-tab-pane label="Tab 2" name="2">Tab 2</el-tab-pane>
      <el-tab-pane label="Tab 3" name="3">Tab 3</el-tab-pane>
      <el-tab-pane label="Tab 4" name="4">Tab 4</el-tab-pane>
    </el-tabs>`,
    data () {
      return {
        activeName: '1'
      }
    }
  }
})

stories.add('› Style Card', () => {
  return {
    template: `<el-tabs type="card" v-model="activeName">
      <el-tab-pane label="Tab 1" name="1">Tab 1</el-tab-pane>
      <el-tab-pane label="Tab 2" name="2">Tab 2</el-tab-pane>
      <el-tab-pane label="Tab 3" name="3">Tab 3</el-tab-pane>
      <el-tab-pane label="Tab 4" name="4">Tab 4</el-tab-pane>
    </el-tabs>`,
    data () {
      return {
        activeName: '1'
      }
    }
  }
})

stories.add('› Style Border Card', () => {
  return {
    template: `<el-tabs type="border-card" v-model="activeName">
      <el-tab-pane label="Tab 1" name="1">Tab 1</el-tab-pane>
      <el-tab-pane label="Tab 2" name="2">Tab 2</el-tab-pane>
      <el-tab-pane label="Tab 3" name="3">Tab 3</el-tab-pane>
      <el-tab-pane label="Tab 4" name="4">Tab 4</el-tab-pane>
    </el-tabs>`,
    data () {
      return {
        activeName: '1'
      }
    }
  }
})

stories.add('› Align Left', () => {
  return {
    template: `<el-tabs tab-position="left" type="border-card" v-model="activeName">
      <el-tab-pane label="Tab 1" name="1">Tab 1</el-tab-pane>
      <el-tab-pane label="Tab 2" name="2">Tab 2</el-tab-pane>
      <el-tab-pane label="Tab 3" name="3">Tab 3</el-tab-pane>
      <el-tab-pane label="Tab 4" name="4">Tab 4</el-tab-pane>
    </el-tabs>`,
    data () {
      return {
        activeName: '1'
      }
    }
  }
})

stories.add('› Align Right', () => {
  return {
    template: `<el-tabs tab-position="right" type="border-card" v-model="activeName">
      <el-tab-pane label="Tab 1" name="1">Tab 1</el-tab-pane>
      <el-tab-pane label="Tab 2" name="2">Tab 2</el-tab-pane>
      <el-tab-pane label="Tab 3" name="3">Tab 3</el-tab-pane>
      <el-tab-pane label="Tab 4" name="4">Tab 4</el-tab-pane>
    </el-tabs>`,
    data () {
      return {
        activeName: '1'
      }
    }
  }
})

stories.add('› Align Bottom', () => {
  return {
    template: `<el-tabs tab-position="bottom" type="border-card" v-model="activeName">
      <el-tab-pane label="Tab 1" name="1">Tab 1</el-tab-pane>
      <el-tab-pane label="Tab 2" name="2">Tab 2</el-tab-pane>
      <el-tab-pane label="Tab 3" name="3">Tab 3</el-tab-pane>
      <el-tab-pane label="Tab 4" name="4">Tab 4</el-tab-pane>
    </el-tabs>`,
    data () {
      return {
        activeName: '1'
      }
    }
  }
})

stories.add('› Custom Tabs', () => {
  return {
    template: `<el-tabs type="card" v-model="activeName">
      <el-tab-pane name="1">
        <span slot="label"><i class="el-icon-bell"></i></span>
        Notifications
      </el-tab-pane>
      <el-tab-pane name="2">
        <span slot="label"><i class="el-icon-goods"></i></span>
        Cart
      </el-tab-pane>
      <el-tab-pane name="3">
        <span slot="label"><i class="el-icon-star-off"></i></span>
        Favorites
      </el-tab-pane>
      <el-tab-pane name="4">
        <span slot="label"><i class="el-icon-setting"></i></span>
        Settings
      </el-tab-pane>
    </el-tabs>`,
    data () {
      return {
        activeName: '1'
      }
    }
  }
})

stories.add('› Add & Close Tabs', () => {
  return {
    template: `<el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
      <el-tab-pane v-for="(item, index) in editableTabs" :key="item.name" :label="item.title" :name="item.name">
        {{item.content}}
      </el-tab-pane>
    </el-tabs>`,
    data () {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit (targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + ''
          this.editableTabs.push({
            title: `Tab ${newTabName}`,
            name: newTabName,
            content: `Tab ${newTabName} content`
          })
          this.editableTabsValue = newTabName
        }
        if (action === 'remove') {
          let tabs = this.editableTabs
          let activeName = this.editableTabsValue
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                  activeName = nextTab.name
                }
              }
            })
          }

          this.editableTabsValue = activeName
          this.editableTabs = tabs.filter(tab => tab.name !== targetName)
        }
      }
    }
  }
})
