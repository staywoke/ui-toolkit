Atom › Input Number
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-input-number
  placeholder="Placeholder"
  v-model="input"
  @blur="blurHandler"
  @focus="focusHandler"
  @change="changeHandler"
/>
```


#### Script:
```js
import { InputNumber } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    InputNumber
  },
  data () {
    return {
      input: 0
    }
  },
  methods: {
    blurHandler() {},
    focusHandler() {},
    changeHandler() {}
  }
}
```


#### Documentation:

* [Input Number Component Docs](https://element.eleme.io/#/en-US/component/input-number)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/input-number)
