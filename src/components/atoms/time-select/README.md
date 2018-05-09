Atom › Time Select
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-time-select
  v-model="value"
  :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }"
  placeholder="Select time"
  @blur="blurHandler"
  @focus="focusHandler"
  @change="changeHandler"
/>
```


#### Script:
```js
import { TimeSelect } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    TimeSelect
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

* [Time Select Component Docs](https://element.eleme.io/#/en-US/component/time-picker)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/time-select)
