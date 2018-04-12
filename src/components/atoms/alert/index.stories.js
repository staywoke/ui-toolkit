import VueInfoAddon from 'storybook-addon-vue-info'

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { withMarkdownNotes } from '@storybook/addon-notes';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/vue';

import Component from '.';
import README from './README.md';

const stories = storiesOf('Atoms | Alert', module);

stories.addDecorator(VueInfoAddon);
stories.addDecorator(withKnobs);
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context));

stories.add('Component Overview', () => {
  const types = select(
    'Type',
    {
      '': '---',
      'success': 'success',
      'warning': 'warning',
      'info': 'info',
      'error': 'error'
    },
    ''
  );

  const title = text('Title', 'Message Text');
  const description = text('Description', '');
  const closeText = text('Close Text', '');

  const closable = boolean('Closable', true);
  const center = boolean('Center', false);
  const showIcon = boolean('Show Icon', false);

  let attributes = ''

  attributes = attributes.concat((types !== '') ? `type="${types}" ` : '')
    .concat((title !== '') ? `title="${title}" ` : '')
    .concat((description !== '') ? `description="${description}" ` : '')
    .concat((closable && closeText !== '') ? `close-text="${closeText}" ` : '')
    .concat((closable) ? '' : ':closable="false" ')
    .concat((center) ? 'center ' : '')
    .concat((showIcon) ? 'show-icon ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-alert ${attributes} @close="actionLogger"></el-alert>`,
    methods: {
      actionLogger: action('Alert Closed'),
    }
  }
})

stories.add('› Default', () => {
  return {
    template: '<el-alert title="Message Sent" type="success"></el-alert>'
  }
})

stories.add('› Custom Close', () => {
  return {
    template: '<el-alert title="Message Sent" type="success" close-text="Done"></el-alert>'
  }
})

stories.add('› Disable Close', () => {
  return {
    template: '<el-alert title="Oops, Something Went Wrong." type="error" :closable="false"></el-alert>'
  }
})

stories.add('› Centered Text', () => {
  return {
    template: '<el-alert title="Message Sent" type="success" center></el-alert>'
  }
})

stories.add('› Show Icon', () => {
  return {
    template: '<el-alert title="Message Sent" type="success" show-icon></el-alert>'
  }
})

stories.add('› Description', () => {
  return {
    template: '<el-alert title="Message Sent" type="success" description="Check Your Email for a Confirmation Message."></el-alert>'
  }
})

stories.add('› Icon & Description', () => {
  return {
    template: '<el-alert title="Message Sent" type="success" description="Check Your Email for a Confirmation Message." show-icon></el-alert>'
  }
})
