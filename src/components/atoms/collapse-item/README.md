Atom › Collapse Item
---

> The following is a quick example of how to use this component.

**NOTE:** This component cannot be used by itself.  It is a child component that only works within the [Collapse](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/collapse) component.


#### Template:

```xml
<el-collapse>
  <el-collapse-item title="Item" name="1">
    <div>Content</div>
  </el-collapse-item>
</el-collapse>
```


#### Script:
```js
import { CollapseItem } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    CollapseItem
  }
}
```


#### Documentation:

* [Collapse Component Docs](https://element.eleme.io/#/en-US/component/collapse)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/collapse-item)
