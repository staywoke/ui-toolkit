import Vue from 'vue';

import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import { setDefaults } from 'storybook-addon-vue-info'

setOptions({
  name: 'UI Toolkit',
  url: 'https://ui-toolkit.staywoke.org',
  hierarchyRootSeparator: /\|/
});

setDefaults({
  header: false
});

function loadStories () {
  // Welcome Page
  require('../src/components/index.stories.js');

  // Load Components from Smallest to Largest
  const atoms = require.context('../src/components/atoms', true, /\.stories\.js$/);
  const molecules = require.context('../src/components/molecules', true, /\.stories\.js$/);
  const organisms = require.context('../src/components/organisms', true, /\.stories\.js$/);
  const templates = require.context('../src/components/templates', true, /\.stories\.js$/);
  const pages = require.context('../src/components/pages', true, /\.stories\.js$/);

  atoms.keys().forEach(filename => atoms(filename));
  molecules.keys().forEach(filename => molecules(filename));
  organisms.keys().forEach(filename => organisms(filename));
  templates.keys().forEach(filename => templates(filename));
  pages.keys().forEach(filename => pages(filename));
}

configure(loadStories, module)
