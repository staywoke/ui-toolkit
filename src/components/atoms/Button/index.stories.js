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
      'default': 'default',
      'primary': 'primary',
      'success': 'success',
      'info': 'info',
      'warning': 'warning',
      'danger': 'danger'
    },
    'default'
  );

  const plain = boolean('Plain', false);
  const round = boolean('Round', false);

  return {
    template: `<el-button type=${types} :plain=${plain} :round=${round}>Button</el-button>`,
  }
})
