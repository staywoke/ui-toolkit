Molecule › Button Group
---

The following is a quick example of how to use this component.

#### Template:

```xml
<el-button-group>
  <el-button type="primary" icon="el-icon-edit"></el-button>
  <el-button type="primary" icon="el-icon-share"></el-button>
  <el-button type="primary" icon="el-icon-delete"></el-button>
</el-button-group>
```

#### Script:
```js
import Button from '../atoms/button'
import ButtonGroup from '../molecules/button-group'

export default {
  name: 'MyComponent',
  components: {
    Button,
    ButtonGroup
  },
  data () {
    return {}
  }
}
```

#### Documentation:

* [Framework Docs](http://element.eleme.io/#/en-US/component/button)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/button-group/)
