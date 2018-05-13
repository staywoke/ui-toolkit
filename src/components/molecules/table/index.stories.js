import VueInfoAddon from 'storybook-addon-vue-info'
import Centered from '@storybook/addon-centered'

import { storiesOf } from '@storybook/vue'
import { withMarkdownNotes } from '@storybook/addon-notes'
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs/vue'

/* eslint-disable no-unused-vars */
import Component from '.'
import TabColumn from '../../atoms/table-column'
import README from './README.md'

const stories = storiesOf('Molecules | Table', module)

stories.addDecorator(VueInfoAddon)
stories.addDecorator(Centered)
stories.addDecorator(withKnobs)
stories.addDecorator((story, context) => withMarkdownNotes(README)(story)(context))

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }, {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }, {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }, {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

const largeTableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  }, {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  }, {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  }, {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  }, {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  }, {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  }, {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  }
]

stories.add('Component Overview', () => {
  const size = select(
    'size',
    {
      '': '---',
      'large': 'large',
      'medium': 'medium',
      'small': 'small',
      'mini': 'mini'
    },
    ''
  )

  const height = text('height', 'auto')

  const stripe = boolean('stripe', false)
  const border = boolean('border', false)
  const fit = boolean('fit', true)
  const showHeader = boolean('show-header', true)
  const showSummary = boolean('show-summary', false)

  let attributes = ''

  attributes = attributes.concat((size !== '') ? `size="${size}"` : '')
    .concat((height !== 'auto') ? `height="${height}"` : '')
    .concat((stripe) ? 'stripe ' : '')
    .concat((border) ? 'border ' : '')
    .concat((showSummary) ? 'show-summary ' : '')
    .concat((!fit) ? ':fit="false" ' : '')
    .concat((!showHeader) ? ':show-header="false" ' : '')

  attributes = attributes.trim()

  return {
    template: `<el-table ${attributes} :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>`,
    data () {
      return {
        tableData: tableData
      }
    }
  }
})

stories.add('› Default', () => {
  return {
    template: `<el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>`,
    data () {
      return {
        tableData: tableData
      }
    }
  }
})

stories.add('› Striped Rows', () => {
  return {
    template: `<el-table stripe :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>`,
    data () {
      return {
        tableData: tableData
      }
    }
  }
})

stories.add('› Border', () => {
  return {
    template: `<el-table border :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>`,
    data () {
      return {
        tableData: tableData
      }
    }
  }
})

stories.add('› Fit', () => {
  return {
    template: `<el-table fit :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>`,
    data () {
      return {
        tableData: tableData
      }
    }
  }
})

stories.add('› Custom Class Names', () => {
  return {
    template: `<el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>`,
    data () {
      return {
        tableData: tableData
      }
    },
    methods: {
      tableRowClassName ({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row'
        } else if (rowIndex === 3) {
          return 'success-row'
        }
        return ''
      }
    }
  }
})

stories.add('› Fixed Header', () => {
  return {
    template: `<el-table :data="tableData" style="width: 100%" height="250">
      <el-table-column prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="300" />
      <el-table-column prop="zip" label="Zip" width="120" />
    </el-table>`,
    data () {
      return {
        tableData: largeTableData
      }
    }
  }
})

stories.add('› Fixed Column', () => {
  return {
    template: `<el-table :data="tableData" style="width: 100%">
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="300" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="Operations"width="120">
        <template slot-scope="scope">
          <el-button @click="handleClick" type="text" size="small">Detail</el-button>
          <el-button type="text" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>`,
    data () {
      return {
        tableData: largeTableData
      }
    },
    methods: {
      handleClick () {
        console.log('click')
      }
    }
  }
})

stories.add('› Fixed Header & Column', () => {
  return {
    template: `<el-table :data="tableData" style="width: 100%" height="250px">
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="300" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="Operations"width="120">
        <template slot-scope="scope">
          <el-button @click="handleClick" type="text" size="small">Detail</el-button>
          <el-button type="text" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>`,
    data () {
      return {
        tableData: largeTableData
      }
    },
    methods: {
      handleClick () {
        console.log('click')
      }
    }
  }
})

stories.add('› Sorting', () => {
  return {
    template: `<el-table :data="tableData" style="width: 100%" :default-sort = "{ prop: 'date', order: 'descending' }">
      <el-table-column prop="date" label="Date" width="150" sortable />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="300" />
      <el-table-column prop="zip" label="Zip" width="120" />
    </el-table>`,
    data () {
      return {
        tableData: largeTableData
      }
    }
  }
})

stories.add('› Filters', () => {
  return {
    template: `<el-table :data="tableData" style="width: 100%">
      <el-table-column
        prop="date"
        label="Date"
        width="150"
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
      />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="300" />
      <el-table-column prop="zip" label="Zip" width="120" />
    </el-table>`,
    data () {
      return {
        tableData: largeTableData
      }
    },
    methods: {
      filterHandler (value, row, column) {
        const property = column['property']
        return row[property] === value
      }
    }
  }
})
