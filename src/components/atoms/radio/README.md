Atom › Radio
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-radio v-model="radio" label="my-value" @change="handleChange">
  Option A
</el-radio>
```


#### Script:
```js
import { Radio } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Radio
  },
  data () {
    return {
      radio: '1'
    }
  },
  methods: {
    handleChange () {}
  }
}
```


#### Documentation:

* [Radio Component Docs](http://element.eleme.io/#/en-US/component/radio)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/radio)
