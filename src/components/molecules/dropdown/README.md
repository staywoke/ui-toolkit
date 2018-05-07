Molecule › Dropdown
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-dropdown @click="handleClick" @command="handleCommand" @visible-change="handleVisibleChange">
  <span class="el-dropdown-link">
    Dropdown List<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="a">Action 1</el-dropdown-item>
    <el-dropdown-item command="b">Action 2</el-dropdown-item>
    <el-dropdown-item command="c">Action 3</el-dropdown-item>
    <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
    <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
```


#### Script:

```js
import { Dropdown, DropdownMenu, DropdownItem } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Dropdown,
    DropdownMenu,
    DropdownItem
  },
  methods: {
    handleClick() {},
    handleCommand() {},
    handleVisibleChange() {}
  }
}
```


#### Documentation:

* [Dropdown Component Docs](http://element.eleme.io/#/en-US/component/dropdown)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/dropdown)
