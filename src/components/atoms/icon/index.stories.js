import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Atoms | Icon', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const name = select(
    'Name',
    {
      'arrow-down': 'arrow-down',
      'arrow-left': 'arrow-left',
      'arrow-right': 'arrow-right',
      'arrow-up': 'arrow-up',
      'back': 'back',
      'bell': 'bell',
      'caret-bottom': 'caret-bottom',
      'caret-left': 'caret-left',
      'caret-right': 'caret-right',
      'caret-top': 'caret-top',
      'check': 'check',
      'circle-check-outline': 'circle-check-outline',
      'circle-check': 'circle-check',
      'circle-close-outline': 'circle-close-outline',
      'circle-close': 'circle-close',
      'circle-plus-outline': 'circle-plus-outline',
      'circle-plus': 'circle-plus',
      'close': 'close',
      'd-arrow-left': 'd-arrow-left',
      'd-arrow-right': 'd-arrow-right',
      'd-caret': 'd-caret',
      'date': 'date',
      'delete': 'delete',
      'document': 'document',
      'download': 'download',
      'edit-outline': 'edit-outline',
      'edit': 'edit',
      'error': 'error',
      'goods': 'goods',
      'info': 'info',
      'loading': 'loading',
      'location-outline': 'location-outline',
      'location': 'location',
      'menu': 'menu',
      'message': 'message',
      'minus': 'minus',
      'mobile-phone': 'mobile-phone',
      'more-outline': 'more-outline',
      'more': 'more',
      'news': 'news',
      'phone-outline': 'phone-outline',
      'phone': 'phone',
      'picture-outline': 'picture-outline',
      'picture': 'picture',
      'plus': 'plus',
      'printer': 'printer',
      'question': 'question',
      'rank': 'rank',
      'refresh': 'refresh',
      'remove-outline': 'remove-outline',
      'remove': 'remove',
      'search': 'search',
      'service': 'service',
      'setting': 'setting',
      'share': 'share',
      'sold-out': 'sold-out',
      'sort-down': 'sort-down',
      'sort-up': 'sort-up',
      'sort': 'sort',
      'star-off': 'star-off',
      'star-on': 'star-on',
      'success': 'success',
      'tickets': 'tickets',
      'time': 'time',
      'upload': 'upload',
      'upload2': 'upload2',
      'view': 'view',
      'warning': 'warning',
      'zoom-in': 'zoom-in',
      'zoom-out': 'zoom-out'
    },
    'search'
  )

  return {
    template: `<el-icon name="${name}" class="icon-demo" />`
  }
})

stories.add('› All Icons', () => {
  return {
    template: `<el-container class="icon-demo-container">
      <el-container class="icon-demo-wrapper" v-for="icon in icons" :key="icon">
        <el-icon :name="icon" />
        <small>{{icon}}</small>
      </el-container>
    </el-container>`,
    data () {
      return {
        icons: [
          'arrow-down',
          'arrow-left',
          'arrow-right',
          'arrow-up',
          'back',
          'bell',
          'caret-bottom',
          'caret-left',
          'caret-right',
          'caret-top',
          'check',
          'circle-check-outline',
          'circle-check',
          'circle-close-outline',
          'circle-close',
          'circle-plus-outline',
          'circle-plus',
          'close',
          'd-arrow-left',
          'd-arrow-right',
          'd-caret',
          'date',
          'delete',
          'document',
          'download',
          'edit-outline',
          'edit',
          'error',
          'goods',
          'info',
          'loading',
          'location-outline',
          'location',
          'menu',
          'message',
          'minus',
          'mobile-phone',
          'more-outline',
          'more',
          'news',
          'phone-outline',
          'phone',
          'picture-outline',
          'picture',
          'plus',
          'printer',
          'question',
          'rank',
          'refresh',
          'remove-outline',
          'remove',
          'search',
          'service',
          'setting',
          'share',
          'sold-out',
          'sort-down',
          'sort-up',
          'sort',
          'star-off',
          'star-on',
          'success',
          'tickets',
          'time',
          'upload',
          'upload2',
          'view',
          'warning',
          'zoom-in',
          'zoom-out'
        ]
      }
    }
  }
})
