import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withMarkdownNotes } from '@storybook/addon-notes';
import VueInfoAddon from 'storybook-addon-vue-info'

import {
  withKnobs,
  text,
  number,
  boolean,
  array,
  select,
  color,
  date,
  button,
} from '@storybook/addon-knobs/vue';

import Centered from '@storybook/addon-centered';

import Button from '.';
import README from './README.md';

const stories = storiesOf('Atom | Button', module);

stories.addDecorator(VueInfoAddon);
stories.addDecorator(Centered);
stories.addDecorator(withKnobs);
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context));

stories.add('Playground', () => {
  const types = select(
    'Types',
    {
      '': '---',
      'primary': 'primary',
      'success': 'success',
      'info': 'info',
      'warning': 'warning',
      'danger': 'danger'
    },
    ''
  );

  const sizes = select(
    'Size',
    {
      '': '---',
      'medium': 'medium',
      'small': 'small',
      'mini': 'mini'
    },
    ''
  );

  const icons = select(
    'Icon',
    {
      '': '---',
      'el-icon-arrow-down': 'arrow-down',
      'el-icon-arrow-left': 'arrow-left',
      'el-icon-arrow-right': 'arrow-right',
      'el-icon-arrow-up': 'arrow-up',
      'el-icon-back': 'back',
      'el-icon-bell': 'bell',
      'el-icon-caret-bottom': 'caret-bottom',
      'el-icon-caret-left': 'caret-left',
      'el-icon-caret-right': 'caret-right',
      'el-icon-caret-top': 'caret-top',
      'el-icon-check': 'check',
      'el-icon-circle-check-outline': 'circle-check-outline',
      'el-icon-circle-check': 'circle-check',
      'el-icon-circle-close-outline': 'circle-close-outline',
      'el-icon-circle-close': 'circle-close',
      'el-icon-circle-plus-outline': 'circle-plus-outline',
      'el-icon-circle-plus': 'circle-plus',
      'el-icon-close': 'close',
      'el-icon-d-arrow-left': 'd-arrow-left',
      'el-icon-d-arrow-right': 'd-arrow-right',
      'el-icon-d-caret': 'd-caret',
      'el-icon-date': 'date',
      'el-icon-delete': 'delete',
      'el-icon-document': 'document',
      'el-icon-download': 'download',
      'el-icon-edit-outline': 'edit-outline',
      'el-icon-edit': 'edit',
      'el-icon-error': 'error',
      'el-icon-goods': 'goods',
      'el-icon-info': 'info',
      'el-icon-loading': 'loading',
      'el-icon-location-outline': 'location-outline',
      'el-icon-location': 'location',
      'el-icon-menu': 'menu',
      'el-icon-message': 'message',
      'el-icon-minus': 'minus',
      'el-icon-mobile-phone': 'mobile-phone',
      'el-icon-more-outline': 'more-outline',
      'el-icon-more': 'more',
      'el-icon-news': 'news',
      'el-icon-phone-outline': 'phone-outline',
      'el-icon-phone': 'phone',
      'el-icon-picture-outline': 'picture-outline',
      'el-icon-picture': 'picture',
      'el-icon-plus': 'plus',
      'el-icon-printer': 'printer',
      'el-icon-question': 'question',
      'el-icon-rank': 'rank',
      'el-icon-refresh': 'refresh',
      'el-icon-remove-outline': 'remove-outline',
      'el-icon-remove': 'remove',
      'el-icon-search': 'search',
      'el-icon-service': 'service',
      'el-icon-setting': 'setting',
      'el-icon-share': 'share',
      'el-icon-sold-out': 'sold-out',
      'el-icon-sort-down': 'sort-down',
      'el-icon-sort-up': 'sort-up',
      'el-icon-sort': 'sort',
      'el-icon-star-off': 'star-off',
      'el-icon-star-on': 'star-on',
      'el-icon-success': 'success',
      'el-icon-tickets': 'tickets',
      'el-icon-time': 'time',
      'el-icon-upload': 'upload',
      'el-icon-upload2': 'upload2',
      'el-icon-view': 'view',
      'el-icon-warning': 'warning',
      'el-icon-zoom-in': 'zoom-in',
      'el-icon-zoom-out': 'zoom-out'
    },
    ''
  );

  const iconPlacement = select(
    'Icon Placement',
    {
      '': '---',
      'left': 'left',
      'right': 'right'
    },
    ''
  );

  const nativeType = select(
    'Native Type',
    {
      '': '---',
      'button': 'button',
      'submit': 'submit',
      'reset': 'reset'
    },
    ''
  );

  const label = text('Label', 'Button');

  const plain = boolean('Plain', false);
  const round = boolean('Round', false);
  const circle = boolean('Circle', false);
  const loading = boolean('Loading', false);
  const disabled = boolean('Disabled', false);
  const autofocus = boolean('Auto Focus', false);

  let attributes = ''
  let embeddedIcon = ''

  attributes = attributes.concat((types !== '') ? `type="${types}" ` : '')
    .concat((sizes !== '') ? `size="${sizes}" ` : '')
    .concat((nativeType !== '') ? `native-type="${nativeType}" ` : '')
    .concat((icons !== '' && iconPlacement !== 'right') ? `icon="${icons}" ` : '')
    .concat((plain) ? 'plain ' : '')
    .concat((round) ? 'round ' : '')
    .concat((circle) ? 'circle ' : '')
    .concat((loading) ? 'loading ' : '')
    .concat((disabled) ? 'disabled ' : '')
    .concat((autofocus) ? 'autofocus ' : '')

  attributes = attributes.trim()

  if (iconPlacement === 'right') {
    embeddedIcon = `<i class="${icons} el-icon-right"></i>`
  }

  return {
    template: `<el-button ${attributes}>${label} ${embeddedIcon}</el-button>`
  }
})
