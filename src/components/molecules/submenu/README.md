Molecule › Submenu
---

> The following is a quick example of how to use this component.

**NOTE:** This component cannot be used by itself.  It is a child component that only works within the [Menu](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/menu) component.


#### Template:

```xml
<el-submenu index="1">
  <template slot="title">Title</template>
  <el-menu-item index="1-1">item one</el-menu-item>
  <el-menu-item index="1-2">item two</el-menu-item>
  <el-menu-item index="1-3">item three</el-menu-item>
</el-submenu>
```


#### Script:

```js
import { Submenu, MenuItem } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Submenu,
    MenuItem
  }
}
```


#### Documentation:

* [Menu Component Docs](http://element.eleme.io/#/en-US/component/menu)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/submenu)
