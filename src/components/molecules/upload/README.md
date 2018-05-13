Molecule › Upload
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-transfer v-model="value" :data="data" />
```


#### Script:

```js
import { Upload } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Transfer
  },
  data() {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `Option ${ i }`,
          disabled: i % 4 === 0
        })
      }

      return data
    }

    return {
      data: generateData(),
      value: [1, 4]
    }
  }
}
```


#### Documentation:

* [Tree Component Docs](http://element.eleme.io/#/en-US/component/tree)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/tree)
