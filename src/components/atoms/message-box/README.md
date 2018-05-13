Atom › Message Box
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
import { MessageBox, Button } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    MessageBox,
    Button
  },
  methods: {
    open () {
      this.$confirm('This will permanently delete the file. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Delete completed'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Delete canceled'
        })
      })
    }
  }
}
```


#### Documentation:

* [Message Box Component Docs](https://element.eleme.io/#/en-US/component/message-box)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/message-box)
