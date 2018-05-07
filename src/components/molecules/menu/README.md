Molecule › Menu
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-menu mode="horizontal" :default-active="activeIndex" @select="handleSelect">
  <el-menu-item index="1">
    <i class="el-icon-menu"></i>
    <span slot="title">Home</span>
  </el-menu-item>
  <el-submenu index="2">
    <template slot="title">
      <i class="el-icon-news"></i>
      <span slot="title">Sub Menu</span>
    </template>
    <el-menu-item index="2-1">item 1</el-menu-item>
    <el-menu-item index="2-2">item 2</el-menu-item>
    <el-submenu index="2-3">
      <template slot="title">item 3</template>
      <el-menu-item index="2-3-1">item 1</el-menu-item>
      <el-menu-item index="2-3-2">item 2</el-menu-item>
      <el-menu-item index="2-3-3">item 3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>
    <i class="el-icon-close"></i>
    <span slot="title">Disabled</span>
  </el-menu-item>
</el-menu>
```


#### Script:

```js
import { Menu, MenuItem, Submenu } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Menu,
    MenuItem,
    Submenu
  },
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect () {}
  }
}
```


#### Documentation:

* [Menu Component Docs](http://element.eleme.io/#/en-US/component/menu)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/menu)
