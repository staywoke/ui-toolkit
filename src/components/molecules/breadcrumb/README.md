Atom › Breadcrumb
---

> The following is a quick example of how to use this component.


#### Template:

```xml
<el-breadcrumb>
  <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/section' }">section</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/section/subsection' }">subsection</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/section/subsection/page' }">page</el-breadcrumb-item>
</el-breadcrumb>
```


#### Script:

```js
import { Breadcrumb, BreadcrumbItem } from 'ui-toolkit'

export default {
  name: 'MyComponent',
  components: {
    Breadcrumb,
    BreadcrumbItem
  }
}
```


#### Documentation:

* [Breadcrumb Component Docs](http://element.eleme.io/#/en-US/component/breadcrumb)
* [StayWoke Source](https://github.com/staywoke/ui-toolkit/tree/master/src/components/molecules/breadcrumb)
