Molecule › Option Group
---

> The following is a quick example of how to use this component.

**NOTE:** This component cannot be used by itself.  It is a child component that only works within the [Select](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/select) component.


#### Template:

```xml
<el-option-group label="Group One">
  <el-option>item one</el-option>
  <el-option>item one</el-option>
</el-option-group>
```


#### Script:

```js
import { OptionGroup, Option } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    OptionGroup,
    Option
  }
}
```


#### Documentation:

* [Select Component Docs](http://element.eleme.io/#/en-US/component/select)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/option-group)
