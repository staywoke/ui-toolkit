import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean, object } from '@storybook/addon-knobs/vue'

/* eslint-disable-next-line no-unused-vars */
import Component from '.'
import README from './README.md'

const stories = storiesOf('Organisms | Map Block', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

stories.add('Component Overview', () => {
  const sizes = select(
    'Size',
    {
      '': '---',
      'responsive': 'responsive',
      'large': 'large',
      'medium': 'medium',
      'small': 'small',
      'mini': 'mini'
    },
    ''
  )

  const classNames = object('State Options', {
    'FL': 'blue'
  })

  const dc = boolean('Show DC', false)
  const labels = boolean('Show Labels', true)

  let attributes = ''

  attributes = attributes.concat((sizes !== '') ? `size="${sizes}" ` : '')
    .concat((Object.keys(classNames).length !== 0 && classNames.constructor === Object) ? `:class-names='${JSON.stringify(classNames)}' ` : '')
    .concat((dc) ? 'show-dc ' : '')
    .concat((!labels) ? 'hide-labels ' : '')

  attributes = attributes.trim()

  return {
    template: `<sw-map-block ${attributes} @click="actionLogger"></sw-map-block>`,
    methods: {
      actionLogger: action('State Clicked')
    }
  }
})

stories.add('› Default ', () => {
  return {
    template: '<sw-map-block @click="actionLogger"></sw-map-block>',
    methods: {
      actionLogger: action('State Clicked')
    }
  }
})

stories.add('› Political Map', () => {
  return {
    template: '<sw-map-block show-dc :class-names="stateColors" @click="actionLogger"></sw-map-block>',
    data () {
      return {
        stateColors: {
          'AK': 'red',
          'AL': 'red',
          'AR': 'red',
          'AZ': 'red',
          'CA': 'blue',
          'CO': 'blue',
          'CT': 'blue',
          'DC': 'blue',
          'DE': 'blue',
          'FL': 'red',
          'GA': 'red',
          'HI': 'blue',
          'IA': 'red',
          'ID': 'red',
          'IL': 'blue',
          'IN': 'red',
          'KS': 'red',
          'KY': 'red',
          'LA': 'red',
          'MA': 'blue',
          'MD': 'blue',
          'ME': 'blue',
          'MI': 'red',
          'MN': 'blue',
          'MO': 'red',
          'MS': 'red',
          'MT': 'red',
          'NC': 'red',
          'ND': 'red',
          'NE': 'red',
          'NH': 'blue',
          'NJ': 'blue',
          'NM': 'blue',
          'NV': 'blue',
          'NY': 'blue',
          'OH': 'red',
          'OK': 'red',
          'OR': 'blue',
          'PA': 'red',
          'RI': 'blue',
          'SC': 'red',
          'SD': 'red',
          'TN': 'red',
          'TX': 'red',
          'UT': 'red',
          'VA': 'blue',
          'VT': 'blue',
          'WA': 'blue',
          'WI': 'red',
          'WV': 'red',
          'WY': 'red'
        }
      }
    },
    methods: {
      actionLogger: action('State Clicked')
    }
  }
})

stories.add('› Disabled Midwest ', () => {
  return {
    template: '<sw-map-block :class-names="midwest" @click="actionLogger"></sw-map-block>',
    data () {
      return {
        midwest: {
          'IA': 'disabled',
          'IL': 'disabled',
          'IN': 'disabled',
          'KS': 'disabled',
          'MI': 'disabled',
          'MN': 'disabled',
          'MO': 'disabled',
          'ND': 'disabled',
          'NE': 'disabled',
          'OH': 'disabled',
          'SD': 'disabled',
          'WI': 'disabled'
        }
      }
    },
    methods: {
      actionLogger: action('State Clicked')
    }
  }
})

stories.add('› Show DC', () => {
  return {
    template: '<sw-map-block show-dc></sw-map-block>'
  }
})

stories.add('› No Labels', () => {
  return {
    template: '<sw-map-block hide-labels></sw-map-block>'
  }
})

stories.add('› Size Responsive', () => {
  return {
    template: '<sw-map-block></sw-map-block>'
  }
})

stories.add('› Size large', () => {
  return {
    template: '<sw-map-block size="large"></sw-map-block>'
  }
})

stories.add('› Size Medium', () => {
  return {
    template: '<sw-map-block size="medium"></sw-map-block>'
  }
})

stories.add('› Size Small', () => {
  return {
    template: '<sw-map-block size="small"></sw-map-block>'
  }
})

stories.add('› Size Mini', () => {
  return {
    template: '<sw-map-block size="mini"></sw-map-block>'
  }
})
