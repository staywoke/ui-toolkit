Atom › Checkbox Button
---

The following is a quick example of how to use this component.


#### Template:

```xml
<el-checkbox-button name="my-checkbox" label="My Checkbox" true-label="Yes" false-label="No" border v-model="checked" @change="handleChange"></el-checkbox-button>
```


#### Script:
```js
import { Radio } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    CheckboxButton
  },
  data () {
    return {
      checked: false
    }
  },
  methods: {
    handleChange () {}
  }
}
```


#### Documentation:

* [Checkbox Component Docs](http://element.eleme.io/#/en-US/component/checkbox)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/checkbox-button)
