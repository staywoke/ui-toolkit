Atom › Table Column
---

> The following is a quick example of how to use this component.

**NOTE:** This component cannot be used by itself.  It is a child component that only works within the [Table](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/table) component.


#### Template:

```xml
<el-table-column
  prop="date"
  label="Date"
  width="180"
/>
```


#### Script:
```js
import { TableColumn } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    TableColumn
  }
}
```


#### Documentation:

* [Table Component Docs](https://element.eleme.io/#/en-US/component/table)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/table-column)
