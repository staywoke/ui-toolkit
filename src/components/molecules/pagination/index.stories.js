import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, boolean, number } from '@storybook/addon-knobs/vue'

/* eslint-disable no-unused-vars */
import Component from '.'
import TabPane from '../../atoms/tab-pane'
import README from './README.md'

const stories = storiesOf('Molecules | Pagination', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const pageSize = number('Page Size', 10)
  const total = number('Total', 100)
  const pageCount = number('Page Count', 10)

  const small = boolean('small', false)
  const background = boolean('background', false)
  const disabled = boolean('disabled', false)

  const totalLayout = boolean('total', false)
  const sizesLayout = boolean('sizes', false)
  const prevLayout = boolean('prev', true)
  const pagerLayout = boolean('pager', true)
  const nextLayout = boolean('next', true)
  const jumperLayout = boolean('jumper', false)

  const layouts = []

  if (totalLayout) {
    layouts.push('total')
  }
  if (sizesLayout) {
    layouts.push('sizes')
  }
  if (prevLayout) {
    layouts.push('prev')
  }
  if (pagerLayout) {
    layouts.push('pager')
  }
  if (nextLayout) {
    layouts.push('next')
  }
  if (jumperLayout) {
    layouts.push('jumper')
  }

  const layout = layouts.join(', ')

  let attributes = ''

  attributes = attributes.concat((pageSize !== 10) ? `:page-size="${pageSize}"` : '')
    .concat((total) ? `:total="${total}"` : '')
    .concat((small) ? 'small ' : '')
    .concat((background) ? 'background ' : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((layout !== '') ? `layout="${layout}" ` : '')

  attributes = attributes.trim()

  return {
    template: `<el-pagination ${attributes}
      style="text-align: center;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      @prev-click="handlePrevClick"
      @next-click="handleNextClick"
    />`,
    methods: {
      handleSizeChange: action('Size Change'),
      handleCurrentChange: action('Current Change'),
      handlePrevClick: action('Previous Click'),
      handleNextClick: action('Next Click')
    }
  }
})

stories.add('› Default', () => {
  return {
    template: `<el-pagination :total="100" style="text-align: center;" />`
  }
})

stories.add('› Small', () => {
  return {
    template: `<el-pagination :total="100" small layout="prev, pager, next" style="text-align: center;" />`
  }
})

stories.add('› Background', () => {
  return {
    template: `<el-pagination :total="100" background layout="prev, pager, next" style="text-align: center;" />`
  }
})

stories.add('› Prev, Next', () => {
  return {
    template: `<el-pagination :total="100" layout="prev, next" style="text-align: center;" />`
  }
})

stories.add('› Prev, Pager, Next', () => {
  return {
    template: `<el-pagination :total="100" layout="prev, pager, next" style="text-align: center;" />`
  }
})

stories.add('› Total, Prev, Pager, Next', () => {
  return {
    template: `<el-pagination :total="100" layout="total, prev, pager, next" style="text-align: center;" />`
  }
})

stories.add('› Sizes, Prev, Pager, Next', () => {
  return {
    template: `<el-pagination :total="100" layout="sizes, prev, pager, next" style="text-align: center;" />`
  }
})

stories.add('› Prev, Pager, Next, Jumper', () => {
  return {
    template: `<el-pagination :total="100" layout="prev, pager, next, jumper" style="text-align: center;" />`
  }
})
