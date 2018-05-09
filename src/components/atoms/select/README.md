Atom › Select
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-input
  placeholder="Search ..."
  v-model="input"
  type="search"
  prefix-icon="el-icon-search"
/>
```


#### Script:
```js
import { Select, Option } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Select,
    Option
  },
  data () {
    return {
      input: null
    }
  }
}
```


#### Documentation:

* [Select Component Docs](https://element.eleme.io/#/en-US/component/select)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/select)
