Molecule › Row
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-row :gutter="10">
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
    <div class="grid-content bg-purple">
      A
    </div>
  </el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
    <div class="grid-content bg-purple-light">
      B
    </div>
  </el-col>
  <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
    <div class="grid-content bg-purple">
      C
    </div>
  </el-col>
  <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
    <div class="grid-content bg-purple-light">
      D
    </div>
  </el-col>
</el-row>
```


#### Script:
```js
import { Col, Row } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Col, Row
  },
  data () {
    return {}
  }
}
```


#### Documentation:

* [Row Component Docs](http://element.eleme.io/#/en-US/component/layout#row-attributes)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/row)
