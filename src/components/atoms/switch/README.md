Atom › Switch
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-switch
  v-model="value"
  @change="handleChange"
/>
```


#### Script:
```js
import { Switch } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Switch
  },
  data () {
    return {
      value: true
    }
  },
  methods: {
    handleChange () {}
  }
}
```


#### Documentation:

* [Switch Component Docs](https://element.eleme.io/#/en-US/component/switch)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/switch)
