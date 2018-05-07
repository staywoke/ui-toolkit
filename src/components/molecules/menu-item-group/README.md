Molecule › Menu Item Group
---

> The following is a quick example of how to use this component.

**NOTE:** This component cannot be used by itself.  It is a child component that only works within the [Menu](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/menu) component.


#### Template:

```xml
<el-menu-item-group title="Group One">
  <el-menu-item index="1-1">item one</el-menu-item>
  <el-menu-item index="1-2">item one</el-menu-item>
</el-menu-item-group>
```


#### Script:

```js
import { MenuItemGroup, MenuItem } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    MenuItemGroup,
    MenuItem
  }
}
```


#### Documentation:

* [Menu Component Docs](http://element.eleme.io/#/en-US/component/menu)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/menu-item-group)
