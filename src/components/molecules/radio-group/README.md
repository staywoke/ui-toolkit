Molecule › Radio Group
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-radio-group name="my-option" v-model="radio" @change="handleChange">
  <el-radio-button label="a">Option A</el-radio-button>
  <el-radio-button label="b">Option B</el-radio-button>
  <el-radio-button label="c">Option C</el-radio-button>
</el-radio-group>
```


#### Script:

```js
import { RadioGroup, RadioButton } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    RadioGroup,
    RadioButton
  },
  data () {
    return {
      radio: 'a'
    }
  },
  methods: {
    handleChange () {}
  }
}
```


#### Documentation:

* [Radio Component Docs](http://element.eleme.io/#/en-US/component/radio)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/radio)
