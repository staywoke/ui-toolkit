Molecule › Tabs
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-tabs v-model="activeName" @tab-click="handleClick">
  <el-tab-pane label="User" name="first">User</el-tab-pane>
  <el-tab-pane label="Config" name="second">Config</el-tab-pane>
  <el-tab-pane label="Role" name="third">Role</el-tab-pane>
  <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
</el-tabs>
```


#### Script:

```js
import { Tabs, TabPane } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Tabs,
    TabPane
  },
  data() {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
```


#### Documentation:

* [Tabs Component Docs](http://element.eleme.io/#/en-US/component/tabs)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/tabs)
