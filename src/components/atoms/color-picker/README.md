Atom › Color Picker
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-color-picker
  v-model="color"
  :predefine="predefineColors"
  @change="changeHandler"
  @active-change="actionChangeHandler"
/>
```


#### Script:
```js
import { ColorPicker } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    ColorPicker
  },
  data () {
    return {
      color: '#409EFF',
      predefineColors: [
        '#409EFF',
        '#67C23A',
        '#E6A23C',
        '#F56C6C',
        '#909399'
      ]
    }
  },
  methods: {
    changeHandler (color) {},
    actionChangeHandler (color) {}
  }
}
```


#### Documentation:

* [Color Picker Component Docs](http://element.eleme.io/#/en-US/component/color-picker)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/atoms/color-picker)
