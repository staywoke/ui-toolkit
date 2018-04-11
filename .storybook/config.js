import Vue from 'vue';

import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from 'storybook-addon-vue-info'

setOptions({
  name: 'UI Toolkit',
  hierarchyRootSeparator: /\|/,
});

setDefaults({
  header: false
});

function loadStories () {
  const req = require.context('../src/components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module)
