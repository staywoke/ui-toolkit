Atom › Time Picker
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-time-picker
  v-model="value"
  :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }"
  placeholder="Select time"
  @blur="blurHandler"
  @focus="focusHandler"
  @change="changeHandler"
/>
```


#### Script:
```js
import { TimePicker } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    TimePicker
  },
  data () {
    return {
      value: null
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

* [Time Picker Component Docs](https://element.eleme.io/#/en-US/component/time-picker)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/time-picker)
