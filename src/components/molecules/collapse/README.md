Molecule › Collapse
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-collapse @change="handleChange">
  <el-collapse-item v-for="item in 4" :key="item" :title="'Section ' + item" :name="item">
    <div>Content {{ item }}</div>
  </el-collapse-item>
</el-collapse>
```


#### Script:

```js
import { Collapse, CollapseItem } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Collapse,
    CollapseItem
  },
  methods: {
    handleChange () {}
  }
}
```


#### Documentation:

* [Collapse Component Docs](http://element.eleme.io/#/en-US/component/collapse)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/collapse)
