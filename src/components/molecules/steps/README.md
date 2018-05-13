Molecule › Steps
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-steps :active="step" align-center>
  <el-step title="Step 1" description="Some description" />
  <el-step title="Step 2" description="Some description" />
  <el-step title="Step 3" description="Some description" />
  <el-step title="Step 4" description="Some description" />
</el-steps>
```


#### Script:

```js
import { Steps, Step } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Steps,
    Step
  },
  data () {
    return {
      step: 2
    }
  }
}
```


#### Documentation:

* [Steps Component Docs](http://element.eleme.io/#/en-US/component/steps)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/steps)
