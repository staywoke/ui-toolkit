Molecule › Dropdown Menu
---

> The following is a quick example of how to use this component.

**NOTE:** This component cannot be used by itself.  It is a child component that only works within the [Dropdown](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/dropdown) component.


#### Template:

```xml
<el-dropdown-menu slot="dropdown">
  <el-dropdown-item>Action 1</el-dropdown-item>
  <el-dropdown-item>Action 2</el-dropdown-item>
  <el-dropdown-item>Action 3</el-dropdown-item>
  <el-dropdown-item disabled>Action 4</el-dropdown-item>
  <el-dropdown-item divided>Action 5</el-dropdown-item>
</el-dropdown-menu>
```


#### Script:

```js
import { DropdownMenu, DropdownItem } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    DropdownMenu,
    DropdownItem
  }
}
```


#### Documentation:

* [Dropdown Component Docs](http://element.eleme.io/#/en-US/component/dropdown)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/dropdown)
