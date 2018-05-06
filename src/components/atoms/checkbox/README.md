Atom › Checkbox
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-checkbox
  name="my-checkbox"
  label="My Checkbox"
  true-label="Yes"
  false-label="No"
  v-model="checked"
  @change="handleChange"
/>
```


#### Script:

```js
import { Checkbox } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Checkbox
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
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/checkbox)
