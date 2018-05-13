Molecule › Table
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-table :data="tableData" style="width: 100%">
  <el-table-column prop="date" label="Date" width="180" />
  <el-table-column prop="name" label="Name" width="180" />
  <el-table-column prop="address" label="Address" />
</el-table>
```


#### Script:

```js
import { Table, TableColumn } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Table,
    TableColumn
  },
  data() {
    return {
      tableData: [{
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
      }]
    }
  }
}
```


#### Documentation:

* [Tabs Component Docs](http://element.eleme.io/#/en-US/component/tabs)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/tabs)
