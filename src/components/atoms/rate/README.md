Atom › Rate
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-rate v-model="value" @change="handleChange" />
```


#### Script:
```js
import { Rate } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Rate
  },
  data () {
    return {
      value: 3.7
    }
  },
  methods: {
    handleChange (name) {}
  }
}
```


#### Documentation:

* [Rate Component Docs](https://element.eleme.io/#/en-US/component/rate)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/rate)
