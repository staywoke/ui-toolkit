import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, boolean, select, text, number, color } from '@storybook/addon-knobs/vue'

/* eslint-disable no-unused-vars */
import Component from '.'
import Container from '../../organisms/container'
import Button from '../../atoms/button'
import README from './README.md'

const stories = storiesOf('Atoms | Font Awesome Icon', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const icon = text('Icon Name', 'search')

  const iconColor = color('icon Color', '#000000')

  const style = select(
    'Style',
    {
      '': '---',
      'fas': 'Solid',
      'far': 'Regular',
      'fal': 'Light',
      'fab': 'Brands'
    },
    ''
  )

  const size = select(
    'Size',
    {
      '': '---',
      'xs': 'xs',
      'sm': 'sm',
      'lg': 'lg',
      '2x': '2x',
      '3x': '3x',
      '4x': '4x',
      '5x': '5x',
      '6x': '6x',
      '7x': '7x',
      '8x': '8x',
      '9x': '9x',
      '10x': '10x'
    },
    ''
  )

  const rotation = select(
    'Rotation',
    {
      '': '---',
      '90': '90',
      '180': '180',
      '270': '270'
    },
    ''
  )

  const pull = select(
    'Pull',
    {
      '': '---',
      'left': 'left',
      'right': 'right'
    },
    ''
  )

  const maskStyle = select(
    'Mask Style',
    {
      '': '---',
      'fas': 'Solid',
      'far': 'Regular',
      'fal': 'Light',
      'fab': 'Brands'
    },
    ''
  )

  const maskIcon = text('Mask Icon Name', 'square')

  const transformShrink = number('Shrink', 0, { min: 0 })
  const transformUp = number('Up', 0, { min: 0 })
  const transformDown = number('Down', 0, { min: 0 })
  const transformLeft = number('Left', 0, { min: 0 })
  const transformRight = number('Right', 0, { min: 0 })

  const spin = boolean('Spin', false)
  const pulse = boolean('Pulse', false)
  const fixedWidth = boolean('Fixed Width', false)
  const border = boolean('Border', false)

  let transforms = []

  if (transformShrink !== 0) {
    transforms.push(`shrink-${transformShrink}`)
  }

  if (transformUp !== 0) {
    transforms.push(`up-${transformUp}`)
  }

  if (transformDown !== 0) {
    transforms.push(`down-${transformDown}`)
  }

  if (transformLeft !== 0) {
    transforms.push(`left-${transformLeft}`)
  }

  if (transformRight !== 0) {
    transforms.push(`right-${transformRight}`)
  }

  const transform = transforms.join(' ')

  let attributes = ''

  attributes = attributes.concat((size !== '') ? `size="${size}" ` : '')
    .concat((iconColor !== '#000000') ? `color="${iconColor}" ` : '')
    .concat((rotation !== '') ? `rotation="${rotation}" ` : '')
    .concat((pull !== '') ? `pull="${pull}" ` : '')
    .concat((spin) ? 'spin ' : '')
    .concat((pulse) ? 'pulse ' : '')
    .concat((fixedWidth) ? 'fixed-width ' : '')
    .concat((border) ? 'border ' : '')
    .concat((style !== '' && style !== 'fas' && icon !== '') ? `:icon="['${style}', '${icon}']"` : '')
    .concat(((style === '' || style === 'fas') && icon !== '') ? `icon="${icon}"` : '')
    .concat((maskStyle !== '' && maskIcon !== '') ? `:mask="['${maskStyle}', '${maskIcon}']"` : '')
    .concat((transform !== '') ? `transform="${transform}"` : '')

  attributes = attributes.trim()

  return {
    template: `<font-awesome-icon ${attributes} />`
  }
})

stories.add('› Default', () => {
  return {
    template: `<font-awesome-icon icon="search" />`
  }
})

stories.add('› Custom Size', () => {
  return {
    template: `<font-awesome-icon icon="home" size="4x" />`
  }
})

stories.add('› Style Solid', () => {
  return {
    template: `<font-awesome-icon
      :icon="['fas', 'comment']"
      size="4x"
    />`
  }
})

stories.add('› Style Regular', () => {
  return {
    template: `<font-awesome-icon
      :icon="['far', 'comment']"
      size="4x"
    />`
  }
})

stories.add('› Style Light', () => {
  return {
    template: `<font-awesome-icon
      :icon="['fal', 'comment']"
      size="4x"
    />`
  }
})

stories.add('› Style Brand', () => {
  return {
    template: `<font-awesome-icon
      :icon="['fab', 'vuejs']"
      size="4x"
    />`
  }
})

stories.add('› Custom Color', () => {
  return {
    template: `<font-awesome-icon
      :icon="['fal', 'search']"
      size="4x"
      color="#409EFF"
    />`
  }
})

stories.add('› Mask Square', () => {
  return {
    template: `<font-awesome-icon
      size="4x"
      color="#409EFF"
      fixed-width
      :icon="['fal', 'search']"
      :mask="['fas', 'square']"
      transform="shrink-8"
    />`
  }
})

stories.add('› Mask Circle', () => {
  return {
    template: `<font-awesome-icon
      size="4x"
      color="#F56C6C"
      :icon="['far', 'exclamation-triangle']"
      :mask="['fas', 'circle']"
      transform="shrink-9 up-1"
    />`
  }
})

stories.add('› Mask Custom', () => {
  return {
    template: `<font-awesome-icon
      size="4x"
      color="#67C23A"
      :icon="['far', 'edit']"
      :mask="['fas', 'comment']"
      transform="shrink-10 up-1 right-1"
    />`
  }
})

stories.add('› List Items', () => {
  return {
    template: `<el-container>
      <ul class="fa-ul">
        <li><font-awesome-icon :icon="['fal', 'check']" color="#67C23A" list-item /> Item 1</li>
        <li><font-awesome-icon :icon="['fal', 'check']" color="#67C23A" list-item /> Item 2</li>
        <li><font-awesome-icon :icon="['fal', 'times']" color="#F56C6C" list-item /> Item 3</li>
      </ul>
    </el-container>`
  }
})

stories.add('› Button', () => {
  return {
    template: `<el-button type="primary" size="large">
      <font-awesome-icon :icon="['fas', 'comments-alt']" size="lg" color="#FFF" />
    </el-button>`
  }
})
