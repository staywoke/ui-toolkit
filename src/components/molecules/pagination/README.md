Molecule › Pagination
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-pagination
  :total="100"
  layout="prev, pager, next"
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  @prev-click="handlePrevClick"
  @next-click="handleNextClick"
/>
```


#### Script:

```js
import { Pagination } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Pagination
  },
  methods: {
    handleSizeChange(size) {
      console.log(size)
    },
    handleCurrentChange(page) {
      console.log(page)
    },
    handlePrevClick(page) {
      console.log(page)
    },
    handleNextClick(page) {
      console.log(page)
    }
  }
}
```


#### Documentation:

* [Pagination Component Docs](http://element.eleme.io/#/en-US/component/pagination)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/pagination)
