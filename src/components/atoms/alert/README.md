Atom › Alert
---
> The following is a quick example of how to use this component.


#### Template:

```xml
<el-alert type="success" title="Message Text" showIcon @close="handleClose"></el-alert>
```


#### Script:
```js
import { Alert } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Alert
  },
  data () {
    return {}
  },
  methods: {
    handleClose () {}
  }
}
```


#### Documentation:

* [Alert Component Docs](https://element.eleme.io/#/en-US/component/alert)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/alert)
