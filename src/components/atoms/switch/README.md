Atom › Switch
---
> The following is a quick example of how to use this component.


#### Template:

```xml
<el-switch ${attributes} v-model="value" @change="handleClose"></el-switch>
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
    handleClose () {}
  }
}
```


#### Documentation:

* [Switch Component Docs](https://element.eleme.io/#/en-US/component/switch)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/switch)
