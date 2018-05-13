Atom › Notification
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-button type="primary" @click="open">
  Show Message
</el-button>
```


#### Script:
```js
import { Notification, Button } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Notification,
    Button
  },
  methods: {
    open () {
      this.$message({
        message: 'Congrats, this is a message.',
        type: 'success'
      })
    }
  }
}
```


#### Documentation:

* [Notification Component Docs](https://element.eleme.io/#/en-US/component/notification)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/notification)
