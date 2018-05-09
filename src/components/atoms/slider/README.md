Atom › Slider
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-slider
  v-model="input"
  range
  show-stops
  @change="changeHandler"
  :max="10"
/>
```


#### Script:
```js
import { Slider } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Slider
  },
  data () {
    return {
      input: 0
    }
  },
  methods: {
    changeHandler() {}
  }
}
```


#### Documentation:

* [Slider Component Docs](https://element.eleme.io/#/en-US/component/slider)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/slider)
