Atom › Input
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
import { Input } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Input
  },
  data () {
    return {
      input: null
    }
  }
}
```


#### Documentation:

* [Input Component Docs](https://element.eleme.io/#/en-US/component/input)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/input)
