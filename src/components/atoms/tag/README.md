Atom › Tag
---
> The following is a quick example of how to use this component.


#### Template:

```xml
<el-tag :key="tag.name" v-for="tag in tags" :type="tag.type" closable @close="handleClose(tag.name)">{{ tag.name }}</el-tag>
```


#### Script:
```js
import { Tag } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Tag
  },
  data () {
    return {
      tags: [
        { name: 'Tag 1', type: '' },
        { name: 'Tag 2', type: 'success' },
        { name: 'Tag 3', type: 'info' },
        { name: 'Tag 4', type: 'warning' },
        { name: 'Tag 5', type: 'danger' }
      ]
    }
  },
  methods: {
    handleClose (name) {
      const index = this.tags.findIndex(tag => tag.name === name);
      this.tags.splice(index, 1);
    }
  }
}
```


#### Documentation:

* [Tag Component Docs](https://element.eleme.io/#/en-US/component/tag)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/tag)
