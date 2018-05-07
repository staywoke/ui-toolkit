Atom › Tooltip
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-tooltip :content="tooltip">
  <el-button>hover to activate</el-button>
</el-tooltip>`
```


#### Script:
```js
import { Tooltip, Button } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Tooltip,
    Button
  },
  data () {
    return {
      tooltip: 'Here is a helpful tip.'
    }
  },
  methods: {
    handleClose() {}
  }
}
```


#### Documentation:

* [Tooltip Component Docs](https://element.eleme.io/#/en-US/component/tooltip)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/tooltip)
