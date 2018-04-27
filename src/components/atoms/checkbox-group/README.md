Atom › Checkbox Group
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-checkbox-group name="my-option" v-model="checked" @change="handleChange">
  <el-checkbox-button label="a">Option A</el-checkbox-button>
  <el-checkbox-button label="b">Option B</el-checkbox-button>
  <el-checkbox-button label="c">Option C</el-checkbox-button>
</el-checkbox-group>
```


#### Script:

```js
import { CheckboxGroup, CheckboxButton } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    CheckboxGroup,
    CheckboxButton
  },
  data () {
    return {
      checked: ['a']
    }
  },
  methods: {
    handleChange () {}
  }
}
```


#### Documentation:

* [Checkbox Component Docs](http://element.eleme.io/#/en-US/component/checkbox)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/checkbox-group)
