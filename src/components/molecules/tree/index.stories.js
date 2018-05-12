import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, boolean } from '@storybook/addon-knobs/vue'

/* eslint-disable no-unused-vars */
import Component from '.'
import TabPane from '../../atoms/tab-pane'
import README from './README.md'

const stories = storiesOf('Molecules | Tree', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const renderAfterExpand = boolean('render-after-expand', true)
  const highlightCurrent = boolean('highlight-current', false)
  const defaultExpandAll = boolean('default-expand-all', false)
  const expandOnClickNode = boolean('expand-on-click-node', false)
  const autoExpandParent = boolean('auto-expand-parent', true)
  const showCheckbox = boolean('show-checkbox', false)
  const checkStrictly = boolean('check-strictly', false)
  const accordion = boolean('accordion', false)
  const draggable = boolean('draggable', false)

  let attributes = ''

  attributes = attributes.concat((!renderAfterExpand) ? ':render-after-expand="false" ' : '')
    .concat((highlightCurrent) ? 'highlight-current ' : '')
    .concat((defaultExpandAll) ? 'default-expand-all ' : '')
    .concat((expandOnClickNode) ? 'expand-on-click-node ' : '')
    .concat((expandOnClickNode) ? 'expand-on-click-node ' : '')
    .concat((!autoExpandParent) ? ':auto-expand-parent="false" ' : '')
    .concat((showCheckbox) ? 'show-checkbox ' : '')
    .concat((checkStrictly) ? 'check-strictly ' : '')
    .concat((accordion) ? 'accordion ' : '')
    .concat((draggable) ? 'draggable ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-tree ${attributes} :data="data" :props="defaultProps" @node-click="handleNodeClick" />`,
    data () {
      return {
        data: [{
          label: 'Level one 1',
          children: [{
            label: 'Level two 1-1',
            children: [{
              label: 'Level three 1-1-1'
            }]
          }]
        }, {
          label: 'Level one 2',
          children: [{
            label: 'Level two 2-1',
            children: [{
              label: 'Level three 2-1-1'
            }]
          }, {
            label: 'Level two 2-2',
            children: [{
              label: 'Level three 2-2-1'
            }]
          }]
        }, {
          label: 'Level one 3',
          children: [{
            label: 'Level two 3-1',
            children: [{
              label: 'Level three 3-1-1'
            }]
          }, {
            label: 'Level two 3-2',
            children: [{
              label: 'Level three 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods: {
      handleNodeClick (data) {
        console.log(data)
      }
    }
  }
})
