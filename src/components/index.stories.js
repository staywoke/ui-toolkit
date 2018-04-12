import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered';

import { storiesOf } from '@storybook/vue';

import Welcome from './welcome.vue';

const stories = storiesOf('UI Toolkit | Welcome', module);

stories.addDecorator(Centered);

stories.add('Getting Started', () => ({
  render: h => h(Welcome),
}));
