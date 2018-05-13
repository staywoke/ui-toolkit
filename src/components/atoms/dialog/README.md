Atom › Dialog
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-dialog
  title="Tips"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>This is a message</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
  </span>
</el-dialog>
```


#### Script:
```js
import { Dialog } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Dialog
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('Are you sure to close this dialog?')
      .then(_ => {
        done()
      })
      .catch(_ => {

      })
    }
  }
}
```


#### Documentation:

* [Dialog Component Docs](https://element.eleme.io/#/en-US/component/dialog)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/dialog)
