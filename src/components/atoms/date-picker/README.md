Atom › Date Picker
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-date-picker ${attributes}
  v-model="input"
  placeholder="Pick a day"
  @blur="blurHandler"
  @focus="focusHandler"
  @change="changeHandler"
/>
```


#### Script:
```js
import { DatePicker } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    DatePicker
  },
  data () {
    return {
      input: null
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

* [Date Picker Component Docs](https://element.eleme.io/#/en-US/component/date-picker)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/date-picker)
