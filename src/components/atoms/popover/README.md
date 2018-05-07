Atom › Popover
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-popover :title="title" :content="content" @show="handleShow" @hide="handleHide" @after-enter="handleAfterEnter" @after-leave="handleAfterLeave">
  <el-button slot="reference">click to activate</el-button>
</el-popover>
```


#### Script:
```js
import { Popover, Button } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Popover,
    Button
  },
  data () {
    return {
      title: 'Title',
      content: 'Here is a helpful message for you to read.'
    }
  },
  methods: {
    handleShow() {},
    handleHide() {},
    handleAfterEnter() {},
    handleAfterLeave() {}
  }
}
```


#### Documentation:

* [Popover Component Docs](https://element.eleme.io/#/en-US/component/popover)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/popover)
